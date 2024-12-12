let orderBtn = document.querySelector(".buy")
let popup = document.querySelector(".popup")
let closeBtn = document.querySelector(".close")
let vignette = document.querySelector(".vignette")

orderBtn.addEventListener("click", () => {
	popup.classList.add("active")
	vignette.classList.add("active")
})

closeBtn.addEventListener("click", () => {
	vignette.classList.remove("active")
	popup.classList.remove("active")
})

document.addEventListener("click", () => {
	if (event.target.classList.contains("vignette")) {
		vignette.classList.remove("active")
		popup.classList.remove("active")
	}
})