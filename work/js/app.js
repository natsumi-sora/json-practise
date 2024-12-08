document.addEventListener('DOMContentLoaded', function () {
    fetch('data/product.json')
      .then((response) => response.json())
      .then((products) => {
        const productTable = document.getElementById('productTable');
          let tableHTML = '';
        products.forEach((product) => {
          tableHTML += `
            <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td>${product.description}</td>
            </tr>
          `;
        });
        productTable.innerHTML = tableHTML;
      })
      .catch((error) => console.error('エラー:', error));
  });
  