const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

// Function to handle slide navigation
var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
};

// Event listener for navigation buttons
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Event listener for Enter key
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) { // Enter key
        changeSlide(getNextSlideIndex());
    }
});

// Function to get the index of the next slide
function getNextSlideIndex() {
    const currentActiveIndex = Array.from(btns).findIndex(btn => btn.classList.contains('active'));
    return (currentActiveIndex + 1) % btns.length;
}

// Function to play click sound and change slide
function changeSlide(index) {
    clickSound.play();
    sliderNav(index);
}
