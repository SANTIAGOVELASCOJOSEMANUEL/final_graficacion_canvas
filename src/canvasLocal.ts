
export class CanvasLocal {
    private ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

  //atributos
  protected graphics: CanvasRenderingContext2D;
  maxX: number;
  maxY: number ;
  pixeltamaño: number;
  rWidth: number = 60.0;
  rHeight: number = 50.0;
  centerX: number;
  centerY: number;

  public constructor(/*g: CanvasRenderingContext2D,*/context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = context;
    this.ctx = context;
    this.canvas = canvas;
    this.maxX = canvas.width - 1;
    this.maxY = canvas.height - 1;
    
    this.pixeltamaño = Math.max(this.rWidth/this.maxX, this.rHeight/this.maxY);
    this.centerX = this.maxX/10; 
    this.centerY = this.maxY/ 10*8;
    
  }
  /*public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = g;
    this.canvas = canvas;
    this.maxX = canvas.width - 1;
    this.maxY = canvas.height - 1;
    
    this.pixeltamaño = Math.max(this.rWidth/this.maxX, this.rHeight/this.maxY);
    this.centerX = this.maxX/10; 
    this.centerY = this.maxY/ 10*8;
    
  }*/

 



  iX( x: number):number { return Math.round(this.centerX + x/this.pixeltamaño); }
  iY( y: number):number { return Math.round(this.centerY - y/this.pixeltamaño); }
  
  drawLine(x1: number, y1: number, x2: number, y2:number) {
    //console.log("cadena"); 
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }/*
  MA(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0), this.iY(y+0), this.iX(x+1*s), this.iY(y+0));
    this.drawLine(this.iX(x+0), this.iY(y+0), this.iX(x+0), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  mi(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1*s));
  }*/
  A(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.5*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0), this.iY(y+0*s), this.iX(x), this.iY(y+1.5*s));
  }
  a(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x + 0.9*s), this.iY(y + 0.0), this.iX(x + 0.9 * s), this.iY(y + 1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  B(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.1), this.iY(y+1.9*s), this.iX(x+0.1), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.2*s), this.iX(x+0.9*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.7*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
  }

  b(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 0), this.iX(x + 0.7 * s), this.iY(y + 0));
    this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 0), this.iX(x + 0.9 * s), this.iY(y + 0.2 * s));
    this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.2 * s), this.iX(x + 0.9 * s), this.iY(y + 0.8 * s));
    this.drawLine(this.iX(x + 0.9 * s), this.iY(y + 0.8 * s), this.iX(x + 0.7 * s), this.iY(y + 1 * s));
    this.drawLine(this.iX(x + 0.7 * s), this.iY(y + 1 * s), this.iX(x + 0.2 * s), this.iY(y + 1 * s));
    this.drawLine(this.iX(x + 0.2 * s), this.iY(y + 1 * s), this.iX(x + 0.0), this.iY(y + 0.8 * s));
   this.drawLine(this.iX(x + 0.0), this.iY(y + 0.2 * s), this.iX(x + 0.2 * s), this.iY(y + 0));
   this.drawLine(this.iX(x + 0), this.iY(y + 0.0 * s), this.iX(x + 0.0), this.iY(y + 1.9 * s));
  }

  C(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.2*s), this.iX(x+0*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  c(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }
  D(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+0.6*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.3*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.3*s), this.iX(x+1*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.6*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0), this.iY(y+1.9*s));

  }
  d(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0*s));
  }
  E(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.9*s), this.iX(x+0.9*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0*s), this.iY(y+0*s));
  }

  e(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));//bace de abajo
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));//digonal derecha abajo
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.5*s), this.iX(x+0.9*s), this.iY(y+0.8*s));//linea recta derecha
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.5*s), this.iX(x+0*s), this.iY(y+0.5*s));//linea de enmedio 
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));//diagonal derecha arriba
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));//bace arriba
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));//diagonal izquierda arriba 
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));//linea recta izquierda
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));//diagonal izquierda abajo
    
  }

  F(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0.9*s), this.iX(x+0.9*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0*s), this.iY(y+0*s));
  }
  f(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.8*s), this.iX(x+0.6*s), this.iY(y+1*s));
    //this.drawLine(this.iX(x+0.6*s), this.iY(y+1.6), this.iX(x+0.8*s), this.iY(y+1.3*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.8*s), this.iX(x+0.5*s), this.iY(y+0.0*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+0.5*s), this.iX(x+0.7*s), this.iY(y+0.5*s));
  }

  G(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0.8*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.7*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.7*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    //this.drawLine(this.iX(x+0.8*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.7*s));
  }
  g(x:number, y:number, s:number):void{
    /*this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    */
    this.o(x, y, s);
   //Tapa down J
    this.drawLine(this.iX(x+0.7*s), this.iY(y+-0.9*s), this.iX(x+0.9*s), this.iY(y+-0.7*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+-0.9*s), this.iX(x+0.7*s), this.iY(y+-0.9*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+-0.8*s), this.iX(x+0.2*s), this.iY(y+-0.9*s));
    this.drawLine(this.iX(x + 0.9 * s), this.iY(y + -0.7 * s), this.iX(x + 0.9 * s), this.iY(y + 1 * s));
  }
  H(x:number, y:number, s:number):void{   
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
     
  }
  h(x:number, y:number, s:number):void{    
    this.drawLine(this.iX(x+0.9*s), this.iY(y-0*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0*s), this.iX(x+0.0), this.iY(y+1.9*s)); 
       
  }
  I(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+0.0*s), this.iX(x+1*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+1.9*s));
    }
  i(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.0*s), this.iX(x+0.5*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.9*s), this.iX(x+0.5*s), this.iY(y+1*s));
  }
  
  J(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1.9*s), this.iX(x+0.5*s), this.iY(y+0.4*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+0.4*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.3*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.9*s));
  }
  
  j(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y-0.3*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y-0.3*s), this.iX(x+0.3*s), this.iY(y-0.3*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1.3*s), this.iX(x+0.5*s), this.iY(y+1.1*s));
    //this.drawLine(this.iX(x-0.3*s), this.iY(y-0.9*s), this.iX(x+0.1*s), this.iY(y-0.9*s));
  }
  
  K(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  
  k(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.4*s), this.iX(x+0.6*s), this.iY(y+0.7*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.4*s), this.iX(x+0.6*s), this.iY(y+0*s));
  }
  
  L(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  
/*  l(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.8*s), this.iX(x+0.5*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.2*s), this.iX(x+0.7*s), this.iY(y+0*s));
  }*/
  
  l(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+0*s), this.iX(x+0.7*s), this.iY(y+0*s));
  }

  M(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+1), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  
  m(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0), this.iY(y), this.iX(x), this.iY(y+1.1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.9*s), this.iX(x+0.1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+1*s), this.iX(x+0.4*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+1*s), this.iX(x+0.5*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.6*s), this.iX(x+0.6*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.9*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0), this.iX(x+0.5*s), this.iY(y+0.6*s));
  }
  
  N(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+0.8*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s));
    /*this.drawLine(this.iX(x+0*s), this.iY(y), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+0*s));*/
  }
  n(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.9*s), this.iY(y), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y));
  }        

  Ñ(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+2.2*s), this.iX(x+0.2*s), this.iY(y+2.3*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+2.3*s), this.iX(x+0.3*s), this.iY(y+2.3*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+2.3*s), this.iX(x+0.5*s), this.iY(y+2.1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+2.1*s), this.iX(x+0.6*s), this.iY(y+2.1*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+2.1*s), this.iX(x+1*s), this.iY(y+2.3*s));
    
    this.drawLine(this.iX(x+0*s), this.iY(y), this.iX(x+0*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  ñ(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1.2*s), this.iX(x+0.2*s), this.iY(y+1.3*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.3*s), this.iX(x+0.3*s), this.iY(y+1.3*s));
    this.drawLine(this.iX(x+0.3*s), this.iY(y+1.3*s), this.iX(x+0.5*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1.2*s), this.iX(x+0.6*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.6*s), this.iY(y+1.2*s), this.iX(x+1*s), this.iY(y+1.3*s));
    

    this.drawLine(this.iX(x+0.9*s), this.iY(y), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y));
  } 
  O(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.2*s), this.iX(x+0*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.2*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  o(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }
  P(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.2*s), this.iX(x+0.9*s), this.iY(y+1.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.8*s), this.iX(x+0.7*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+2*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+2*s), this.iX(x+0.0), this.iY(y+1.8*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+1.2*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1.8*s), this.iX(x+0.0), this.iY(y+0*s));
  }
  p(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    this.drawLine(this.iX(x+0), this.iY(y+1.1*s), this.iX(x+0.0), this.iY(y-0.8*s));
  }
  Q(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0.2*s), this.iX(x+0*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1.9*s), this.iX(x+0.2*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.2*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));

    this.drawLine(this.iX(x+0.7*s), this.iY(y+0.4*s), this.iX(x+1.2*s), this.iY(y+0*s));
  }

  q(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.9*s), this.iY(y-0.6*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
  }
  R(x:number, y:number, s:number):void{ 
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.9*s), this.iY(y+1.9*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+1.7*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+1.7*s), this.iX(x+1*s), this.iY(y+1.1*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+1.1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+1*s), this.iY(y+0*s));
  }

  r(x:number, y:number, s:number):void{ 
    this.drawLine(this.iX(x+0.55*s), this.iY(y+1*s), this.iX(x+0.25*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.25*s), this.iY(y+1*s), this.iX(x+0.25*s), this.iY(y+0.0*s));
    this.drawLine(this.iX(x + 0.9*s), this.iY(y + 1 * s), this.iX(x + 0.55*s), this.iY(y + 1 * s));
  }

  S(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+2*s), this.iX(x+0.8*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+1.8*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.8*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.8*s), this.iX(x+0*s), this.iY(y+1.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.2*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.8*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+0.8*s), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0*s), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  s(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.3*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0.6*s), this.iX(x+0.0*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.3*s), this.iX(x+0.7*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.85*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0.6*s), this.iX(x+0.2*s), this.iY(y+0.6*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  T(x:number,y:number,s:number) {
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+2*s));
  }
  t(x:number,y:number,s:number) {
    this.drawLine(this.iX(x+0.4*s), this.iY(y+1.9*s), this.iX(x+0.4*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+1.5*s), this.iX(x+1*s), this.iY(y+1.5*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+0.2*s), this.iX(x+0.5*s), this.iY(y+0*s)); 
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s)); 
  }

  U(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+1*s), this.iY(y+1.9*s), this.iX(x+1*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  u(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }

  V(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1.9*s), this.iX(x+0.5*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  v(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x), this.iY(y+1*s), this.iX(x+0.45*s), this.iY(y));
    this.drawLine(this.iX(x + 0.45 * s), this.iY(y), this.iX(x + 0.9*s), this.iY(y + 1 * s));
  }

  W(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.25*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.25*s), this.iY(y+0), this.iX(x+0.5*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+2*s), this.iX(x+0.75*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.75*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+2*s));
  }
  w(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.25*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.25*s), this.iY(y+0), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.75*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.75*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+1*s));
    /* this.drawLine(this.iX(x+0.1*s), this.iY(y+0), this.iX(x+0.4*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+0), this.iX(x+0.45*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.45*s), this.iY(y+0.2*s), this.iX(x+0.45*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.1*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0), this.iX(x+0.8*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+1*s));    
    this.drawLine(this.iX(x+0.45*s), this.iY(y+0.2*s), this.iX(x+0.5*s), this.iY(y+0));*/
  }


  X(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.2*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+0.9*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+2*s));
  }
  x(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+1*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+1*s), this.iY(y+0*s));
  }
  Y(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.2*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.8*s), this.iY(y+2*s), this.iX(x+1*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0*s), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.4*s), this.iY(y+0*s), this.iX(x+0.6*s), this.iY(y+0*s));
    this.drawLine(this.iX(x+0.1*s), this.iY(y+2*s), this.iX(x+0.5*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+2*s));
  }
  y(x: number, y: number, s: number): void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y-0.6*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.5*s), this.iY(y+0.1*s), this.iX(x+0.1*s), this.iY(y+1*s));
  }

  Z(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+2*s), this.iX(x+0.9*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+2*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+0*s));
  }

  z(x:number, y:number, s:number):void{
    this.drawLine(this.iX(x+0*s), this.iY(y+1*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0*s), this.iY(y+0*s), this.iX(x+0.9*s), this.iY(y+0*s));
  }

  private drawString(cadena: string, positionX: number, positionY: number, tamaño: number) {

    let posicion = 0;
    let arr = Array.from(cadena);
    arr.forEach(element => {
      switch (element) {
        case "A":
          this.A(positionX+posicion, positionY, tamaño);
          posicion += tamaño;
          break;
        case "B":
          this.B(positionX+posicion, positionY, tamaño);
          posicion += tamaño;
          break;
          case "C":
            this.C(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "D":
            this.D(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "E":
            this.E(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "F":
            this.F(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "G":
            this.G(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "H":
            this.H(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "I":
            this.I(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "J":
            this.J(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "K":
            this.K(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "L":
            this.L(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "M":
            this.M(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "N":
            this.N(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "O":
            this.O(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "P":
            this.P(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "Q":
            this.Q(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "R":
            this.R(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "S":
            this.S(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "T":
            this.T(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "U":
            this.U(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "V":
            this.V(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "W":
            this.W(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "X":
            this.X(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "Y":
            this.Y(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "Z":
            this.Z(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "a":
            this.a(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "b":
            this.b(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "c":
            this.c(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "d":
            this.d(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "e":
            this.e(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "f":
            this.f(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "g":
            this.g(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "h":
            this.h(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "i":
            this.i(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "j":
            this.j(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "k":
            this.k(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "l":
            this.l(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "m":
            this.m(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "n":
            this.n(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "o":
            this.o(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "p":
            this.p(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "q":
            this.q(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "r":
            this.r(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "s":
            this.s(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "t":
            this.t(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "u":
            this.u(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "v":
            this.v(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "w":
            this.w(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "x":
            this.x(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "y":
            this.y(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
          case "z":
            this.z(positionX + posicion, positionY, tamaño);
            posicion += tamaño;
            break;
        case " ":
          posicion += tamaño;
          break;
      }
    });
  }

  paint(palabra:string, positionX: number,  positionY: number, tamaño: number) {
    this.drawString(palabra, positionX, positionY,tamaño);
    
  }
}




