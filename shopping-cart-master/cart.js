// const plusBtnMobile = document.getElementById("plusBtnMobile");
// plusBtnMobile.addEventListener("click", function () {

//     // Mobile Section Plus Btn Count Part 

//     // const countAdd = document.getElementById("countMobile").value;
//     // const countAddNumber = parseFloat(countAdd);
//     // const totalCount = countAddNumber + 1;
//     // document.getElementById("countMobile").value = totalCount;
//     count("countMobile", "balanceMobile", +1, 1219);

//     // Mobile Section Plus Btn Amount Part

//     // const balanceAdd = document.getElementById("balanceMobile").innerText;
//     // const countBalanceAdd = parseFloat(balanceAdd);
//     // const totalBalanceAdd = countBalanceAdd + 1219;
//     // document.getElementById("balanceMobile").innerText = totalBalanceAdd;



// })

// const minusBtnMobile = document.getElementById("minusBtnMobile");
// minusBtnMobile.addEventListener("click", function () {

//     // Mobile Section Minus Btn Count Part 

//     // const countMinus = document.getElementById("countMobile").value;
//     // const countMinusNumber = parseFloat(countMinus);
//     // const totalMinus = countMinusNumber - 1;
//     // document.getElementById("countMobile").value = totalMinus;

//     // Mobile Section Minus Btn Amount Part

//     // const balanceMinus = document.getElementById("balanceMobile").innerText;
//     // const countBalanceMinus = parseFloat(balanceMinus);
//     // const totalBalanceMinus = countBalanceMinus - 1219;
//     // document.getElementById("balanceMobile").innerText = totalBalanceMinus;

//     count("countMobile", "balanceMobile", -1, 1219);

// })


// const plusBtnCase = document.getElementById("plusBtnCase");
// plusBtnCase.addEventListener("click", function () {
//     // const countAdd = document.getElementById("countCase").value;
//     // const countAddNumber = parseFloat(countAdd);
//     // const totalcount = countAddNumber + 1;
//     // document.getElementById("countCase").value = totalcount;

//     // const balanceAdd = document.getElementById("balanceCase").innerText;
//     // const countBalanceAdd = parseFloat(balanceAdd);
//     // const totalBalanceAdd = countBalanceAdd + 59;
//     // document.getElementById("balanceCase").innerText = totalBalanceAdd;

//     count("countCase", "balanceCase", +1, 59);




// })

// const minusBtnCase = document.getElementById("minusBtnCase");
// minusBtnCase.addEventListener("click", function () {
//     // const countMinus = document.getElementById("countCase").value;
//     // const countMinusNumber = parseFloat(countMinus);
//     // const totalCountMinus = countMinusNumber - 1;
//     // document.getElementById("countCase").value = totalCountMinus;

//     // const balanceMinus = document.getElementById("balanceCase").innerText;
//     // const countBalanceMinus = parseFloat(balanceMinus);
//     // const totalBalanceMinus = countBalanceMinus - 59;
//     // document.getElementById("balanceCase").innerText = totalBalanceMinus;


//     count("countCase", "balanceCase", -1, 59);


// })



// // Function for All
// function count(productNumber, priceAfterSum, productMultiplier, productPrice) {
//     const numberOfProduct = document.getElementById(productNumber).value;

//     const productCurrentNumber = parseFloat(numberOfProduct);

//     const quantity = productCurrentNumber + productMultiplier;

//     document.getElementById(productNumber).value = quantity;

//     const productCurrentPrice = productPrice * quantity;

//     document.getElementById(priceAfterSum).innerText = productCurrentPrice;

//     // Calculation Of Total and SubTotal
//     const totalPrice = document.getElementById("sub-total").innerText;
//     const total2 = parseFloat(totalPrice);
//     const iPhonePrice = document.getElementById("balanceMobile").innerText;
//     const iPhoneCurrentPrice = parseFloat(iPhonePrice);
//     const casePrice = document.getElementById("balanceCase").innerText;
//     const currentCasePrice = parseFloat(casePrice);
//     const totalAllPrice = iPhoneCurrentPrice + currentCasePrice;
//     document.getElementById("sub-total").innerText = totalAllPrice;
//     document.getElementById("total").innerText = totalAllPrice;
// }