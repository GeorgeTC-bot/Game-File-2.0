var sprites = [[],[]], j;

var select;

var loc;
/* loc = [
    {
      'no': x,
      'pos':{x: 10, y: 10};
    }
]
*/

var frame;

function preload(){
  var blocksloc = "blocks/";
  sprites[0].push(loadImage(blocksloc+"stone.png"));//0
  sprites[0].push(loadImage(blocksloc+"stoneD.png"));//1
  sprites[0].push(loadImage(blocksloc+"stoneLD.png"));//2
  sprites[0].push(loadImage(blocksloc+"stoneRD.png"));//3
  sprites[0].push(loadImage(blocksloc+"stoneT.png"));//4
  sprites[0].push(loadImage(blocksloc+"stoneLT.png"));//5
  sprites[0].push(loadImage(blocksloc+"stoneRT.png"));//6

  
  sprites[1].push(loadImage(blocksloc+"cu.png"));
  sprites[1].push(loadImage(blocksloc+"cuD.png"));
  sprites[1].push(loadImage(blocksloc+"cuLD.png"));
  sprites[1].push(loadImage(blocksloc+"cuRD.png"));
  sprites[1].push(loadImage(blocksloc+"cuT.png"));
  sprites[1].push(loadImage(blocksloc+"cuLT.png"));
  sprites[1].push(loadImage(blocksloc+"cuRT.png"));
}

function setup(){
  createCanvas(400,400);

  frame = {x: 0, y: 0};
  loc = [];
  select = {block: 0, variant: '0'};

  rectMode(CENTER);
  imageMode(CENTER);
}
function draw(){
  background(240);
  select.variant.toString();
  frame.x = (Math.round((mouseX/8)))*8;
  frame.y = (Math.round((mouseY/8)))*8;

  blocks = {top: false,down: false,left: false,right: false,shape: null};

  for(var i = 0; i < loc.length; i++){
    image(sprites[loc[i].no.b][loc[i].no.v], loc[i].pos.x, loc[i].pos.y);
  }

  push();
  tint(240, 100);
  image(sprites[select.block][select.variant], frame.x, frame.y);
  pop();

  fill("black");
  if( select.variant === '0'){
    text ("Normal", camera.x + 100, camera.y + 100);
  }
  else if( select.variant === '1'){
    text ("Down", camera.x + 100, camera.y + 100);
  }
  else if( select.variant === '2'){
    text ("Left-Down", camera.x + 100, camera.y + 100);
  }
  else if( select.variant === '3'){
    text ("Right-Down", camera.x + 100, camera.y + 100);
  }
  else if( select.variant === '4'){
    text ("Up", camera.x + 100, camera.y + 100);
  }
  else if( select.variant === '5'){
    text ("Left-Up", camera.x + 100, camera.y + 100);
  }
  else if( select.variant === '6'){
    text ("Right-Up", camera.x + 100, camera.y + 100);
  }
}

function mouseClicked(){
  loc.push({
    'no': {'b': select.block, 'v': select.variant},
    'pos': {x: frame.x, y: frame.y},
  });
}

function keyPressed(){
  if(keyCode === 32){
    select.block += 1;
    if(select.block >= sprites.length){
      select.block = 0;
    }
  }
  if(keyCode >= 48 && keyCode <= 54){
    select.variant = key;
  }
}
