let subTotal = 0;
let discount = 0;

function pickPrice(card) {
    const cardPrice = parseFloat(card.querySelector(".productPrice").innerText);
    subTotal += cardPrice;

    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = subTotal.toFixed(2);

    if (subTotal >= 200) {
        discount = (subTotal * 20) / 100;
        const discountPriceElement = document.getElementById("discount-price");
        discountPriceElement.innerText = discount.toFixed(2);
    } else {
        discount = 0;
        const discountPriceElement = document.getElementById("discount-price");
        discountPriceElement.innerText = "0.00";
    }

    const finalTotalElement = document.getElementById("final-total");
    const finalTotal = (subTotal - discount).toFixed(2);
    finalTotalElement.innerText = finalTotal;

    const purchaseButton = document.getElementById("purchaseButton");
    purchaseButton.disabled = !(subTotal >= 200);
    
    // Add product title to the list
    const ol = document.getElementById("show-list");
    const cardTitle = card.querySelector(".card-title").innerText;
    const listItem = document.createElement("li");
    listItem.textContent = cardTitle;
    ol.appendChild(listItem);
}
// SELL200
const applyCouponButton = document.getElementById("applyCouponButton");
applyCouponButton.addEventListener("click", applyCoupon);

function applyCoupon() {
    const couponInput = document.getElementById("couponInput");
    const discountPrice = document.getElementById("discount-price");
    const totalPrice = document.getElementById("total-price");

   if(couponInput.value === "SELL200"){
    discount = (subTotal * 20) /100;
    discountPrice.innerText = discount.toFixed(2);
    total = (subTotal - discount).toFixed(2);
    totalPrice.innerText = total;
    couponInput.value = " ";


   }

    
}
//
if(subTotal > 0){
    applyCouponButton.removeAttribute("disable")
}
// 
const purchaseButton = document.getElementById("purchaseButton")
if(subTotal >= 200){
    purchaseButton.removeAttribute("disable")
}



