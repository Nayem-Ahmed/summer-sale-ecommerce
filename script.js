let subTotal = 0;
let discount = 0;
let total = 0;
const discountPrice = document.getElementById("discount-price");
const totalPrice = document.getElementById("total-price");
const Total = document.getElementById("total");
const couponInput = document.getElementById("couponInput");
const applyCouponButton = document.getElementById("applyCouponButton");

function pickPrice(card) {
    const cardPrice = parseFloat(card.querySelector(".productPrice").innerText);
    subTotal += cardPrice;
    
    totalPrice.innerText = subTotal.toFixed(2);
    total = (subTotal - discount).toFixed(2);
    totalPrice.innerText = total;

    if (subTotal > 200) {
        applyCouponButton.removeAttribute("disabled");
    }  
    // ...  
    const purchaseButton = document.getElementById("purchaseButton");
    purchaseButton.disabled = !(subTotal >= 200); 
    // ...
}

applyCouponButton.addEventListener("click", applyCoupon);

function applyCoupon() {
    if (couponInput.value === "SELL200") {
        discount = (subTotal * 0.2);
        discountPrice.innerText = discount.toFixed(2);
        const totalWithDiscount = subTotal - discount; 
        totalPrice.innerText = totalWithDiscount.toFixed(2);
        couponInput.value = "";
    }
}

const modal = document.getElementById("close-modal");
modal.addEventListener("click", function() {
    subTotal = 0;
    discount = 0;
    totalPrice.innerText = subTotal.toFixed(2);
    discountPrice.innerText = discount.toFixed(2);
    ol.innerHTML = "";
});



