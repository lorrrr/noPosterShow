



// Requiring fs module in which
// readFile function is defined.
var array;
var i;
  function setup(){
  var canvas = createCanvas(700,900);
  canvas.parent('sketch');
  readTextFile("type.txt");
    background(255);
    if(array.length>0){

     for (i=0;i<array.length;i++){
       textSize(100-array.length*4);

       text(array[i], 30, (i+1)*height/array.length);
     }
}
}
  function draw(){




  }



//  constructor(height, width) {
//    this.height = height;
//    this.width = width;
//  }

function readTextFile(file)
{

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

     console.log(array[1]);
}
