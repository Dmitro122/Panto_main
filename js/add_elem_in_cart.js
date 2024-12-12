



let cart = {
}

let cartCount = document.querySelector(".count")
let count = 0

document.addEventListener("DOMContentLoaded", () => {
	let btns = document.querySelectorAll(".add")

	console.log(btns);

	for (let index = 0; index < localStorage.length; index++) {
		let id = parseInt(localStorage.getItem(localStorage.key(index)))
		cart[localStorage.key(index)] = id
	}

	btns.forEach(element => {
		if (localStorage[element.dataset.id] != 0 && localStorage[element.dataset.id] != undefined) {
			element.classList.add("active")
		}
	});

	for (let index = 0; index < localStorage.length; index++) {
		let id = parseInt(localStorage.getItem(localStorage.key(index)))
		count += id
	}


	cartCount.innerHTML = count
})


document.addEventListener("click", () => {

	let target = event.target.classList;
	let id = event.target.dataset.id;

	if (target.contains("add") || target.contains("add").childeNode) {
		if (target.contains("active") != true) {
			event.target.classList.add("active")
			addInCart(id)
			localStorage.setItem(id, cart[id])
			cartCount.innerHTML = count
		} else {
			event.target.classList.remove("active")
			removeFromCart(id)
			localStorage.removeItem(id)
			cartCount.innerHTML = count
		}
	}

	if (target.contains("add")) {

	}
})

function addInCart(id) {
	if (cart[id] == undefined) {
		cart[id] = 0
	}
	cart[id] = 1
	count += cart[id]
}

function removeFromCart(id) {
	if (cart[id] - 1 < 0) return
	count -= cart[id]
	cart[id] = 0
}