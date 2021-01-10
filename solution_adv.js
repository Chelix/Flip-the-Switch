// Scroll down to see a sample solution.



















// Solutions are usually available for exercises and are
// there as a resource to you.




























/* global
 *    HSB,
 *    background,
 *    circle,
 *    color,
 *    colorMode,
 *    createCanvas,
 *    ellipse,
 *    fill,
 *    height,
 *    line,
 *    mouseX,
 *    mouseY,
 *    noStroke,
 *    resizeCanvas,
 *    stroke,
 *    text,
 *    width,
 *    windowHeight,
 *    windowWidth,
 */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let isDarkTheme = mouseX > width / 2;

  background(isDarkTheme ? 50 : 205);
  
  stroke(isDarkTheme ? 205 : 50);
  line(width / 2, 0, width / 2, height);
  
  fill(isDarkTheme ? 205 : 50);
  text('Flip the switch', 10, 20);
  
  noStroke();
  
  fill(isDarkTheme ? 'blue' : 'red');
  circle(width / 4, height / 2, width / 10);
  
  fill(isDarkTheme ? 'red' : 'blue');
  circle(3 * width / 4, height / 2, width / 10);
  
  fill(isDarkTheme ? 205 : 50);
  circle(mouseX, mouseY, width / 10);
}