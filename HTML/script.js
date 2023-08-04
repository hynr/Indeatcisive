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
            <div class="card custom-card-style">
                <div class="card-body text-center">
                    <h2 class="card-title">${meal.strMeal}</h2>
                    <hr>
                    <h4 class="card-subtitle mb-2 text-muted">${meal.strArea}</h4>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-thumbnail" style="max-width: 200px;">
                    <p class="card-text">${meal.strInstructions}</p>
                </div>
                <div class="embed-responsive embed-responsive-16by9 mt-3">
                    <iframe class="embed-responsive-item" src="${getEmbeddedYouTubeURL(meal.strYoutube)}"></iframe>
                </div>
            </div>
        `;
        co.innerHTML = ht;
    }

    function getEmbeddedYouTubeURL(youtubeURL) {
        // Extract the video ID from the YouTube URL
        const videoID = youtubeURL.match(/v=([^&]+)/)[1];
        // Generate the embedded URL
        return `https://www.youtube.com/embed/${videoID}`;
    }
});
