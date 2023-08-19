function numToWord(number) {
	switch (number) {
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "three";
		case 4:
			return "four";
		// Dodaj pozostałe przypadki w zależności od potrzeb
		default:
			return "unknown";
	}
}
const dataContainer = document.querySelector(".card-details__data-container");
fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((item, index) => {
			const itemContainer = document.createElement("div");
			itemContainer.classList.add("card-details__score");

			const categoryIcon = document.createElement("img");
			categoryIcon.classList.add("card-details__category-icon");
			categoryIcon.src = item.icon;
			categoryIcon.alt = item.category + " icon";

			const categorySpan = document.createElement("span");
			categorySpan.classList.add("card-details__category");
			categorySpan.textContent = item.category;
			const classCounter = "card-details__category-" + numToWord(index + 1);
			categorySpan.classList.add(classCounter);

			const scoreP = document.createElement("p");
			scoreP.classList.add("card-details__result");
			scoreP.textContent = item.score;

			const maxSpan = document.createElement("span");
			maxSpan.classList.add("card-details__max");
			maxSpan.textContent = "/100";
			// 80/100
			dataContainer.appendChild(itemContainer);

			itemContainer.appendChild(categoryIcon);
			itemContainer.appendChild(categorySpan);
			itemContainer.appendChild(scoreP);
			scoreP.appendChild(maxSpan);
		});
	});
{
	/* <span class="card-details__category card-details__category-one"><i class="card-details__category-icon"></i>category</span>
					<span class="card-details__result">
						score
						<span class="card-details__max">/100</span>
					</span> */
}
const allDataContainers = document.querySelectorAll(".card-details__score");

// categorySpan.classList.add('card-details__category-three');
