
let ctx
let lenny
let t = 0

const radius = 40
const PI3 = Math.PI / 3
const lennys = ["乁( ⏒ ͜ʖ ⏒ )ㄏ", "(⌐▀͡ ̯ʖ▀)", "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿", "( ͡~ ͜ʖ ͡°)", "( ಠ ͜ʖಠ)", "( ° ͜ʖ °) ", "( ͡◉ ͜ʖ ͡◉)", "( ͡°Ĺ̯ ͡° )", "(° ͜ʖ°)"]

function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }

  return {r: r * 255, g: g * 255, b: b * 255};
}

function trig(x, y, r, ang){
	ctx.beginPath()
	ctx.moveTo(x + Math.sin(ang + PI3) * -r, y + Math.cos(ang + PI3) * -r)
	ctx.lineTo(x + Math.sin(ang) * r, y + Math.cos(ang) * r)
	ctx.lineTo(x + Math.sin(ang + PI3 * 2) * r, y + Math.cos(ang + PI3 * 2) * r)
	ctx.closePath()
	ctx.stroke()
}

function render(){
	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;

	ctx.lineWidth = 1

  	let gridSize = {x: Math.floor(ctx.canvas.width / radius * 1.15) + 1, y: Math.floor(window.innerHeight / radius) + 1}

	for(let i = 0; i < gridSize.x * gridSize.y; i++){

		let x = i % gridSize.x
		let y = Math.floor(i / gridSize.x)

		let ang = (x % 2 == 0 ? Math.PI : 0)
		let offsetX = (y % 2 == 0 ? radius * 0.88 : 0)
		let offsetY = (x % 2 == 0 ? radius / 2 : 0)
		let color = hsvToRgb((t + (x + y) * 2) % 360 / 360, 0.9, 0.3)

		ctx.strokeStyle = `rgb(${color.r}, ${color.g}, ${color.b})`

		trig(x * radius * 0.88 + offsetX, y * radius * 1.5 + offsetY, radius, ang)
	}

	t += 1
	window.requestAnimationFrame(render)
}

let a213479214789478921 = 0

function changeEbaloLenny(){
	lenny.innerHTML = lennys[a213479214789478921 % lennys.length]
	document.getElementsByTagName("title")[0].innerHTML = `root: ${lennys[a213479214789478921 % lennys.length]}`
	a213479214789478921++
}

function load(){
	ctx = document.getElementById("canvas").getContext("2d")
	lenny = document.getElementById("lenny")
	setInterval(changeEbaloLenny, 500)
	window.requestAnimationFrame(render)
}
