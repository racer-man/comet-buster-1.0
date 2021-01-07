class Box extends BaseClass {
  constructor(x, y, width, height){
    
    super(x,y,width,height);
  }
  display(){
    
    fill('lime');
    super.display();
  }
};
