function review_rating(number) {
  let rating = "";
  for (let i = 0; i < number; i++) {
    rating += "*";
  }
  return rating;
}

const apiLink = "https://cis1110apicw.computing.edgehill.ac.uk/reviews";

fetch(apiLink)
  .then((response) => response.json())
  .then((data) => {
    // Limit the loop to 6 iterations or the length of the data, whichever is smaller
    for (let i = 0; i < Math.min(6, data.length); i++) {
      console.log(data[i].nickname);
      const review = data[i];
      // Create HTML string
      const code = `
        <article class="reviews-container__grid--review">
          <div class="reviews-container__grid--review--user">
            <img src="./assets/reviewicon1.jpg" alt="User image" />
            <div class="reviews-container__grid--review__rating">
              <p>${review_rating(data[i].rating)}<p>
              <h3>${data[i].nickname}</h3>
            </div>
          </div>
          <div class="reviews-container__grid--review__text">
            <p>${data[i].review}</p> <!-- Replace with actual review text -->
          </div>
        </article>
      `;

      // Append HTML to the container
      document.querySelector(".reviews-container__grid").innerHTML += code;
    }
  })
  .catch((error) => console.error(error));
