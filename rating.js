// Get the stars and submit button elements
const stars = document.querySelectorAll('.stars p');
const submitButton = document.querySelector('.submit');

stars.forEach(star => {
  star.addEventListener('click', () => {
    stars.forEach(s => s.classList.remove('selected'));
    star.classList.add('selected');
  });
});

submitButton.addEventListener('click', () => {
  const selectedRating = document.querySelector('.stars .selected');
  if (selectedRating) {
    localStorage.setItem('selectedRating', selectedRating.textContent);
  } else {
    alert('Please select a rating before submitting.');
    event.preventDefault();
  }
});
