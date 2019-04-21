

var sketch1 = function(p) {
  var Engine = Matter.Engine,
   World = Matter.World,
   Bodies = Matter.Bodies,
   Common = Matter.Common;

 var engine;
 p.preload =function(){
  p.font = p.loadFont('Barlow-Bold.ttf');

}
  p.setup = function() {


    p.canvas = p.createCanvas(p.windowWidth,p.windowHeight);
    p.canvas.parent("sketch");
    p.canvas.id = "canvas";

    p.canvas.position(0,0);
    p.canvas.style('position','fixed');
    p.canvas.style('z-index', '-1');
    p.canvas.style('display', 'block');



    engine = Engine.create();
     world = engine.world;
     var ground=Bodies.rectangle(p.width/2,p.height,p.width,40,{isStatic: true});
     var wall1 = Bodies.rectangle(0,p.height/2,40,p.height,{isStatic: true});
     var wall2 = Bodies.rectangle(p.width,p.height/2,40,p.height,{isStatic: true});
     var sky = Bodies.rectangle(p.width/2,0,p.width,40,{isStatic: true});

     World.add(world,ground);
     World.add(world,wall1);
     World.add(world,wall2);
     World.add(world,sky);
    p.balls = [];
    p.array = readTextFile("type.txt");
    p.list = [];
    for (var i = 0; i<p.array.length; i++){
          p.list[i] = p.array[i].split(" ");
    }
    for (var i = 0; i<p.array.length-1; i++){
      p.balls.push(new Ball(p.list[i][0],p.list[i][1],world,p));

    }

    //p.rectMode(p.CENTER);


     p.background(255);
    // p.x = (p.windowWidth - p.width) / 2;
    // p.y = (p.windowHeight - p.height) / 2;
    //
    // p.canvas.position(p.x, p.y);


    Engine.run(engine);



      window.addEventListener('deviceorientation', p.updateGravity, true);

      window.addEventListener('orientationchange', function() {
          Demo.updateGravity();
      }, false);


  }
  p.draw = function() {
    p.textSize(35)
    p.background(255);
    p.textFont(p.font);
    p.textAlign(p.CENTER);
    p.text("NO POSTER SHOW", p.width/2,p.height/8*2);
    p.text("APRIL 8 17:30", p.width/2,p.height/8*4);
    p.text("GD COMMONS", p.width/2,p.height/8*6);



    if(p.array.length>0){
      for (var i = 0; i<p.array.length-1; i++){
        p.balls[i].show();
      }
}
}
    p.mousePressed = function() {
    for (var i = 0; i<p.array.length-1; i++){
      p.balls[i].checkIntersect();
    }

  }


p.mouseReleased = function() {
  for (var i = 0; i<p.array.length-1; i++){
    p.balls[i].dragging = false;
  }
}


p.updateGravity = function () {

        p.orientation = window.orientation,
        p.gravity = world.gravity;

        if (p.orientation === 0) {
            p.gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
            p.gravity.y = Common.clamp(event.beta, -90, 90) / 90;
        } else if (orientation === 180) {
            p.gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
            p.gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
        } else if (orientation === 90) {
            p.gravity.x = Common.clamp(event.beta, -90, 90) / 90;
            p.gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
        } else if (orientation === -90) {
            p.gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
            p.gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
        }
    };


  p.windowResized = function() {

    p.resizeCanvas(p.windowWidth,p.windowHeight);

    World.clear(world);


     ground=Bodies.rectangle(p.width/2,p.height,p.width,40,{isStatic: true});
     wall1 = Bodies.rectangle(0,p.height/2,40,p.height,{isStatic: true});
     wall2 = Bodies.rectangle(p.width,p.height/2,40,p.height,{isStatic: true});
     sky = Bodies.rectangle(p.width/2,0,p.width,80,{isStatic: true});

    World.add(world,ground);
    World.add(world,wall1);
    World.add(world,wall2);
    World.add(world,sky);
    p.balls = [];



    for (var i = 0; i<p.array.length-1; i++){
      p.balls.push(new Ball(p.list[i][0],p.list[i][1],world,p));

    }


    p.redraw();

  }



class Ball   {
  constructor(cur,color,world1,p){
  var options = {
    friction: 0.6,
    restitution: 0.3
  }
  this.p = p;

  if (this.p.windowWidth>700){
      this.r = 100;
  } else {this.r = 60}

  this.x = p.random(p.width/6,p.width/6*5);
  this.y = p.random(30,p.height/4);

  this.body = Bodies.circle(this.x, this.y, this.r/2, options);

  if (this.p.windowWidth>700){
    this.cur = (p.int(cur)-45)*2.8;

  } else {  this.cur = (p.int(cur)-45)*1.8;}

  this.color = this.p.color(String(color));
  if (String(color) ==""){
    this.color = this.p.color(220);
  }

  World.add(world1, this.body);
}

  show() {
    //this.p.ellipse(this.body.position.x, this.body.position.y, this.r, this.r);

    if (this.dragging) {
    this.body.position.x  = p.mouseX + this.offsetX;
    this.body.position.y = p.mouseY + this.offsetY;
    }
    this.p.push();
    this.p.translate(this.body.position.x,this.body.position.y);
    this.p.rotate(this.body.angle);
    this.p.noStroke();




    this.p.fill(this.color);

    this.p.ellipse(0, 0, this.r, this.r);



      if (this.p.brightness(this.color)>=40){

              this.p.fill(0);
              this.p.ellipse(-this.r/10*2,-this.r/10*1,this.r/8,this.r/8);
              this.p.ellipse(this.r/10*2,-this.r/10*1,this.r/8,this.r/8);
              this.p.stroke(0);

      } else {

        this.p.fill(255);
        this.p.ellipse(-this.r/10*2,-this.r/10*1,this.r/8,this.r/8);
        this.p.ellipse(this.r/10*2,-this.r/10*1,this.r/8,this.r/8);
        this.p.stroke(255);

      }




      if (this.p.windowWidth>700){
        this.p.strokeWeight(6);
      } else {this.p.strokeWeight(3);}


      this.p.strokeCap(p.PROJECT);
      this.p.noFill();
      this.p.curve(-this.r/4, this.r/6-this.cur,
              -this.r/4,this.r/6,
              this.r/4, this.r/6,
              this.r/4,this.r/6-this.cur);
    this.p.pop();
  }

  checkIntersect() {
     var mouseX = this.p.mouseX;
     var mouseY = this.p.mouseY;
     var x = this.body.position.x;
     var y = this.body.position.y;


     if ((p.abs(mouseX-x)<this.r/2) &&(p.abs(mouseY-y))<this.r/2){
       this.dragging = true;
       this.offsetX = x-mouseX;
       this.offsetY = y-mouseY;

     }



  }
}

}

function readTextFile(file)
{
     var array = [];
     var rawFile = new XMLHttpRequest();
     rawFile.open("GET", file, false);
     rawFile.onreadystatechange = function ()
     {
         if(rawFile.readyState === 4)
         {
             if(rawFile.status === 200 || rawFile.status == 0)
             {
                 var allText = rawFile.responseText;
                 array = allText.split("\n");
             }
         }
     }
     rawFile.send();
     return array;
}

  var myp51 = new p5(sketch1, document.getElementById("sketch"));
