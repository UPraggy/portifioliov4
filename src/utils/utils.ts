
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

export function splitTextContentSpan(el: HTMLElement, queryClass: string) {
  const textProfissionElement = el.shadowRoot.querySelector(queryClass) as HTMLElement;

  const textContent = textProfissionElement.textContent?.trim() || '';
  textProfissionElement.innerHTML = '';

  const words = textContent.split(' ');

  words.forEach(word => {
    const wordDiv = document.createElement('div');
    wordDiv.classList.add('word'); // optional: to style each word
    wordDiv.style.display = 'inline-block'; // so it behaves like a word, not block

    word.split('').forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block'; // keeps animation capability
      wordDiv.appendChild(span);
    });

    // Add a space after the word
    const space = document.createTextNode('\u00A0');

    textProfissionElement.appendChild(wordDiv);
    textProfissionElement.appendChild(space);
  });
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

interface circularPathInterface{
    canvaContext: CanvasRenderingContext2D,
    distanceFromCenter: {
        x: number,
        y: number,
    },
    x: number,
    y: number,
    radius: number,
    color: string,
    velocity: number,
    customFunction?: Function
}

export function circularPath({canvaContext, distanceFromCenter, x, y, radius, color, velocity, customFunction}: circularPathInterface){
    this.x = x,
    this.y = y,
    this.radius = radius,
    this.color = color,
    this.velocity = velocity
    this.radians = Math.random() * Math.PI * 2,
    this.distanceFromCenter = distanceFromCenter

    this.draw = () => {
        canvaContext.beginPath()
        canvaContext.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        canvaContext.fillStyle = this.color;
        canvaContext.fill()
        canvaContext.closePath()
    }

    this.update = (mousePos) =>{
        if(customFunction){
            customFunction(this)
        }else{
            // console.log((mousePos ? mousePos.x : x))
            this.radians += this.velocity 
            this.x = (mousePos ? mousePos.x : x) + Math.cos(this.radians) * this.distanceFromCenter.x
            this.y = (mousePos ? mousePos.y : y) + Math.sin(this.radians) * this.distanceFromCenter.y * 0.6
            this.draw()
        }

    }
}


export function randomIntFromRange(min: number, max: number){
    return Math.floor((Math.random() * (max - min + 1)) + min)
}