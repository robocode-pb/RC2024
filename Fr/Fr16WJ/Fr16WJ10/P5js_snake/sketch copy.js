// стан гри (game, pause, reload)
let gameState = 'game'; 

// s-snake
let s = {
  // head=(x,y)
  x:10,
  y:10,
  moveX:1,
  moveY:0
};

function setup() {
  createCanvas(400, 400);

  // довжина змійки
  // кількість очок
}

function draw() {
  if(gameState==='game'){
    background(220);
    square(s.x, s.y, 40);
    // рух
    s.x += s.moveX;
    s.y += s.moveY;
    if(s.x<0) s.x=100;
    if(s.x>400) s.x=0;
    if(s.x<0) s.y=400;
    if(s.x>400) s.y=0;
 if(s.x=foodX) 
  false.x 
 foodY
  let s = {
    // head=(x,y)
    x:190,
    y:444,
    // куша.x100
    // чи програли?
  }
}
