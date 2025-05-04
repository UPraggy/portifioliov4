
interface createPathDivInterface{
    ref: HTMLElement, 
    propertyName: string, 
    path: (width: number, height: number) => string 
}

interface returnSizeClientDivInterface{
    ref: HTMLElement
}


export function createPathDiv({ref, propertyName, path}: createPathDivInterface): void{

    const width = ref.clientWidth;
    const height = ref.clientHeight;

    const topPath = path(width, height) 

    // Atribui a variável CSS à div diretamente
    ref.style.setProperty(propertyName, `"${topPath}"`);
}


export function returnSizeClientDiv({ref}: returnSizeClientDivInterface): {width: number, height: number}{
    const width = ref.clientWidth;
    const height = ref.clientHeight;
    return {width, height}
}

export function splitTextContentSpan(el: HTMLElement, queryClass: string){
    let textProfissionelement = el.shadowRoot.querySelector(queryClass) as HTMLDivElement;

    const textProfission = textProfissionelement.textContent || '';
    textProfissionelement.innerHTML = '';

    textProfission.split('').forEach((letter:string)=>{
      const span = document.createElement('span');
      span.textContent = letter == ' ' ? '\u00A0' : letter;
      textProfissionelement.appendChild(span);
  })
}



export function Cirle({x, y, dx, dy, radius, color, canvaContext, canvaElement}){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function(){
        canvaContext.beginPath();
  
        canvaContext.fillStyle  = this.color;
        canvaContext.arc(this.x,this.y,this.radius, 0, Math.PI*2,
          false);
          canvaContext.fill();
    }

    this.update = function(){
        if(this.x + this.radius > canvaElement.clientWidth || 
            this.x - this.radius < 0){
            this.dx = - this.dx
        }

        if(this.y + this.radius > canvaElement.clientHeight || 
            this.y - this.radius < 0){
            this.dy = - this.dy
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw()
    }
}

