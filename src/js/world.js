export default function world() {
	let world = document.createElement('h1');
	world.textContent = `world`;
	document.querySelector("#root").appendChild(world);
}