function createPathDiv({ ref, propertyName, path }) {
    const width = ref.clientWidth;
    const height = ref.clientHeight;
    const topPath = path(width, height);
    // Atribui a variável CSS à div diretamente
    ref.style.setProperty(propertyName, `"${topPath}"`);
}
function returnSizeClientDiv({ ref }) {
    const width = ref.clientWidth;
    const height = ref.clientHeight;
    return { width, height };
}
function splitTextContentSpan(el, queryClass) {
    const textProfissionElement = el.shadowRoot.querySelector(queryClass);
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
function Cirle({ x, y, dx, dy, radius, color, canvaContext, canvaElement }) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.draw = function () {
        canvaContext.beginPath();
        canvaContext.fillStyle = this.color;
        canvaContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        canvaContext.fill();
    };
    this.update = function () {
        if (this.x + this.radius > canvaElement.clientWidth ||
            this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvaElement.clientHeight ||
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };
}
function circularPath({ canvaContext, distanceFromCenter, x, y, radius, color, velocity, customFunction }) {
    this.x = x,
        this.y = y,
        this.radius = radius,
        this.color = color,
        this.velocity = velocity;
    this.radians = Math.random() * Math.PI * 2,
        this.distanceFromCenter = distanceFromCenter;
    this.draw = () => {
        canvaContext.beginPath();
        canvaContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        canvaContext.fillStyle = this.color;
        canvaContext.fill();
        canvaContext.closePath();
    };
    this.update = (mousePos) => {
        if (customFunction) {
            customFunction(this);
        }
        else {
            // console.log((mousePos ? mousePos.x : x))
            this.radians += this.velocity;
            this.x = (mousePos ? mousePos.x : x) + Math.cos(this.radians) * this.distanceFromCenter.x;
            this.y = (mousePos ? mousePos.y : y) + Math.sin(this.radians) * this.distanceFromCenter.y * 0.6;
            this.draw();
        }
    };
}
function randomIntFromRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export { Cirle as C, randomIntFromRange as a, circularPath as c, returnSizeClientDiv as r, splitTextContentSpan as s };
//# sourceMappingURL=utils-mV9RDsE1.js.map

//# sourceMappingURL=utils-mV9RDsE1.js.map