const button  =  document.querySelector('.button');

button.addEventListener("click", function() {
	const button = document.querySelector(".nav");
button.style.display = "flex";
})


button.addEventListener("dblclick", function() {
	const button = document.querySelector(".nav");
button.style.display = "none";
})


const light = document.querySelector("#light");


light.addEventListener("click", function() {
	const light = document.querySelector("body");
light.classList.add("dark");
let dark = document.querySelector("#light");
dark.style.color = "white";
dark.style.backgroundColor = "#1A202C";

})

light.addEventListener("dblclick", function() {
	const light = document.querySelector("body");
light.classList.remove("dark");
let dark = document.querySelector("#light");
dark.style.color = "#1A202C";
dark.style.backgroundColor = "white";})

