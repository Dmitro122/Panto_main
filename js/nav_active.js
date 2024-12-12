let about_link = document.querySelector(".about_link")
let footer_link = document.querySelector(".footer_link")



document.addEventListener("scroll", () => {
	// console.log(window.pageYOffset);
	if (window.pageYOffset >= 2070 && window.pageYOffset <= 4100) {
		about_link.classList.add("active")
	} else {
		about_link.classList.remove("active")
	}

	if (window.pageYOffset >= 4100) {
		footer_link.classList.add("active")
	} else {
		footer_link.classList.remove("active")
	}
})

