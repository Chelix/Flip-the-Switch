/* ____    ___       _      _       ____  
  / ___|  / _ \     / \    | |     / ___| 
 | |  _  | | | |   / _ \   | |     \___ \ 
 | |_| | | |_| |  / ___ \  | |___   ___) |
  \____|  \___/  /_/   \_\ |_____| |____/ 
                                               
1) Try out HSB colors
2) Use a new function
3) Respond to canvas size
4) Use the mouse position to move the gray circle
5) Flip the switch!

  ____    _____   ____    _____   _____    ____   _   _ 
 / ___|  |_   _| |  _ \  | ____| |_   _|  / ___| | | | |
 \___ \    | |   | |_) | |  _|     | |   | |     | |_| |
  ___) |   | |   |  _ <  | |___    | |   | |___  |  _  |
 |____/    |_|   |_| \_\ |_____|   |_|    \____| |_| |_|

6) Build in another toggle that responds to vertical movement
   across the center of the screen.
7) Build a painting app with colored rectangles in the corners.
   Each time you move your mouse to a corner, have the background
   change to match that color.
8) Make your logo(s) change color when the mouse goes over them
   (or close to them, if that's easier).

*/

// Name any p5.js functions we use in the global so Glitch can recognize them.
/* global
 *    HSB,
 *    background,
 *    color,
 *    colorMode,
 *    createCanvas,
 *    ellipse,
 *    fill,
 *    line,
 *    noStroke,
 *    stroke,
 *    text,
 *    height
 *   width
 *   globalSat
 *   globalBri
 *   mouseX
 *   mouseY
 */

let backgroundColor;
let color1;
let color2;
let textColor;
let globalSat;
let globalBrit;

function setup() {
  // Canvas & color settings
  createCanvas(400, 500);
  colorMode(HSB, 100, 100, 100);
  noStroke();

  globalSat = 80;
  globalBri = 90;

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);

  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(320, globalSat, globalBri);
  color2 = color(200, globalSat, globalBri);
}

function draw() {
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  changebackgroundColor();
  drawCenterLine();




// The red and blue circles:
fill(color1);
ellipse(100, 375, 50);
fill(color2);
ellipse(100, 125, 50);

// The grey circle and the text:
fill(textColor);
ellipse(mouseX, mouseY, 50);
text("Flip the switch", 20, 20);

}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, 400, height / 2);

  noStroke();
}

function changebackgroundColor() {
  if (mouseX > width / 2) {
    if (mouseY > height / 2) {
      backgroundColor = color(20);
    } else {
      backgroundColor = color(0);   
     }
    } else {
    if (mouseY <= height / 2) {
      backgroundColor = color(80);
    } else {
      backgroundColor = color(100);
    }
  }
  background(backgroundColor);
}
