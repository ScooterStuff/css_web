"use client";
import { useEffect, useRef, useState } from 'react';

const MouseTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovering, setHovering] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; radius: number; alpha: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const particles: { x: number; y: number; distance: number; color: string; alpha: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.push({
        x: mouseX,
        y: mouseY,
        distance: 0,
        color: hovering ? '#0751E8' : 'rgba(255, 255, 255, 1)',
        alpha: 1, // Initial alpha set to 1 (fully opaque)
      });
    };

    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      setRipples((prevRipples) => [
        ...prevRipples,
        { x: mouseX, y: mouseY, radius: 0, alpha: 1 }, // Add new ripple on click
      ]);
    };

    const updateParticlesAndRipples = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((particle, index) => {
        particle.distance += 5;

        // Opacity decreases further as distance increases
        particle.alpha = 1 - particle.distance / 100; // Opacity fades out faster with distance

        // Ensure the size doesn't go below 0
        const size = Math.max(10 * (1 - particle.distance / 50), 0); // Clamp size to avoid negative values

        if (particle.alpha <= 0 || size <= 0) {
          particles.splice(index, 1); // Remove the particle when it's fully transparent or too small
        } else {
          const gradientColor = hovering ? '#57CCEC' : `rgba(255, 255, 255, ${particle.alpha})`;
          ctx.fillStyle = gradientColor;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update ripples
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.alpha > 0).map((ripple) => {
          ripple.radius += 5; // Increase ripple size for more visible effect
          ripple.alpha -= 0.03; // Fade out ripple gradually

          // Draw the ripple
          ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`; // White ripple effect
          ctx.lineWidth = 2; // Line width for the ripple
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();

          return ripple;
        })
      );

      requestAnimationFrame(updateParticlesAndRipples);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseOverInteractive = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseClick); // Add listener for mouse clicks
    window.addEventListener('mouseover', handleMouseOverInteractive);

    requestAnimationFrame(updateParticlesAndRipples);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseClick);
      window.removeEventListener('mouseover', handleMouseOverInteractive);
    };
  }, [hovering]);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';
    return () => {
      // Restore the cursor when unmounting
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default MouseTrail;
