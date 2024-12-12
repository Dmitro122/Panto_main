let section = document.querySelector(".shop_content")

function fetchCard() {
	fetch("https://dmitro122.github.io/Panto_main/data.json")
		.then(response => response.json())
		.then(data => {
			data.cards.forEach(element => {
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
									<button class="add" data-id="${element.id}"><i class="fa-solid fa-plus"></i></button>
								</span>
							</span>
						</div>`

				section.appendChild(card)
			});
			addClass()
		})
}

function addClass() {
	let btns = document.querySelectorAll(".add")

	btns.forEach(element => {
		if (localStorage[element.dataset.id] != 0 && localStorage[element.dataset.id] != undefined) {
			element.classList.add("active")
		}
	});
}

fetchCard()
