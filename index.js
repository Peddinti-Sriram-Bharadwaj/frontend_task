const menuItems = [
    {
        name: "Dosa",
        price: "₹50.00",
        rating: "⭐⭐⭐⭐☆",
        image: "./assets/dosa.jpg"
    },
    {
        name: "Vegan Pizza",
        price: "₹600.00",
        rating: "⭐⭐⭐⭐⭐",
        image: "./assets/vegan_pizza.jpg"
    },
    {
        name: "Vegan Burger",
        price: "₹450.00",
        rating: "⭐⭐⭐⭐",
        image: "./assets/vegan_burger.jpg"
    },
    {
        name: "Vegan Pasta",
        price: "₹500.00",
        rating: "⭐⭐⭐⭐☆",
        image: "./assets/vegan_pasta.jpg"
    },
    {
        name: "Vegan Ice Cream",
        price: "₹250.00",
        rating: "⭐⭐⭐⭐⭐",
        image: "./assets/vegan_icecream.jpg"
    }
];

document.getElementById('orderNowBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var menu = document.getElementById('menu');
    menu.style.display = 'flex';
    menu.scrollIntoView({ behavior: 'smooth' });
    renderMenu();
});

function renderMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; // Clear existing content

    const cardContainer = document.createElement('div');
    cardContainer.className = 'row justify-content-center';
    menu.appendChild(cardContainer);
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card m-4 col-md-4';
        card.innerHTML = `
            <img src="${item.image}" class="w-full h-48 object-cover" alt="${item.name}">
            <div class="card-content">
                <h5 class="text-xl font-bold mb-2">${item.name}</h5>
                <p class="text-lg mb-2">Price: ${item.price}</p>
                <p class="text-lg mb-2">Rating: ${item.rating}</p>
                <a href="#" class="font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">Add to Cart</a>
            </div>
        `;
        cardContainer.appendChild(card);
    });

    const backToHomeBtn = document.createElement('button');
    backToHomeBtn.id = 'backToHomeBtn';
    backToHomeBtn.className = 'bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700 mt-4 transition duration-300';
    backToHomeBtn.innerText = 'Back to Home';
    backToHomeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        menu.style.display = 'none';
        document.body.scrollIntoView({ behavior: 'smooth' });
    });
    menu.appendChild(backToHomeBtn);
}

document.addEventListener('click', function(event) {
    const orderNowBtn = document.getElementById('orderNowBtn');
    if (event.target.tagName === 'BUTTON' && event.target !== orderNowBtn) {
        var menu = document.getElementById('menu');
        menu.style.display = 'none';
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
});

document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('login').style.top = '50%';
    document.getElementById('login').style.left = '50%';
    document.getElementById('login').style.transform = 'translate(-50%, -50%)';
    document.getElementById('login').style.zIndex = '1000';
    document.getElementById('login').style.backgroundColor = 'white';
    document.getElementById('login').style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});
