//Create variables here
/*var dog,dog1,happydog,database,foodS,foodStock;
var feed,addFood,feedDog,addFoods;
var fedTime,lastFed;
var foodObj;

function preload()
{
  //load images here
  saddog = loadImage("dogImg.png");
  happydog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(1000, 400);
  database = firebase.database();
  //dog1 = createSprite(250,250,10,10);

  foodObj = new Food();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  
 // foodObj = new Food();

 dog=createSprite(800,200,150,150);
 dog.addImage(saddog);
 dog.scale=0.15;
 
 feed=createButton("Feed the dog");
 feed.position(700,95);
 feed.mousePressed(feedDog);

 addFood=createButton("Add Food");
 addFood.position(800,95);
 addFood.mousePressed(addFoods);
 }


function draw() {  
  background(46,139,87);

  fedTime=database.ref("FeedTime");
  fedTime.on("value",function(data){
    lastFed=data.val();
  })

  // Image
  imageMode(CENTER);
  image(dog,250,250,250,250);

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12)
  {
    text("Last Feed : "+ lastFed%12 + " PM", 300,30);
  }else if(lastFed===0)
  {
    text("Last Feed : 12 AM", 350,30);
  }else
  {
    text("Last Feed : "+ lastFed + " AM",350,30);
  }

  foodObj.display();
  
  drawSprites();

  //Text
  fill("Blue");
  stroke("Green");
  text("Note: Press UP_ARROW Key to feed Drago Milk !",100,100);
}

/*function readStock(data)
{
    foodS = data.val();
}

function writeStock(x)
{
  if(x<= 0)
  {
    x = 0
  }else
  {
    x = x-1
  }

  database.ref('/').update({
    Food:x
  })
}
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

function feedDog()
{
  dog.addImage(happydog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods()
{
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}*/

var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;

function preload(){
sadDog=loadImage("dogImg.png");
happyDog=loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}