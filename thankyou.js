// Get the elements to display the selected rating
const selectedRatingElement = document.querySelector('.rating');
const selectedRating = localStorage.getItem('selectedRating');

if (selectedRating) {
  selectedRatingElement.textContent = selectedRating;
}
