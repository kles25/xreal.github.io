// Function to render current slide
function renderSlide(slide) {
    document.getElementById('carousel-image-one').src = slide.imageOne;
    document.getElementById('carousel-image-two').src = slide.imageTwo;
    document.getElementById('carousel-image-three').src = slide.imageThree;
    // document.getElementById('carousel-number').textContent = `0${currentSlideIndex + 1}`.slice(-2);
    document.getElementById('carousel-slide').innerHTML = `
        <div class="slide-details" >
            <h1>${slide.title}</h1>
            <p class='event-details'>${slide.description}</p>
            <div class="button-holder">
                <a href="${slide.residenceLink}"><button>View Property</button></a>
            </div>
        </div>
    `;

}

// Function to handle navigation to previous slide
function goToPreviousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    renderSlide(slides[currentSlideIndex]);
}

// Function to handle navigation to next slide
function goToNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    renderSlide(slides[currentSlideIndex]);
}

// Variables
let slides = [
    {
        title: "Air Residences",
        description: "Meaningful relationships. Career opportunities. Personal well-being. Together, they spell out the story of your success, and it all begins at SMDC Premier’s Air Residences.",
        imageOne: "../assets/image/air_residence/image-202-2.jpg",
        imageTwo: "../assets/image/air_residence/image-239.jpg",
        imageThree: "../assets/image/air_residence/image-623.jpg",
        residenceLink: "air-residences.html"

    },
    {
        title: "Jade Residences",
        description: "SMDC Jade Residences epitomizes timeless beauty with its contemporary architecture, thoughtfully crafted interiors, and luxurious amenities, offering residents an effortlessly elegant lifestyle.",
        imageOne: "../assets/image/jade_residence/Jade-2br.jpg",
        imageTwo: "../assets/image/jade_residence/Jade-2br2.jpg",
        imageThree: "../assets/image/jade_residence/Jade-2br4.jpg",
        residenceLink: "jade-residences.html"
    },
    {
        title: "Lush Residences",
        description: "Lush Residences is a condominium in Makati that seamlessly blends elements of nature throughout the property, offering a natural escape from the concrete jungle of the city just north of the Makati Central Business district.",
        imageOne: "../assets/image/lush_residence/image-202-5.jpg",
        imageTwo: "../assets/image/lush_residence/image-206.jpg",
        imageThree: "../assets/image/lush_residence/image-207-1.jpg",
        residenceLink: "lush-residences.html"
    },
    {
        title: "Mint Residences",
        description: "Mint Residences offers a nearby respite from the city, giving it a perfect balance between modern convenience and a natural environment. Being in Makati gives its residents a full range of commercial, recreational, and professional options.",
        imageOne: "../assets/image/mint_residence/Mint-Asset-U-1.png",
        imageTwo: "../assets/image/mint_residence/Mint-Asset-U-2.png",
        imageThree: "../assets/image/mint_residence/Mint-Asset-U-4.png",
        residenceLink: "mint-residences.html"
    },
    {
        title: "Sail Residences",
        description: "Welcome to Sail Residences, the gem of the Mall of Asia district. Around the area of this condominium in Pasay, a vast wealth of shops, restaurants, and entertainment sites await you, as does the view of the horizon beyond Manila Bay.",
        imageOne: "../assets/image/sail_residence/Sail-Asset-U-1.png",
        imageTwo: "../assets/image/sail_residence/Sail-Asset-U-2.png",
        imageThree: "../assets/image/sail_residence/Sail-Asset-U-3.png",
        residenceLink: "sail-residences.html"
    },
    {
        title: "Ice Tower Residences",
        description: "SMDC’s Ice Tower is a condominium in Pasay that epitomizes the modern residential-office development. Providing luxury and comfort in equally excellent measure, it is well-suited to residents living an entrepreneurial lifestyle.",
        imageOne: "../assets/image/ice_tower_residence/Ice-Asset-U-2.png",
        imageTwo: "../assets/image/ice_tower_residence/Ice-Asset-U-3.png",
        imageThree: "../assets/image/ice_tower_residence/Ice-Asset-U-4.png",
        residenceLink: "ice-tower-residences.html"
    },
    {
        title: "Shore Residences",
        description: "The entire Shore Residences complex built within the MoA area combines the luxury of a 5-star vacation resort with the coziness and comfort of the home you’ve always dreamed of.",
        imageOne: "../assets/image/shore_residence/Shore-Asset-2.png",
        imageTwo: "../assets/image/shore_residence/Shore-Asset-U-1.png",
        imageThree: "../assets/image/shore_residence/Shore-Asset-U-2.png",
        residenceLink: "shore-residences.html"
    },
    {
        title: "Coast Residences",
        description: "Standing 41 stories high and adorned with a seagull-inspired design on its façade, Coast makes a striking landmark for residents and guests alike.",
        imageOne: "../assets/image/coast_residence/SMDC-Coast_1BR_140116R00_V1.jpg",
        imageTwo: "../assets/image/coast_residence/SMDC-Coast_2BR_040316R01_HIGH-RE2-scaled.jpg",
        imageThree: "../assets/image/coast_residence/SMDC-Coast_Family-Suite-B_050216R00_HIGH-RES-scaled.jpg",
        residenceLink: "coast-residences.html"
    }
];
let currentSlideIndex = 0;

// Event listener for previous button
document.getElementById('prevButton').addEventListener('click', goToPreviousSlide);

// Event listener for next button
document.getElementById('nextButton').addEventListener('click', goToNextSlide);

// Render initial slide
renderSlide(slides[currentSlideIndex]);