import React, { useRef, useEffect } from 'react';

function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Draw grid
    context.strokeStyle = '#ccc';
    for (let x = 0; x <= canvas.width; x += 20) {
      context.moveTo(x, 0);
      context.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += 20) {
      context.moveTo(0, y);
      context.lineTo(canvas.width, y);
    }
    context.stroke();
  }, []);

  return (
    <canvas ref={canvasRef} style={{ border: '1px solid #000' }} />
  );
}

export default Canvas;

