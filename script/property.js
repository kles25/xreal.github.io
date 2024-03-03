
const condos = {
    makati: [
        {
            name: "Air Residence",
            image: "../image/air_residence/air.jpg",
            location: "Makati City",
            price: "Php 6,700,000 - 7,100,000",
            link: "air-residences.html"
        },
        {
            name: "Jade Residence",
            image: "../image/jade_residence/jade.jpg",
            location: "Makati City",
            price: "Php 6,311,000 - Php 12,264,000",
            link: "jade-residences.html"
        },
        {
            name: "Lush Residence",
            image: "../image/lush_residence/lush.png",
            location: "Makati City",
            price: "Php 5,800,000 - 10,100,000",
            link: "lush-residences.html"
        },
        {
            name: "Mint Residence",
            image: "../image/mint_residence/mint.png",
            location: "Makati City",
            price: "Php 6,300,000 - 16,900,000",
            link: "mint-residences.html"
        }
    ],
    pasay: [
        {
            name: "Coast Residence",
            image: "../image/coast_residence/coast.jpg",
            location: "Pasay City",
            price: "Php 5,100,000 - 22,700,000",
            link: "coast-residences.html"
        },
        {
            name: "Ice Tower Residence",
            image: "../image/ice_tower_residence/ice_tower.png",
            location: "Pasay City",
            price: "Php 7,500,000 - 12,500,000",
            link: "ice-tower-residences.html"
        },
        {
            name: "Sail Residence",
            image: "../image/sail_residence/sail.jpg",
            location: "Pasay City",
            price: "Php 8,600,000 - 24,600,000",
            link: "sail-residences.html"
        },
        {
            name: "Shore Residence",
            image: "../image/shore_residence/shore.png",
            location: "Pasay City",
            price: "Php 6,500,000 - 24,800,000",
            link: "shore-residences.html"
        }
    ]
};

const condosPerPage = 4;
let currentPage = 1;

// Function to filter condos based on the selected city and pagination
function filterCondos() {
    const citySelect = document.getElementById("citySelect");
    const selectedCity = citySelect.value;
    const condoList = document.getElementById("condoList");
    const pagination = document.getElementById("pagination");
    const allCondos = [];

    // Clear previous condo list and pagination
    condoList.innerHTML = "";
    pagination.innerHTML = "";



    // If "All Condos" is selected, show all condos
    if (selectedCity === "all") {
        Object.values(condos).forEach(cityCondos => {
            allCondos.push(...cityCondos);
        });
    } else {
        allCondos.push(...condos[selectedCity]);
    }

    // Calculate total pages
    const totalPages = Math.ceil(allCondos.length / condosPerPage);

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * condosPerPage;
    const endIndex = startIndex + condosPerPage;

    // Display condos for current page
    const displayedCondos = allCondos.slice(startIndex, endIndex);
    displayedCondos.forEach(condo => {
        const condoDiv = document.createElement("div");
        condoDiv.classList.add("condo");
        condoDiv.classList.add("visible");
        condoDiv.classList.add("pages-col-3");


        const link = document.createElement("a");
        link.href = condo.link;
        condoDiv.appendChild(link);

        const image = document.createElement("img");
        image.src = condo.image;
        image.alt = condo.name;
        link.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = condo.name;
        condoDiv.appendChild(name);

        const location = document.createElement("p");
        location.textContent = condo.location;
        condoDiv.appendChild(location);

        const price = document.createElement("p");
        price.textContent = condo.price;
        condoDiv.appendChild(price);

        condoList.appendChild(condoDiv);
    });

    // Add pagination controls
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.onclick = function () {
            currentPage = i;
            filterCondos();
        };
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
        pagination.appendChild(pageButton);
    }
}

// Initialize condo list for all condos by default
filterCondos();