const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,stand1,scene;
var bird, slingShot;

function preload(){
    scene = loadImage("dede.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1400,20);
    stand1 = new Ground(500,270,350,15);
    stand2 = new Ground(1000,300,350,15)

    box1 = new Box(440,240,50,50);
    box2 = new Box(460,240,50,50);
    box3 = new Box(480,240,50,50);
    box4 = new Box(500,240,50,50);
    box5 = new Box(520,240,50,50);
    box6 = new Box(460,220,50,50);
    box7 = new Box(480,220,50,50);
    box8 = new Box(500,220,50,50);
    box9 = new Box(480,210,50,50);
    box10 = new Box(900,210,50,50);
    box11 = new Box(950,205,50,50);
    box12 = new Box(1000,205,50,50);
    box13 = new Box(1050,205,50,50);
    box14 = new Box(1100,205,50,50);
    box15 = new Box(950,210,50,50);
    box16 = new Box(1000,210,50,50);
    box17 = new Box(1050,210,50,50);
    box18 = new Box(1000,220,50,50)

    bird = new Bird(100,100,40,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background(scene);
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    bird.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}