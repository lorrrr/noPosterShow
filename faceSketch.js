
var sketch = function(p) {


  p.setup = function() {
    p.canvas = p.createCanvas(p.windowWidth/4,p.windowWidth/4);
    p.canvas.parent('faceSketch');
    p.canvas.style('display', 'block');
    p.strokeCap(p.PROJECT);

  }

  p.draw = function() {

    p.noStroke();
    p.fill(p.color($("#custom").spectrum("get").toHexString()));
    p.ellipse(p.width/2, p.width/2,p.width,p.width);
    p.v = $("#custom").spectrum("get").toHsv().v;
    p.s = (document.getElementById("myRange").value-50)*3;
    if (p.v>= 0.4) {

      p.stroke(0);


    } else {p.stroke(255);}


    p.strokeWeight(5);
    p.curve(p.width/4, p.height/3*2-p.s,
            p.width/4,p.height/3*2,
            p.width/4*3, p.height/3*2,
            p.width/4*3,p.height/3*2-p.s);
   p.noStroke();
   if (p.v>= 0.4) {
     p.fill(0);

   } else {p.fill(255)}


   p.ellipse(p.width/10*3, p.height/10*4,p.width/8,p.width/8);
   p.ellipse(p.width/10*7,p.height/10*4,p.width/8,p.width/8);

  }

  p.windowResized =function() {
    p.resizeCanvas(p.windowWidth/4,p.windowWidth/4);
    p.redraw();
  }

}
var myp5 = new p5(sketch);
