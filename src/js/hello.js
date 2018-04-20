export default function hello() {
	let hello = document.createElement('p');
	hello.textContent = `hello`;
	document.querySelector("#root").appendChild(hello);
}