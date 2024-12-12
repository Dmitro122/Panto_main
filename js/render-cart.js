let section = document.querySelector(".section")
let title = document.querySelector(".title")
let btnBuy = document.querySelector(".buy")
let renderPayment = document.querySelector(".payment")
let renderOrderCost = renderPayment.querySelector(".order_cost")
let cost = 0

console.log(localStorage.length);

if (localStorage.length == 0) {
	title.classList.add("active")
} else {
	renderPayment.classList.add("active")
	btnBuy.classList.add("active")
}


function fetchCard() {
	fetch("../data.json")
		.then(response => response.json())
		.then(data => {
			data.cards.forEach(element => {


				if (localStorage[element.id] > 0) {
					let card = document.createElement("li")
					card.className = "item card"
					card.innerHTML = ` 
						<img src="${element.img}" alt="">
						<div class="bottom">
							<span class="type">${element.type}</span>
							<span class="name">${element.name}</span>
							<span class="stars">
								<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i
									class="fa-solid fa-star"></i>
								<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
							</span>
							<span class="wrap"><span class="cost">
								<i class="fa-solid fa-dollar-sign dollar"></i>
									${element.price}</span>
								<span>
									<button class="minus" data-id="${element.id}"><i class="fa-solid fa-minus"></i></button>
									<button class="add" data-id="${element.id}"><i class="fa-solid fa-plus"></i></button>
								</span>
							</span>
							<div>x <span  class= "count">${localStorage[element.id]}</span></div>
							Total cost: <i class="fa-solid fa-dollar-sign dollar"></i> <span class="total_cost" data-price="${element.price}"> ${localStorage[element.id] * element.price}</span>
							<button class="remove" data-id="${element.id}"><i class="fa-solid fa-trash-can"></i></button>
						</div>`
					section.appendChild(card)
					cost += element.price * localStorage[element.id]
				}
				renderOrderCost.textContent = cost
			});

		})
}

document.onload = fetchCard()