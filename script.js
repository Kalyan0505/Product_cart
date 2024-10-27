let mess = document.getElementById("message");
let pdt1 = document.getElementsByClassName("pdt1");
let pdt2 = document.getElementsByClassName("pdt1");
let pdt3 = document.getElementsByClassName("pdt1");

const prices = {
  product1: 100,
  product2: 200,
  product3: 300,
};

function updateTotalCost() {
  const totalCostElement = document.getElementById("totalCost");
  let total = 0;

  for (const product in prices) {
    const quantity = parseInt(
      document.getElementById(`quantity-${product}`).innerText
    );
    total += quantity * prices[product];
  }

  totalCostElement.innerText = total;
  if (total === 0) {
    mess.style.display = "";
  }
}

function increment(product) {
  mess.style.display = "none";
  const quantityElement = document.getElementById(`quantity-${product}`);
  let quantity = parseInt(quantityElement.innerText);
  quantity++;
  quantityElement.innerText = quantity;
  updateTotalCost();
  let quant = document.getElementById(`quant-${product}`);
  let quantEle = parseInt(quant.innerText);
  quantEle++;
  quant.innerText = quantEle;
}

function decrement(product) {
  mess.style.display = "none";
  const quantityElement = document.getElementById(`quantity-${product}`);
  let quantity = parseInt(quantityElement.innerText);
  let quant = document.getElementById(`quant-${product}`);
  let quantEle = parseInt(quant.innerText);
  if (quantity > 0 && quantEle > 0) {
    quantity--;
    quantityElement.innerText = quantity;
    updateTotalCost();

    quantEle--;
    quant.innerText = quantEle;
  }
}
