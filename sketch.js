var screen1;
var earth,moon,venus,Sun;
var heading;
var capsuleX = -1,capsuleY = -1,fueltankX = -1,fueltankY = -1,vigyanX = -1,vigyanY = -1;
var flag = 0;
var capsulevisible = 0,fuelvisible = 0,vigyanVisible = 0
function preload(){
  screen1 = loadImage("images/space.jpg");
  earthImage = loadImage("images/earth.png");
  moonImage = loadImage("images/moon.png")
  venusImage = loadImage("images/venus.png");
  sunImage = loadImage("images/sun.png")
  header = loadImage("images/heading.jpg");
  workspaceImage = loadImage("images/workspace.png");
  vigyanEngine = loadImage("images/vigyan.png");
  capsuleImg = loadImage("images/blue capsule.png");
  fuelTankImg = loadImage("images/fuel tank.png");
  spacerought = loadImage("images/sky.png");
  capsuleInfo = loadImage("images/capsuleInfo.png");
  fueltankInfo = loadImage("images/fueltankInfo.png");
  engineInfo = loadImage("images/engineInfo.png");
  rightButtonImg = loadImage("images/right_button.png");
  leftButtonImg = loadImage("images/left_button.png");
  upButtonImg = loadImage("images/up_button.png");
  landIMG = loadImage("images/land.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-150);
  /**code for making Earth */
  sky = createSprite(displayWidth/2,displayHeight/1.5,);
sky.addImage(spacerought);
sky.scale = 5.5
sky.visible = false;

 earth = createSprite(width/4,height/2);
 earth.addImage(earthImage);
 earth.rotationSpeed = 0.1;

 /**Code for making moon  */
 moon = createSprite(width/2,height/3);
 moon.addImage(moonImage);
 moon.scale = 0.3;
moon.rotationSpeed= 3;

/**Code for venus */
venus = createSprite(width/1.6,height/4);
venus.addImage(venusImage);
venus.scale = 0.2;
venus.rotationSpeed = 4;

/**Code for making moon  */
sun = createSprite(width/1.4,height/5);
sun.addImage(sunImage);
sun.scale = 0.2;
sun.rotationSpeed= 3;

/**COde for header */
head = createSprite(width/2,height/10);
head.addImage(header);
head.scale = 1.5;

this.button = createButton('Play');
this.button.position(width/2,height/2);

this.button1 = createButton('about us');
this.button1.position(width/2,height/1.8)

this.button2 = createButton('version Info');
this.button2.position(width/2,height/1.6)

this.button3 = createButton('Example ');
this.button3.position(width/2,height/1.5);



workspace = createSprite(width/2,height/2,450,height)
workspace.addImage(workspaceImage);
workspace.scale = 1.6;
workspace.visible = false;

land = createSprite(width/2,height/1.04)
land.addImage(landIMG);
land.scale = 0.5;
land.visible = false;

engineinfo = createSprite(width/1.3,height/1.2);
engineinfo.addImage(engineInfo);
engineinfo.scale = 0.5;
engineinfo.visible = false;

capsuleinfo = createSprite(width/1.3,height/1.2);
capsuleinfo.addImage(capsuleInfo);
capsuleinfo.scale = 0.5;
capsuleinfo.visible = false;

fueltankinfo = createSprite(width/1.3,height/1.2);
fueltankinfo.addImage(fueltankInfo);
fueltankinfo.scale = 0.5;
fueltankinfo.visible = false;

/**
 * we are creating a base named as launchbase for making the engine set at launcher's botton
 */
launchbase = createSprite(width/2,height/1,width,50);
launchbase.visible = false;


vigyan = createSprite(width/3,height/2);
vigyan.addImage(vigyanEngine);
vigyan.scale = 0.1;
vigyan.visible = false;

capsule = createSprite(width/3,height/2.9);
capsule.addImage(capsuleImg);
capsule.scale = 0.15;
capsule.visible = false;

fuelTank = createSprite(width/3,height/7,100,height);
fuelTank.addImage(fuelTankImg);
fuelTank.scale = 5.5;
fuelTank.visible = false;

rightButton = createSprite(width/4,height/1.3);
rightButton.addImage(rightButtonImg);
rightButton.scale = 0.5;
rightButton.visible = false;

leftButton = createSprite(width/6,height/1.3);
leftButton.addImage(leftButtonImg);
leftButton.scale = 0.5;
leftButton.visible = false;




this.back = createButton('Back<=');
this.back.position(width/5,height/20);
this.back.hide();

this.launch = createButton('Launch=>');
this.launch.position(width/1.5,height/20);
this.launch.hide();

this.deleteRocket = createButton('Delete');
this.deleteRocket.position(width/5,height/20);
this.deleteRocket.hide()

/**
 * html code starting@@@@@@@@this
 * <html form .hide function started
 */
this.title = createElement('h2');
this.title.position(width/2,height/8);
this.title.html("Fill the details");
this.title.hide();

this.input = createInput("Name");
this.input.position(width/2,height/5);  
this.input.hide();

this.email = createInput("Email ID @");
this.email.position(width/2,height/4);
this.email.hide();

this.yourMessage = createInput("your Message")
this.yourMessage.position(width/2,height/3)
this.yourMessage.hide();

this.button4 = createButton('Close');
this.button4.position(width/2.5,height/2);
this.button4.hide();

this.button5 = createButton('Submit');
this.button5.position(width/2,height/2)
this.button5.hide();

var coins = 0;

}

function draw() {
background(screen1);
this.button.mousePressed(()=>{
  capsule.x = width/3;
  capsule.y = height/2.9;
this.button.hide();
this.button1.hide();
this.button2.hide();
this.button3.hide();
head.visible = false;
earth.visible = false;
moon.visible = false;
venus.visible = false;
sun.visible = false;
workspace.visible =true;
vigyan.visible = true;  
capsule.visible = true;
fuelTank.visible = true;
this.back.show();
this.launch.show();

})
this.back.mousePressed(()=>{
  leftButton.visible = false;
  rightButton.visible = false;
  this.back.hide();
  this.button.show();
this.button1.show();
this.button2.show();
this.button3.show();
head.visible = true;
earth.visible = true;
moon.visible = true;
venus.visible = true;
sun.visible = true;
workspace.visible =false;
vigyan.visible = false;  
capsule.visible = false;
capsule.x = -10;
capsule.y = -10;
fuelTank.visible = false;
this.launch.hide();
this.title.hide();
this.input.hide();
this.button5.hide();
this.email.hide();
this.button4.hide();
})

this.launch.mousePressed(()=>{
  flag = 1;
  this.back.hide();
  this.launch.hide();
  land.visible = true;
  workspace.visible = false;
    rightButton.visible = true;
    leftButton.visible = true;

  if(vigyan.x < width/2 -50 ){
    vigyan.visible = false;
    vigyanVisible = -1
  }
  if(capsule.x < width/2 -50 ){
    capsule.visible = false;
    capsulevisible = -1;
  }
  if(fuelTank.x < width/2 -50 ){
    fuelTank.visible = false;
    fuelvisible = -1;
  }
  if(vigyanVisible == 0 && fuelvisible == 0 && capsulevisible == 0){
    if(vigyan.y <fuelTank.y && vigyan.y < capsule.y){
      vigyan.y = height-100;
      if(fuelTank.y<capsule.y){
          fuelTank.y = height-400;
          capsule.y = height-600;
      }
      if(capsule.y<fuelTank.y){
        capsule.y = height-200;
        fuelTank.y = height-600;
      }
    }
    if(fuelTank.y<vigyan.y  && fuelTank.y<capsule.y){
      fuelTank.y = height-400;
      if(vigyan.y<capsule.y){
          vigyan.y = height-500;
          capsule.y = height-600 
      }
      if(capsule.y<vigyan.y){
        capsule.y = height-500;
        vigyan.y  = height-600;
      }
    }
  }
  sky.visible = true;

  if(vigyan.isTouching(capsule)||this.launch.mousePressed){
      alert("Are you sure to launch ");
      }
this.deleteRocket.show();

})

this.deleteRocket.mousePressed(()=>{
  fuelTank.rotation = 0;
  land.visible = false;
  leftButton.visible = false;
  rightButton.visible = false;
  prompt("are you sure to delet rocket?");
  vigyan.x = width/3;
  vigyan.y = height/2;
  vigyan.visible = true;
  sky.visible = false;
  workspace.visible = true;
  background(screen1);
  capsule.x = width/3;
  capsule.y = height/2.9;
  capsule.visible = true;
  fuelTank.x = width/3;
  fuelTank.y = height/7;
  fuelTank.visible = true;
  this.deleteRocket.hide();
  this.back.show();
  this.launch.show();
  flag = 0;
})

this.button1.mousePressed(()=>{
  this.button2.hide();
  this.button.hide();
  this.button3.hide();
  this.button1.hide();
  this.back.show();
 
  head.visible = false;
earth.visible = false;
moon.visible = false;
venus.visible = false;
sun.visible = false;
this.title.show();
this.input.show();
this.button5.show();
this.email.show();
this.button4.show();
})

this.button4.mousePressed(()=>{
  alert("Are you sure to close??")
  this.title.hide();
this.input.hide();
this.button5.hide();
this.email.hide();
this.button4.hide();

})


this.button5.mousePressed(()=>{
  this.input.hide();
this.button5.hide();
this.email.hide();
this.button4.hide();
this.title.html("Your data submitteed");
})

vigyan.collide(fuelTank);
vigyan.collide(capsule);
fuelTank.collide(vigyan);
fuelTank.collide(capsule);
capsule.collide(fuelTank);
capsule.collide(vigyan);
launchbase.collide(vigyan);
launchbase.collide(fuelTank);
launchbase.collide(capsule);
vigyan.bounceOff(launchbase);

if (mousePressedOver(fuelTank)&& flag==0) {
  fuelTank.x = World.mouseX;
fuelTank.y = World.mouseY;
fueltankinfo.visible = true;
fueltankX = fuelTank.x;
fueltankY = fuelTank.y;
}
else{
  fueltankinfo.visible = false;
}

if (mousePressedOver(vigyan)&& flag==0) {
  vigyan.x = World.mouseX;
  vigyan.y = World.mouseY;
  engineinfo.visible = true;
  vigyanX = vigyan.x;
  vigyanY = vigyan.y;
}
else{
  engineinfo.visible = false;
}

if (mousePressedOver(capsule)&& flag==0) {
  capsule.x = World.mouseX;
  capsule.y = World.mouseY;
  capsuleinfo.visible = true;
  capsuleX = capsule.x;
  capsuleY = capsule.y;
}
else{
  capsuleinfo.visible = false;
}

if(vigyan.isTouching(launchbase)){
vigyan.collide(launchbase);

}

if(fuelTank.isTouching(vigyan)||vigyan.isTouching(fuelTank)||fuelTank.isTouching(capsule)||capsule.isTouching(fuelTank)){
vigyan.collide(launchbase);


}


if(this.button.mousePressed){
  textSize(20);
  textFont("aloha");
  text("coins",width/1.2,height/7);
}


  Launch();
  drawSprites();
}

function Launch() {

//if(capsuleX != -1 && capsuleY != -1 && fueltankX != -1 && fueltankY != -1 && vigyanX != -1 && vigyanY != -1){
if(capsuleX != -1 && capsuleY != -1){
capsule.visible = true;
}

if(mousePressedOver(rightButton)){
  if(fuelTank.visible = true){
    fuelTank.rotation = 5;
  }
  else{
    fuelTank.rotation = 0;
    fuelTank.visible = false;
  }
  if(capsule.visible = true ){
    capsule.rotation = 8;
  }
 else{
   capsule.rotation = 0;
    capsule.visible = false;
  }
  if(vigyan.visible = true){
    vigyan.rotation = 5;
  }
  else{
    vigyan.rotation = 0;
    vigyan.visible = false;
  }

}
}

