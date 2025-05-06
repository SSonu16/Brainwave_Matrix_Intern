const products = [
    {
      name: "Dark Chocolate",
      price: 150,
      img: "https://images.unsplash.com/photo-1606313565926-35a2189d1eeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Milk Chocolate",
      price: 120,
      img: "https://images.unsplash.com/photo-1600891965050-dfdb8c68c989?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hazelnut Choco",
      price: 180,
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "White Chocolate",
      price: 160,
      img: "https://images.unsplash.com/photo-1614359111894-b2b4c86d4b70?auto=format&fit=crop&w=400&q=80"
    }
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
  