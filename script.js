function toggleElement(id){
	const element = document.getElementById(id);
	const style = element.style.display;
	element.style.display = style === "none" ? "block" : "none";
}
