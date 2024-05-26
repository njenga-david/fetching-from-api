// Fetching product details from the API
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    // Selecting the container where the products will be displayed
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Clear the container first

    // Iterating over the products array and creating HTML elements for each product
    products.map(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      productDiv.innerHTML = `
        <img id="productImage" src="${product.image}" alt="">
        <p id="productTitle">${product.title}</p>
        <h3 id="productPrice">Price: $${product.price}</h3>
        <p id="productDescription">${product.description}</p>
        <p id="productCategory">Category: ${product.category}</p>
        <div class="Rating">
          <p id="productRate">Rating: ${product.rating.rate}</p>
          <p id="productCount">Count: ${product.rating.count}</p>
        </div>
      `;

      // Appending the newly created productDiv to the products container
      productsContainer.appendChild(productDiv);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
