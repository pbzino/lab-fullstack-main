const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

let x = W / 2;
let y = H / 2;
let radius = 25

canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;

    x = mouseX;
    y = mouseY;
    if (x < radius) 
        x = radius;
    if (y < radius)
        y = radius;
    if (x > canvas.width - radius)
        x = canvas.width - radius;
    if (y > canvas.width - radius)
        y = canvas.width - radius;
});

function desenho() {
    ctx.clearRect(0,0,W,H);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'lightblue';
    ctx.fill();

    requestAnimationFrame(desenho);
}

desenho();