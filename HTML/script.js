document.addEventListener('DOMContentLoaded', () => {
    var bt = document.getElementById("random");
    var co = document.getElementById("meal-cont");
    bt.addEventListener('click', getMeal);

    function getMeal() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(resp => resp.json())
            .then(resp => {
                createMeal(resp.meals[0]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function createMeal(meal) {
        let ht = `
            <div class="card" style="width: 90%">
            <div class="card custom-card-style"> <
            </div>
                <div class="card-body">
                    <div class="container-fluid" id="head">
                        <h2 class="card-title">${meal.strMeal}</h2>
                        <hr>
                        <h4 class="card-subtitle mb-2 text-muted">${meal.strArea}</h4>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 200px;">
                    </div>
                    <p class="card-text">${meal.strInstructions}</p>
                    <a href="${meal.strYoutube}" class="btn btn-dark">Youtube Tutorial</a>
                </div>
            </div>
            </div>
        `;
        co.innerHTML = ht;
    }
    
});
