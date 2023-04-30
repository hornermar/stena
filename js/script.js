"use strict";

let world;
// let semiCircleWhite10;
// let semiCircleBlack;

const IMG = [];
let myFont;

function preload() {
  const semiCircleBlack10 = loadImage("assets/images/semi-circle-black-10.png");
  const semiCircleWhite10 = loadImage("assets/images/semi-circle-white-10.png");
  const semiCircleBlack12 = loadImage("assets/images/semi-circle-black-12.png");
  const semiCircleWhite12 = loadImage("assets/images/semi-circle-white-12.png");
  IMG.push(semiCircleBlack10);
  IMG.push(semiCircleWhite10);
  IMG.push(semiCircleBlack12);
  IMG.push(semiCircleWhite12);

  myFont = loadFont("assets/Press_Start_2P/PressStart2P-Regular.ttf");
}

function setup() {
  rectMode(CENTER);
  createCanvas(800, 400);
  frameRate(1);
  world = new World();
  background(0);
  strokeWeight(2);
  // noLoop();
}

function draw() {
  world.tick();
}

function mousePressed() {
  console.log("mousePressed");
  world.keyPressed();
}

function keyPressed() {
  world.keyPressed();
}
