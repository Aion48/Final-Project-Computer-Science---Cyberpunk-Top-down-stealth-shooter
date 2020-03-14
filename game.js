
 var time = 0;
  
  let xValues = [];

  let yValues =[];


function setup() {
  createCanvas(800, 800);
}

function draw() {
    background(0);
    translate(100,400);
    
    let x = 0;
    let y = 0;
   
  
  
    for (let i =0; i < 5 ; i++){
      let n = i * 2 + 1;
      let radius = 50 * (4 / (n * PI));
      let xc = x;
      let yc = y;
      x += radius *  cos(n * time);
      y += radius * sin(n * time);
    
      stroke(255);
      noFill();
      ellipse(xc,yc,radius * 2);

      stroke(255);
      fill(255);
      line(xc,yc,x,y);
      ellipse(x,y,4);
    }
      xValues.unshift(y);

      line(x,y,800,y);
    
    time += .01;
    
    x = 0;
    y = 0;
    translate(300,-300);
    for (let i =0; i < 5 ; i++){
      let b = i * 2 + 1;
      let radius = 50 * (4 / (b * PI));
      let xc = x;
      let yc = y;
      x += radius *  cos(b * time);
      y += radius * sin(b * time);
    
      stroke(255);
      noFill();
      ellipse(xc,yc,radius * 2);

      stroke(255);
      fill(255);
      line(xc,yc,x,y);
      ellipse(x,y,4);
    }
      yValues.unshift(x);

      line(x,y,x,800);
  
  
      translate(0,300);
      beginShape();
      noFill();
      for(let i = 0; i < xValues.length; i++)
      {
          vertex(yValues[i], xValues[i]);

      }
      if(xValues.length > 315){
         xValues.pop(); 
      }

      endShape();
    
    time += .01;

}


