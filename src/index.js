const API = 'http://localhost:3000/ramens' 

// load the ramens from our API

    fetch(API)
    .then((response) => response.json())
    .then(renderRamens);
    
    //iterate through the ramens
    function renderRamens(ramens) {
        ramens.forEach(renderRamen)
    };

    // display each one in an img tag in the ramen-menu div
    function renderRamen(ramen) {
        const ramenMenuDiv = document.getElementById("ramen-menu")
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image;
        ramenMenuDiv.append(ramenImage);

        ramenImage.addEventListener('click', (e) => renderDetails(ramen))
    };

    function renderDetails(ramen) {
        console.log(ramen.image)
        const ramenDetailDiv = document.querySelector('.ramen-detail');
        const detailImage = document.querySelector(".detail-image");
        const ramenName = document.querySelector(".name");
        const restaurantName = document.querySelector(".restaurant");
        const displayRating = document.getElementById("rating-display");
        const displayComment = document.getElementById('comment-display');

        detailImage.src = ramen.image;
        detailImage.alt = ramen.name;
        ramenName.textContent = ramen.name;
        restaurantName.textContent = ramen.restaurant;
        displayRating.textContent = ramen.rating;
        displayComment.textContent = ramen.comment;
    };

    newRamenForm = document.getElementById("new-ramen")
    .addEventListener('submit', createRamen)

    function createRamen(e) {
        e.preventDefault();

        const newRamen = {
            name: e.target.name.value,
            rating: e.target.rating.value,
            restaurant: e.target.restaurant.value,
            comment: e.target['new-comment'].value,
            image: e.target.image.value,
        }
        renderRamen(newRamen);    
    }






