

// screensize 938 x 755


let borderBarx = 300;
let borderBary = 800;
let pageHeight = 1000;
let pageWidth = 2500;

var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;


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
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
   
    fix_dpi(); 
    var ctx = canvas.getContext('2d');
    // Black bar (x)
    ctx.fillStyle = 'rgb(0, 0, 0)'; 
    ctx.fillRect(borderBarx, 0, 60, pageHeight);
    ctx.fillRect( 0 , borderBary, pageWidth, 50 );
    ctx.fillRect(0, 300 , borderBary, 80); 
    // Red block
    ctx.fillStyle = 'rgb(255, 0, 0)'; 
    ctx.fillRect(borderBarx+300, 0, pageWidth - borderBarx, borderBary);
    // Teal block
    ctx.fillStyle = '#28a99e'; 
    ctx.fillRect( 0 ,  borderBary+50, borderBarx, borderBary + pageHeight );
    // Magenta block
    ctx.fillStyle = '#FF00FF'; 
    ctx.fillRect( 320 ,  borderBary+50, borderBarx, borderBary + pageHeight );
    // Green bar (y)
     ctx.fillStyle = '#00FF00'; 
     ctx.fillRect(600, borderBary, 60, borderBary + pageHeight );
     // Black bar (y)
     ctx.fillStyle = 'rgb(0, 0, 0)'; 
     ctx.fillRect(1800, borderBary + 300, pageWidth-borderBary, 60 );
    // Yellow block
    // https://www.rapidtables.com/web/color/RGB_Color.html
    ctx.fillStyle = 'rgb(255, 255, 0)'; 
    ctx.fillRect( 1860 ,  borderBary + 360, borderBarx, borderBary + pageHeight );

    }
  }