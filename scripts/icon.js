
document.getElementById("openIcon").addEventListener("click", e => {
	document.getElementById("menulist").style.left = "0";
	document.getElementById("menulist").style.transitionDuration = "350ms"
})

document.getElementById("closeIcon").addEventListener("click", e => {
	document.getElementById("menulist").style.left = "130%";
	document.getElementById("menulist").style.transitionDuration = "350ms"
})
