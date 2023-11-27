"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  return <Table />;
}

function Table() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [score, setScore] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
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
      canvas,
      true
    );
    const rightPaddle = new Paddle(
      canvas.width - 3 * 15,
      canvas.height / 2 - 80 / 2,
      15,
      80,
      "white",
      context,
      canvas,
      false
    );

    const scoreBoard = new Score(
      canvas.width / 2 - 20,
      40,
      score.left,
      score.right,
      context,
      setScore
    );

    const ball = new Ball(
      canvas.width / 2,
      canvas.height / 2,
      15,
      "white",
      context,
      canvas,
      leftPaddle,
      rightPaddle,
      scoreBoard
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
      rightPaddle.update(ball); // Pass the ball's y position to the AI-controlled paddle
      ball.update();
      scoreBoard.update();

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

  scoreBoard!: Score;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    leftPaddle: Paddle,
    rightPaddle: Paddle,
    scoreBoard: Score
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
    this.scoreBoard = scoreBoard;
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
    if (this.x + this.radius > this.canvas.width) {
      this.scoreBoard.updateScore("left");
      this.reset();
    } else if (this.x - this.radius < 0) {
      this.scoreBoard.updateScore("right");
      this.reset();
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
  isUserControlled: boolean;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    isUserControlled: boolean
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dy = 0;
    this.context = context;
    this.canvas = canvas;
    this.isUserControlled = isUserControlled;

    // Event listeners for paddle movement
    if (this.isUserControlled) {
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
    }
  }

  draw() {
    this.context.beginPath();
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  update(ball?: Ball) {
    this.draw();

    // Move the paddle based on keyboard input (if user-controlled)
    if (this.isUserControlled) {
      if (this.dy < 0 && this.y > 0) {
        this.y += this.dy;
      } else if (this.dy > 0 && this.y + this.height < this.canvas.height) {
        this.y += this.dy;
      }
    } else {
      // Move the paddle based on the ball's y position (if AI-controlled)
      if (ball) {
        if (this.y + this.height / 2 < ball.y) {
          this.y += 4;
        } else if (this.y + this.height / 2 > ball.y) {
          this.y -= 4;
        }
      }
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (this.isUserControlled) {
      if (event.key === "ArrowUp") {
        this.dy = -6; // Adjust the paddle speed if needed
      } else if (event.key === "ArrowDown") {
        this.dy = 6;
      }
    }
  };

  handleKeyUp = (event: KeyboardEvent) => {
    if (this.isUserControlled) {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        this.dy = 0;
      }
    }
  };
}

class Score {
  x: number;
  y: number;
  left!: number;
  right!: number;
  context!: CanvasRenderingContext2D;
  setScore!: React.Dispatch<
    React.SetStateAction<{
      left: number;
      right: number;
    }>
  >;
  constructor(
    x: number,
    y: number,
    left: number,
    right: number,
    context: CanvasRenderingContext2D,
    setScore: React.Dispatch<
      React.SetStateAction<{
        left: number;
        right: number;
      }>>
  ) {
    this.x = x;
    this.y = y;
    this.left = left;
    this.right = right;
    this.context = context;
    this.setScore = setScore;
  }

  draw(context: CanvasRenderingContext2D) {
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.fillText(`${this.left} - ${this.right}`, this.x, this.y);
  }

  updateScore(position: "left" | "right") {
    if (position === "left") {
      this.left += 1;
    } else {
      this.right += 1;
    }
    this.setScore({ left: this.left, right: this.right });
  }

  update() {
    this.draw(this.context);
  }
}
