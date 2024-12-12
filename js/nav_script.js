let nav = document.querySelector(".nav")
let furnitureLink = document.querySelector(".drop_down .link")
let linkAfter = document.querySelector(".drop_down")
let burger = document.querySelector(".drop_down .burger")

function addBurgersClass(element, target, secondTarget) {
	element.addEventListener("mouseenter", () => {
		secondTarget.classList.add("active")
		target.classList.add("active")
	})

	element.addEventListener("mouseleave", () => {
		secondTarget.classList.remove("active")
		target.classList.remove("active")
	})

	target.addEventListener("mouseenter", () => {
		secondTarget.classList.add("active")
		target.classList.add("active")
	})

	target.addEventListener("mouseleave", () => {
		secondTarget.classList.remove("active")
		target.classList.remove("active")
	})
}

function addNavsClass(element) {
	if (window.pageYOffset >= 50) {
		element.classList.add("sticky")
	} else {
		element.classList.remove("sticky")
	}
}


window.addEventListener("scroll", () => {
	addNavsClass(nav)
})

addBurgersClass(furnitureLink, burger, linkAfter)