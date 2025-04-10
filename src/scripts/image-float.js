
const elements = document.querySelectorAll(".image-float");
const amplitude = 6;
const speed = 0.005;
const wobbleAmplitude = 2;
const wobbleSpeed = 0.01;

elements.forEach((el) => {
  let angle = Math.random() * Math.PI * 2;
  let wobbleAngle = Math.random() * Math.PI * 2;

  const animate = () => {
    angle += speed;
    wobbleAngle += wobbleSpeed;

    const x = Math.cos(angle) * amplitude;
    const y = Math.sin(angle) * amplitude;
    const rotation = Math.sin(wobbleAngle) * wobbleAmplitude;

    el.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
  };

  animate();
});