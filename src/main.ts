const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = 'Black';

ctx.fillStyle = 'Yellow';
ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
