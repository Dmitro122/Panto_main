let cart = {
}

let cartCount = document.querySelector(".count")
let count = 0
let orderCost = document.querySelector(".order_cost")



document.addEventListener("DOMContentLoaded", () => {

	for (let index = 0; index < localStorage.length; index++) {
		let id = parseInt(localStorage.getItem(localStorage.key(index)))
		cart[localStorage.key(index)] = id
	}

	for (let index = 0; index < localStorage.length; index++) {
		let id = parseInt(localStorage.getItem(localStorage.key(index)))
		count += id
	}


	cartCount.innerHTML = count
})



document.addEventListener("click", () => {
	let cost = parseInt(orderCost.textContent)
	let target = event.target.classList;
	let id = event.target.dataset.id;
	if (target.contains("add")) {
		addInCart(id)
		localStorage.setItem(id, cart[id])
		cartCount.innerHTML = count
		let itemCount = event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".count")
		let totalCost = event.target.parentElement.parentElement.parentElement.querySelector(".total_cost");
		totalCost.innerHTML = localStorage[id] * totalCost.dataset.price
		itemCount.innerHTML = localStorage[id]
		cost += parseInt(totalCost.dataset.price)


		orderCost.textContent = cost
	}
})



document.addEventListener("click", () => {
	let target = event.target.classList;
	let id = event.target.dataset.id;
	let cost = parseInt(orderCost.textContent)

	if (target.contains("minus")) {
		if (localStorage[id] - 1 == 0) return
		removeFromCart(id)
		localStorage.setItem(id, cart[id])
		cartCount.innerHTML = count
		let itemCount = event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".count")
		let totalCost = event.target.parentElement.parentElement.parentElement.querySelector(".total_cost");
		totalCost.innerHTML = localStorage[id] * totalCost.dataset.price
		itemCount.innerHTML = localStorage[id]


		cost -= parseInt(totalCost.dataset.price)
		orderCost.textContent = cost
	}
})

// Remove item
// Remove item
// Remove item
document.addEventListener("click", () => {
	let target = event.target.classList;
	let id = event.target.dataset.id;

	if (target.contains("remove")) {
		let card = event.target.parentElement.parentElement
		count -= localStorage[id]
		cartCount.innerHTML = count
		localStorage.removeItem(id)
		card.remove()
		location.reload()
	}
})

function addInCart(id) {
	if (cart[id] == undefined) {
		cart[id] = 0
	}
	cart[id]++
	count++
}

function removeFromCart(id) {
	if (cart[id] - 1 <= 0) return
	cart[id]--
	count--
}

