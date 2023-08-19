const dataContainer = document.querySelector('.card-details__data-container');
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('card-details__score');
            
            const categoryIcon = document.createElement('img');
            categoryIcon.classList.add('card-details__category-icon');
            categoryIcon.src = item.icon;
            categoryIcon.alt = item.category + ' icon';
            
            const categorySpan = document.createElement('span');
            categorySpan.classList.add('card-details__category');
            categorySpan.textContent = item.category;
            categorySpan.classList.add('card-details__category-three');
            
            const scoreP = document.createElement('p');
            scoreP.classList.add('card-details__result');
            scoreP.textContent = item.score;
            
            const maxSpan = document.createElement('span');
            maxSpan.classList.add('card-details__max');
            maxSpan.textContent = '/100';
            // 80/100
            dataContainer.appendChild(itemContainer);

            itemContainer.appendChild(categoryIcon);
            itemContainer.appendChild(categorySpan);
            itemContainer.appendChild(scoreP);
            scoreP.appendChild(maxSpan);
        })
    })
{/* <span class="card-details__category card-details__category-one"><i class="card-details__category-icon"></i>category</span>
					<span class="card-details__result">
						score
						<span class="card-details__max">/100</span>
					</span> */}