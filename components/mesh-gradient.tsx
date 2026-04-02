"use client";

import { useEffect, useRef } from "react";

export function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Soft pastel colors for light theme
    const colors = [
      { r: 255, g: 237, b: 213 }, // Warm cream
      { r: 254, g: 242, b: 242 }, // Soft rose
      { r: 240, g: 249, b: 255 }, // Light blue
      { r: 243, g: 244, b: 246 }, // Cool gray
    ];

    const blobs = colors.map((color, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 300 + Math.random() * 200,
      color,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      phase: (i * Math.PI * 2) / colors.length,
    }));

    const animate = () => {
      time += 0.005;
      ctx.fillStyle = "#fafaf9";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        // Gentle floating motion
        blob.x += blob.vx + Math.sin(time + blob.phase) * 0.3;
        blob.y += blob.vy + Math.cos(time + blob.phase) * 0.3;

        // Wrap around screen
        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );

        gradient.addColorStop(
          0,
          `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.4)`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.1)`
        );
        gradient.addColorStop(1, "rgba(250, 250, 249, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-60"
      style={{ filter: "blur(60px)" }}
    />
  );
}
