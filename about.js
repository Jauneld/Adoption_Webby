// JavaScript file for adding interactivity (if needed)

// Example: Log message on button click
document.querySelector('.btn-learn-more').addEventListener('click', () => {
  console.log('Learn More button clicked!');
});

// JavaScript to dynamically change the modal image
const carouselImages = document.querySelectorAll('[data-bs-toggle="modal"]');
const modalImage = document.getElementById('modalImage');

carouselImages.forEach(image => {
  image.addEventListener('click', () => {
    const imageUrl = image.getAttribute('data-bs-img');
    modalImage.src = imageUrl; // Set the modal image to the clicked image
  });
});
