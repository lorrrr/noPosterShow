
function Typography(content) {
  opentype.load('AkzidenzGrotesk-Medium.otf', function(err, font) {
    this.x = width/2;
    this.y = 0;
    this.size = 30;

    this.rotation = 0;

    //this.path = font.getPath(content, this.x, this.y, this.size).toPathData(2);

    this.vertices = [];
    //this.vertices.push(Svg.pathToVertices(this.path, 20));

    this.points = typeface.textToPoints(content, this.x, this.y, this.size);

    this.vector = [];
     for (i = 0; i <this.points.length;i++){
       this.vector.push(Matter.Vector.create(this.points[i].x, this.points[i].y));
     }



    this.body = Bodies.fromVertices(this.x,this.y, this.vector);
console.log(this.body);
     World.add(world, this.body);


    this.update = function() {

      this.x = this.body.position.x;
      this.y = this.body.position.y;

    }
    this.show = function () {
      text('word', 10, 90);
      

    }

});

}
