// стан гри (game, pause, reload)
let gameState = 'reload'; 

const speed = 20;

// s-snake
let s = {
  // head=(x,y)
  x:0,
  y:0,
  moveX:1,
  moveY:0,
  tail:[]
};
// f-food
let f = {
  x:300,
  y:300
}


let button;
function buttonClick(){
  gameState='game';
  button.hide();
}

function setup() {
  frameRate(10);
  createCanvas(400, 400);  
  button = createButton('Start');
  button.mouseClicked(buttonClick);
  button.size(100, 100);
  button.hide();
}


function draw() {
  if(gameState==='game'){
    background(220);

    // малюємо їжу
    fill('red');
    square(f.x, f.y, 20);
    // малюємо голову
    fill('brown');
    square(s.x, s.y, 20);
    // малюємо хвіст
    if(s.tail.length > 0)
      for(let i=0; i<s.tail.length; i++)
        square(s.tail[i].x, s.tail[i].y, 20);

    // Колізія з їжею
    if(s.x==f.x && s.y==f.y){
      f.x = Math.floor(Math.random()*28/2)*20;
      f.y = Math.floor(Math.random()*28/2)*20;
      s.tail.push({ x:s.x, y:s.y })
    }

    // Рух хвоста
    if(s.tail.length > 0){
      for(let i=s.tail.length-1; i>0; i--){
        s.tail[i].x = s.tail[i-1].x;
        s.tail[i].y = s.tail[i-1].y;
      }
      s.tail[0].x = s.x;
      s.tail[0].y = s.y;
    }
    // Рух голови
    s.x += speed*s.moveX;
    s.y += speed*s.moveY;
    if(s.x<0)   s.x=400;
    if(s.x>400) s.x=0;
    if(s.y<0)   s.y=400;
    if(s.y>400) s.y=0;
    

    // Програш (колізія з хвостом)
    if(s.tail.length > 3)
      for(let i=3; i<s.tail.length; i++)
        if(s.x == s.tail[i].x && s.y == s.tail[i].y )
          gameState = 'reload';
  
  } else 
  if(gameState==='reload'){
    background(220);
    textSize(54);
    button.show();
    
    button.position(window.innerWidth/2, 250)
    text('2D Snake P5JS', 10, 200);
    s.length = 0;
    s.tail = [];
    s.x = Math.floor(Math.random()*28/2)*20;
    s.y = Math.floor(Math.random()*28/2)*20;
  }
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.moveX = 0;
    s.moveY = -1;
  } else if (keyCode === DOWN_ARROW) {
    s.moveX = 0;
    s.moveY = 1;
  } else if (keyCode === LEFT_ARROW) {
    s.moveX = -1;
    s.moveY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    s.moveX = 1;
    s.moveY = 0;
  }
}

function simulateKeyPress(key) {
  keyCode = key == 'ArrowUp' ? UP_ARROW :
  key == 'ArrowDown' ? DOWN_ARROW :
  key == 'ArrowLeft' ? LEFT_ARROW :
  key == 'ArrowRight' ? RIGHT_ARROW : 0;
  keyPressed();
}