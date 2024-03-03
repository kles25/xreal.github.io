let slidess = [
    {
        title: "Air Residence",
        image: "../image/air_residence/air.jpg",
        address: "Makati City",
        price: "₱ 6,700,000 - 7,100,000"
    },
    {
        title: "Jade Residence",
        image: "../image/jade_residence/jade_unit1.jpg",
        address: "Makati City",
        price: "₱ 6,311,000 - Php 12,264,000"
    },
    {
        title: "Lush Residence",
        image: "../image/lush_residence/lush.png",
        address: "Makati City",
        price: "₱ 5,800,000 - Php 10,100,000"
    },
    {
        title: "Mint Residence",
        image: "../image/mint_residence/mint.png",
        address: "Makati City",
        price: "₱ 6,300,000 - Php 16,900,000"
    },
    {
        title: "Coast Residence",
        image: "../image/coast_residence/coast.jpg",
        address: "Pasay City",
        price: "₱ 5,100,000 - 22,700,000"
    },
    {
        title: "Ice Tower Residence",
        image: "../image/ice_tower_residence/ice_tower.png",
        address: "Pasay City",
        price: "₱ 7,500,000 - 12,500,000"
    },
    {
        title: "Sail Residence",
        image: "../image/sail_residence/sail.jpg",
        address: "Pasay City",
        price: "₱ 8,600,000 - 24,600,000"
    },
    {
        title: "Shore Residence",
        image: "../image/mint_residence/mint.png",
        address: "Pasay City",
        price: "₱ 6,500,000 - 24,800,000"
    }

];
let currentIndex = 0;
let numSlides = 3;

function slide(index) {
    const slideContainer = document.getElementById('slideContainer');
    slideContainer.innerHTML = '';

    for (let i = index; i < index + numSlides; i++) {
        const slideIndex = i % slidess.length;
        const slide = slidess[slideIndex];
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        slideElement.style.backgroundImage = `url(${slide.image})`;
        slideElement.innerHTML = `
            <div class="slide-content">
                <p>${slide.title}</p>
                <p>${slide.price}</p>
            </div>
        `;
        slideContainer.appendChild(slideElement);
    }
}

function goToPreviousSlide() {
    currentIndex = (currentIndex - 1 + slidess.length) % slidess.length;
    slide(currentIndex);
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slidess.length;
    slide(currentIndex);
}

function updateNumSlides() {
    numSlides = window.innerWidth <= 690 ? 1 : 3;
    slide(currentIndex);
}

document.getElementById('prev').addEventListener('click', goToPreviousSlide);
document.getElementById('next').addEventListener('click', goToNextSlide);

window.addEventListener('resize', updateNumSlides);

slide(currentIndex);