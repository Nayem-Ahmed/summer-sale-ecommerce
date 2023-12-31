let subTotal = 0;
let discount = 0;
let total = 0;
const discountPrice = document.getElementById("discount-price");
const totalPrice = document.getElementById("total-price");
const totalElement = document.getElementById("total");
const KAccessoriesTitle = document.getElementById("K-Accessories-title").innerText;

const couponInput = document.getElementById("couponInput");
const applyCouponButton = document.getElementById("applyCouponButton");

function pickPrice(card) {
    const cardPrice = parseFloat(card.querySelector(".productPrice").innerText);
    subTotal += cardPrice;
    
    totalPrice.innerText = subTotal.toFixed(2);

    if (subTotal > 200) {
        applyCouponButton.removeAttribute("disabled");
    }  
    // ...  
    const purchaseButton = document.getElementById("purchaseButton");
    purchaseButton.disabled = !(subTotal >= 200); 
    // ...
    const li = document.createElement("li");
    const text = document.createTextNode(KAccessoriesTitle);
    li.appendChild(text);
    const div = document.getElementById("show-list");
    div.appendChild(li);
}



applyCouponButton.addEventListener("click",function(){
    if (couponInput.value === "SELL200") {
        discount = (subTotal * 20) / 100;
        discountPrice.innerText = discount.toFixed(2);
        total = (subTotal - discount).toFixed(2); 
        totalElement.innerText = total;
        couponInput.value = "";
    }

});

const modal = document.getElementById("close-modal");
modal.addEventListener("click", function() {
   
    totalPrice.innerText = (10 - 10).toFixed(2);
    discountPrice.innerText = (10 - 10).toFixed(2);
    totalElement.innerText = (10 - 10).toFixed(2);
    ol.innerHTML = "";
});



