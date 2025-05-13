const products = [
    {
      name: "Dark Chocolate",
      price: 150,
      img: "d1.jpg"
    },
    {
      name: "Milk Chocolate",
      price: 120,
      img: "d2.jpg"
    },
    {
      name: "White Chocolate",
      price: 120,
      img: "d4.jpg"
    },
    {
      name: "Hazelnut Choco",
      price: 180,
      img: "d3.jpg"
    },
    {
      name: "Chocolate Cake",
      price: 500,
      img: "d5.jpg"
    },
    {
      name: "Honey Cake",
      price: 550,
      img: "d6.jpg"
    },
    {
      name: "Strawberry Cake",
      price: 600,
      img: "d7.jpg"
    },
    {
      name: "ButterScotch Cake",
      price: 550,
      img: "d8.jpg"
    },
    {
      name: "Unicon Cake",
      price:400,
      img: "d9.jpg"
    },
    {
      name: " Regular Cheesecake",
      price: 100,
      img: "d11.jpg"
    },
    {
      name: "Nutella-Cheesecake",
      price: 150 ,
      img: "d12.jpg"
    },
    
    {
      name: "Blueberry-Cheesecake",
      price: 160 ,
      img: "d13.jpg"
    },
    {
      name: "Chocolate-Mousse-Cheesecake",
      price: 180 ,
      img: "d14.jpg"
    },
    {
      name: "Cheesecake-Brownie",
      price: 160 ,
      img: "d15.jpg"
    },
    {
      name: "caramel-Nut Cheesecake",
      price: 170 ,
      img: "d16.jpg"
    },
  ];
  
  let cart = [];
  
  function loadProducts() {
    const container = document.getElementById("product-list");
    products.forEach((p, index) => {
      const prod = document.createElement("div");
      prod.classList.add("product");
      prod.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
      `;
      container.appendChild(prod);
    });
  }
  
  function addToCart(index) {
    cart.push(products[index]);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${products[index].name} added to cart!`);
  }
  
  function openCart() {
    const modal = document.getElementById("cart-modal");
    const items = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");
    
    items.innerHTML = '';
    let sum = 0;
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.price}`;
      items.appendChild(li);
      sum += item.price;
    });
    total.textContent = sum;
    modal.style.display = "block";
  }
  
  function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
  }
  
  window.onload = loadProducts;
  