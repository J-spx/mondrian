let pageHeight = 100;
let pageWidth = 100;
let shapeBorderX = pageHeight - .90;
let shapeBorderY = pageWidth - .90;


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function fix_dpi() {
    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
    }
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}

function draw() {
    let canvas = document.getElementById("canvas");
    if(canvas.getContext) {
        fix_dpi();
        let ctx = canvas.getContext("2d"); 
        ctx.fillRect(0, 0, pageHeight, pageWidth);
        ctx.fillStyle = "red";
        ctx.fillRect(50, 20, pageHeight, pageWidth);

        ctx.beginPath();
        ctx.moveTo(pageHeight, pageWidth);
        ctx.lineTo(100, 0);
        ctx.stroke()
    }
}