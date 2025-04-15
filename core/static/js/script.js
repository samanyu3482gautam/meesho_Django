let inputSearchEl = document.querySelector(".inputSearch");
let recentInput = [];
let formInputEl = document.getElementById("inputForm");
const listofRecentEl = document.querySelector(".listofRecent");

// Handling input changes to show recent searches modal
inputSearchEl.addEventListener("keydown", () => {
    const closeBtn = document.getElementById("closeSearch");
    const recentModal = document.querySelector(".searchRecentModal");

    if (inputSearchEl.value.trim()) {
        closeBtn.style.display = "block";
        recentModal.style.display = "block"; // Show modal
    } else {
        closeBtn.style.display = "none";
        recentModal.style.display = "none"; // Hide modal
    }
});

// Hide modal when the input loses focus
inputSearchEl.addEventListener("blur", () => {
    document.querySelector(".searchRecentModal").style.display = "none";
});

// Show modal again if the input gets focus
inputSearchEl.addEventListener("focus", () => {
    if (inputSearchEl.value.trim()) {
        document.querySelector(".searchRecentModal").style.display = "block";
    }
});

// Handling the form submission and adding recent searches
formInputEl.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    let listofRecentHTMLEl = "";

    // Add the search query to recent searches
    recentInput.unshift(inputSearchEl.value);
    console.log(recentInput);

    // Render the recent searches in the modal
    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listofRecentHTMLEl += `
            <div class="recentItem">
                <div class="recentIcon">
                     <img src="./img/recent.png"/>
                </div>
                <p>${recentInput[i]}</p>
            </div>
        `;
        }
        listofRecentEl.innerHTML = listofRecentHTMLEl;
    }

    // Trigger the AJAX request to get search results
    fetch(`/search/?query=${encodeURIComponent(inputSearchEl.value.trim())}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        // Render the search results dynamically
        renderSearchResults(data);
    })
    .catch(error => console.error('Error fetching search results:', error));
});

// Function to render the search results dynamically
function renderSearchResults(data) {
    let resultsHTML = "";
    if (data && data.length > 0) {
        data.forEach(item => {
            resultsHTML += `
            <div class="productCard">
                <div class="product_image">
                    <img src="./meesho/productImage/${item.img}" alt="${item.name}" />
                </div>
                <h3 class="product_name">${item.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${item.price}</span>
                </p>
            </div>
            `;
        });
    } else {
        resultsHTML = "<p>No results found</p>";
    }
    document.getElementById("product_category_displayId").innerHTML = resultsHTML;
}

// You can keep the `renderSubMenu` and product filtering code as is for other sections
function renderSubMenu(id, data) {
    let temp = document.getElementById(id);
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ");
            return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `;
        }).join("");
    }
    temp.innerHTML = TempFunc();
}

// Call the renderSubMenu for different sections (womenEthic, WomenWestern, etc.)
renderSubMenu("womenEthic", WomenEthnic);
renderSubMenu("womenWestern", WomenWestern);
renderSubMenu("men", Men);
renderSubMenu("kids", Kids);
renderSubMenu("HomeAndKitchen", HomeAndKitchen);
renderSubMenu("beautyAndHealth", BeautyHealth);
renderSubMenu("JewelleryAndAccessories", JewelleryAccessories);
renderSubMenu("BagsFootWarId", BagsFootwear);
renderSubMenu("ElectronicsId", Electronics);

// You can keep the product section and filtering code as is
