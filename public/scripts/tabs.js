import { Application, Controller } from "stimulus";

class TabsController extends Controller {
  static targets = [ "tab", "panel" ];
  static values = { index: Number };

  initialize() {
    this.showTab();
  }

  change(event) {
    event.preventDefault();

    this.indexValue = this.tabTargets.indexOf(event.currentTarget);
    this.showTab();
  }

  showTab() {
    this.panelTargets.forEach((el, index) => {
      if (index === this.indexValue) {
        el.classList.add("opacity-100", "z-10");
        el.classList.remove("opacity-0", "z-0", "pointer-events-none");
      } else {
        el.classList.add("opacity-0", "z-0", "pointer-events-none");
        el.classList.remove("opacity-100", "z-10");
      }
    });

    this.tabTargets.forEach((el, index) => {
      const stepTitle = el.querySelector(".step-title");
      const stepIndex = el.querySelector(".step-index");

      if (index === this.indexValue) {
        stepTitle?.classList.add("text-black");
        stepTitle?.classList.remove("text-gray-600");
        el.classList.add("border-blue-500");
        el.classList.remove("border-gray-300");
        stepIndex?.classList.add("text-blue-500");
        stepIndex?.classList.remove("text-gray-600");
      } else {
        stepTitle?.classList.add("text-gray-600");
        stepTitle?.classList.remove("text-black");
        el.classList.add("border-gray-300");
        el.classList.remove("border-blue-500");
        stepIndex?.classList.add("text-gray-600");
        stepIndex?.classList.remove("text-blue-500");
      }
    });
  }
}

window.Stimulus = Application.start();
Stimulus.register("tabs", TabsController);