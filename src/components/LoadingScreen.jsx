// src/compnents/LoadingScreen.jsx
import { useEffect, useRef } from "react";

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
      const start = [255, 196, 0];
      const end = [5, 239, 209];
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
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <canvas ref={canvasRef} className="w-full h-full" />
      <button
        onClick={onLoaded}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Saltar Intro
      </button>
    </div>
  );
}
