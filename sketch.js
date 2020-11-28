//Creating variables
var car,wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,100,175);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor= color(80,80,80);

  
}

function draw() {
  background(255,255,255); 
  

  car.velocityX = speed;

  if(isTouching(car,wall)){
    car.velocityX=0;

    deformation = (0.5*weight*speed*speed)/22500

    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }

    if(deformation>100&& deformation<180){
      car.shapeColor = color(230,230,0);
    }

    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
  }



  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
    obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
    obj2.y-obj1.y<obj1.height/2+obj2.height/2){

      return true;
    }
    else{
      return false;
    }
} 


  
