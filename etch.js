let clear = document.querySelector('button');
let container = document.querySelector('#container');

makeGrid(16);

clear.addEventListener('click', () => {
	let containerItems = document.querySelectorAll('#container > div');
	containerItems.forEach((div) => {
		container.removeChild(div);
	});
	let newGrid = prompt('How many squares would you like per side?');
	makeGrid(newGrid);
});

function makeGrid(size) {
	document.querySelector('h1').textContent = `This is a ${size} X ${size} grid!`;
	let hue = Math.floor((Math.random() * 360) + 1);
	let saturation = '100%';
	let lightness = 100;
	
	for (i = 1; i <= (size * size); i++) {
		let newDiv = document.createElement('div');
		newDiv.style = `background-color: hsl(${hue}, ${saturation}, ${lightness}` + `%); ` +
						`color: hsl(${hue}, ${saturation}, ${lightness}` + `%)`;
		newDiv.id = lightness;
		newDiv.addEventListener('mouseover', () => {
			newDiv.id -= 10;
			newDiv.style = `background-color: hsl(${hue}, ${saturation}, ${newDiv.id}` + `%); ` +
				`color: hsl(${hue}, ${saturation}, ${newDiv.id}` + `%)`;
		});
		container.appendChild(newDiv);
		container.style = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
	}
}