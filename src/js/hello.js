export default function hello() {
	let hello = document.createElement('p');
	hello.textContent = `hello`;
	document.querySelector("#root").appendChild(hello);
	let data = {a:1};
	Object.assign(data,{
		b:2,
		c:3,
		d:4,
	});
	console.log("data:",data);

	var x = '❀'.repeat(10)
	console.log("x:",x)
}