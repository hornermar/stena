"use strict";

let world;
// let semiCircleWhite10;
// let semiCircleBlack;

const IMG = [];
let myFont;

function preload() {
  const semiCircleBlack8 = loadImage("assets/images/semi-circle-black-8.png");
  const semiCircleWhite8 = loadImage("assets/images/semi-circle-white-8.png");
  const semiCircleBlack10 = loadImage("assets/images/semi-circle-black-10.png");
  const semiCircleWhite10 = loadImage("assets/images/semi-circle-white-10.png");
  const semiCircleBlack12 = loadImage("assets/images/semi-circle-black-12.png");
  const semiCircleWhite12 = loadImage("assets/images/semi-circle-white-12.png");
  const semiCircleBlack20 = loadImage("assets/images/semi-circle-black-20.png");
  const semiCircleWhite20 = loadImage("assets/images/semi-circle-white-20.png");
  IMG.push(semiCircleBlack10);
  IMG.push(semiCircleWhite10);
  IMG.push(semiCircleBlack12);
  IMG.push(semiCircleWhite12);
  IMG.push(semiCircleBlack8);
  IMG.push(semiCircleWhite8);
  IMG.push(semiCircleBlack20);
  IMG.push(semiCircleWhite20);

  myFont = loadFont("assets/Press_Start_2P/PressStart2P-Regular.ttf");
}

function setup() {
  rectMode(CENTER);
  createCanvas(800, 400);
  frameRate(30);
  world = new World();
  background(0);
  strokeWeight(2);
  // noLoop();
}

function draw() {
  world.tick();
}

function mousePressed() {
  world.keyPressed();
}

function keyPressed() {
  world.keyPressed();
}
