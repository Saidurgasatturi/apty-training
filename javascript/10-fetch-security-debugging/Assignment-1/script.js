const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const allBtn = document.getElementById("allBtn");
async function fetchAllProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    displayProducts(data.products);
  } catch (error) {
    productContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

async function searchProducts(query) {
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    if (!res.ok) throw new Error("Search failed");
    const data = await res.json();
    displayProducts(data.products);
  } catch (error) {
    productContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

function displayProducts(products) {
  if (products.length === 0) {
    productContainer.innerHTML = `<p>No products found</p>`;
    return;
  }

  productContainer.innerHTML = products
    .map(
      (p) => `
      <div class="product-card">
        <img src="${p.thumbnail}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>$${p.price}</p>
        <button onclick="viewProduct(${p.id})">View Details</button>
      </div>
    `
    )
    .join("");
}

function viewProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) searchProducts(query);
  else alert("Please enter something to search!");
});

allBtn.addEventListener("click", fetchAllProducts);

fetchAllProducts();
