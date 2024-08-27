// src/compnents/LoadingScreen.jsx
import { useEffect, useRef } from "react";
import "./LoadingScreen.css"; // Crear un archivo CSS para efectos avanzados

export default function LoadingScreen({ onLoaded }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const FX = {};
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    FX.canvas = canvas;
    FX.ctx = ctx;
    FX.width = canvas.width;
    FX.height = canvas.height;
    FX.particles = [];

    const particle = function (args) {
      this.sincount = 0;
      this.x = args.x;
      this.y = args.y;
      this.z = args.z;

      this.origin = { x: 0, y: 0 };
      this.target = { x: 0, y: 0 };
      this.color = FX.gradient.get();

      this.polys = [];
      for (let i = 0; i < 3; i++) {
        this.polys.push([-5 + Math.random() * 10, -5 + Math.random() * 10]);
      }
    };

    particle.prototype.update = function () {
      const e = this;
      if (e.sincount === 0) {
        e.origin.x = e.x;
        e.origin.y = e.y;
        e.target.x = -30 + Math.random() * 60;
        e.target.y = -30 - Math.random() * 10;
      }
      e.sincount += e.z;
      e.x = e.origin.x + e.target.x * Math.sin(FX.rad(e.sincount));
      e.y = e.origin.y + e.target.y * Math.sin(FX.rad(e.sincount));

      if (e.sincount > 70) {
        e.sincount = 0;
        if (e.y < 0) e.y = FX.height - Math.random() * 10;
        if (e.x < 0) e.x = FX.width - Math.random() * 10;
        if (e.x > FX.width) e.x = Math.random() * 10;
      }
    };

    particle.prototype.draw = function () {
      const e = this;
      const c = this.color;
      ctx.fillStyle = `rgba(${c.r},${c.g},${c.b}, ${e.z})`;
      ctx.beginPath();
      ctx.moveTo(e.x + e.polys[0][0], e.y + e.polys[0][1]);
      for (let i = 1, k = e.polys.length; i < k; i++) {
        ctx.lineTo(e.x + e.polys[i][0], e.y + e.polys[i][1]);
      }
      ctx.lineTo(e.x + e.polys[0][0], e.y + e.polys[0][1]);
      ctx.fill();
    };

    FX.gradient = (function () {
      const amount = 32;
      const start = [245, 58, 105]; // Cyberpunk pink
      const end = [0, 204, 255]; // Cyberpunk cyan
      const steps = [];
      const colors = [];

      const create = (function () {
        steps[0] = (start[0] - end[0]) / amount;
        steps[1] = (start[1] - end[1]) / amount;
        steps[2] = (start[2] - end[2]) / amount;

        for (let i = 0; i <= amount; i++) {
          colors[i] = [
            Math.round(start[0] - steps[0] * i),
            Math.round(start[1] - steps[1] * i),
            Math.round(start[2] - steps[2] * i),
          ];
        }
      })();

      const get = function () {
        const rand = Math.round(Math.random() * amount);
        return { r: colors[rand][0], g: colors[rand][1], b: colors[rand][2] };
      };

      return { get };
    })();

    FX.rad = function (deg) {
      return (deg * Math.PI) / 180;
    };

    FX.loop = function () {
      ctx.clearRect(0, 0, FX.width, FX.height);
      for (let i in FX.particles) {
        FX.particles[i].update();
        FX.particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(FX.loop);
    };

    FX.setFullscreen = function () {
      FX.width = canvas.width = window.innerWidth;
      FX.height = canvas.height = window.innerHeight;
    };

    FX.setFullscreen();

    for (let i = 0; i < 256; i++) {
      FX.particles.push(
        new particle({
          x: Math.round(Math.random() * FX.width),
          y: Math.round(Math.random() * FX.height),
          z: Math.round(Math.random() * 10) / 10,
        })
      );
    }

    FX.loop();

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 text-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      <h1 className="neon-text glitch-effect absolute top-1/3 text-5xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg">
        Oslar-code Loading Portfolio
      </h1>
      <button
        onClick={onLoaded}
        className="neon-button absolute bottom-4 right-4 flex items-center justify-center w-40 h-16 bg-transparent text-yellow-400 border-2 border-yellow-400 rounded-lg transform hover:scale-110 transition-transform shadow-neon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="ml-2">Saltar Intro</span>
      </button>
    </div>
  );
}
