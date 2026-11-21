
import { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  opacity: number;
}

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    let animationFrame: number;
    let width = 0;
    let height = 0;

    const flakes: Snowflake[] = [];

    const createFlakes = () => {
      flakes.length = 0;

      for (let i = 0; i < 90; i++) {
        flakes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.7 + 0.3,
          drift: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createFlakes();
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      flakes.forEach((flake) => {
        flake.y += flake.speed;
        flake.x += flake.drift;

        if (flake.y > height + 5) {
          flake.y = -5;
          flake.x = Math.random() * width;
        }

        if (flake.x > width + 5) flake.x = -5;
        if (flake.x < -5) flake.x = width + 5;

        context.beginPath();
        context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(235, 242, 250, ${flake.opacity})`;
        context.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="snowfall-canvas" />;
}
