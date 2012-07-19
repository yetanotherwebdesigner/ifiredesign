var gradCtx=document.getElementsByTagName('canvas')[2].getContext('2d');
gradCtx.canvas.width=document.documentElement.clientWidth;
gradCtx.canvas.height=document.documentElement.clientHeight*1.5;
gradCtx.globalAlpha='.9';
var gradient=gradCtx.createLinearGradient(0,0,0,gradCtx.canvas.height);
gradient.addColorStop(0,'#425B17');
gradient.addColorStop(1,'#161e07');
gradCtx.fillStyle=gradient;
gradCtx.fillRect(0,0,gradCtx.canvas.width,gradCtx.canvas.height);