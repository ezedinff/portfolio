"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  return <Table />;
}

function Table() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    if (!canvas) return;
    canvas.width = 750;
    canvas.height = 585;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    contextRef.current = context;

    const leftPaddle = new Paddle(
      2 * 15,
      canvas.height / 2 - 80 / 2,
      15,
      80,
      "white",
      context,
      canvas
    );
    const rightPaddle = new Paddle(
      canvas.width - 3 * 15,
      canvas.height / 2 - 80 / 2,
      15,
      80,
      "white",
      context,
      canvas
    );
    const ball = new Ball(
      canvas.width / 2,
      canvas.height / 2,
      15,
      "white",
      context,
      canvas,
      leftPaddle,
      rightPaddle
    );

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw border
      context.strokeStyle = "white";
      context.strokeRect(0, 0, canvas.width, canvas.height);

      // Draw vertical line in the middle
      context.beginPath();
      context.moveTo(canvas.width / 2, 0);
      context.lineTo(canvas.width / 2, canvas.height);
      context.stroke();

      leftPaddle.update();
      rightPaddle.update();
      ball.update();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas ref={canvasRef} style={{ border: "1px solid black" }}></canvas>
  );
}

class Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
  dx: number;
  dy: number;
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  leftPaddle: Paddle;
  rightPaddle: Paddle;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    leftPaddle: Paddle,
    rightPaddle: Paddle
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = 5; // Change in x
    this.dy = -5; // Change in y
    this.context = context;
    this.canvas = canvas;
    this.leftPaddle = leftPaddle;
    this.rightPaddle = rightPaddle;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  update() {
    this.draw();

    this.x += this.dx;
    this.y += this.dy;

    // Handle ball collisions with walls
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
      this.dy = -this.dy;
    }

    // Check for goal and reset the ball
    if (this.x < 0 || this.x > this.canvas.width) {
      this.reset();
    }

    // Check for ball collisions with paddles
    if (
      this.collidesWithPaddle(this.leftPaddle) ||
      this.collidesWithPaddle(this.rightPaddle)
    ) {
      this.dx = -this.dx;
    }
  }

  collidesWithPaddle(paddle: Paddle) {
    return (
      this.x + this.radius > paddle.x &&
      this.x - this.radius < paddle.x + paddle.width &&
      this.y + this.radius > paddle.y &&
      this.y - this.radius < paddle.y + paddle.height
    );
  }

  reset() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
  }
}

class Paddle {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  dy: number;
  context!: CanvasRenderingContext2D;
  canvas!: HTMLCanvasElement;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dy = 0;
    this.context = context;
    this.canvas = canvas;

    // Event listeners for paddle movement
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  draw() {
    this.context.beginPath();
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  update() {
    this.draw();

    // Move the paddle based on keyboard input
    if (this.dy < 0 && this.y > 0) {
      this.y += this.dy;
    } else if (this.dy > 0 && this.y + this.height < this.canvas.height) {
      this.y += this.dy;
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp") {
      this.dy = -6; // Adjust the paddle speed if needed
    } else if (event.key === "ArrowDown") {
      this.dy = 6;
    }
  };

  handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      this.dy = 0;
    }
  };
}

class Score {
  x: number;
  y: number;
  value: number;
  context!: CanvasRenderingContext2D;
  constructor(x: number, y: number, context: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.value = 0;
    this.context = context;
  }

  draw(context: CanvasRenderingContext2D) {
    context.font = "20px Arial";
    context.fillStyle = "black";
    context.fillText(`Score: ${this.value}`, this.x, this.y);
  }

  increase() {
    this.value += 1;
  }

  update() {
    this.draw(this.context);
  }

  reset() {
    this.value = 0;
  }
}
