const images = [
    'images/bg1.jpg', 
    'images/bg2.jpg', 
    'images/bg3.jpg'
];
const backgroundContainer = document.getElementById('background-container');
let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Initial background image
backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;

// Change background every 5 seconds
setInterval(changeBackground, 5000);
