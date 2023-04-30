"use strict";

let world;
let semiCircleWhite;
let semiCircleBlack;

const IMG = [];
let myFont;

function preload() {
  semiCircleBlack = loadImage("assets/images/semi-circle-black-10.png");
  semiCircleWhite = loadImage("assets/images/semi-circle-white-10.png");
  IMG.push(semiCircleBlack);
  IMG.push(semiCircleWhite);

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
  world.keyPressed();
}

function keyPressed() {
  world.keyPressed();
}
