fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => {
    const productsTableBody = document.querySelector('#productsTable tbody');

    data.products.forEach((product, index) => {
      if (index < 5) {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = product.title;
        tr.appendChild(nameTd);

        const priceTd = document.createElement('td');
        priceTd.textContent = product.price;
        tr.appendChild(priceTd);

        const descTd = document.createElement('td');
        descTd.textContent = product.description;
        tr.appendChild(descTd);

        const imgTd = document.createElement('td');
        const img = document.createElement('img');
        img.src = product.images[0];
        img.alt = product.name;
        imgTd.appendChild(img);
        tr.appendChild(imgTd);

        productsTableBody.appendChild(tr);
      }
    });
  })
  .catch((error) => console.error(error));
