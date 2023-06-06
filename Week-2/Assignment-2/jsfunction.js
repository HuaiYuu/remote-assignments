

function avg(data) {
  const products = data.products;
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  const averagePrice = totalPrice / products.length;
  const mainElement = document.getElementById('result');
  const resultElement = document.createElement('p');
  resultElement.textContent = "Result:"+averagePrice;
  mainElement.appendChild(resultElement);
  return averagePrice;
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: 'Product 1',
        price: 100,
      },
      {
        name: 'Product 2',
        price: 700,
      },
      {
        name: 'Product 3',
        price: 250,
      },
    ],
  })
);





