function ATM(fullName, balance) {
  this.fullName = fullName;
  this.balance = balance;
  this.showBalance = function () {
    console.log(this.balance + " AZN");
    // balanceDiv.style.display = "block";
    balanceDiv.classList.remove("d-none");
    balanceDiv.classList.add("d-block");
    document.querySelector("#balanceP").innerHTML = `${this.balance} AZN`;
    // output.innerHTML = ` <div style="display:block;" class="d-flex align-items-center justify-content-center flex-column w-100 h-100  ">
    //     <p class="fs-1 text-success font">Your balance:</p>
    //      <p class="fs-3 text-success font">${this.balance} AZN</p>
    //      <p class="text-warning-emphasis font mt-5 pt-5 mb-0 fs-5">Thank you for choosing us ) </p>
    //     </div>`;
  };
  this.cashIn=function(){
   this.balance+= +document.querySelector("#cashInPut").value;
  }
  this.withdraw=function(){
    this.balance-= +document.querySelector("#cashInPut").value;
  };
}

let fullName=prompt("Please enter your full name");
function capitalizeWords(text) {
  if (!text) {
    return "!!!";
  }

  const words = text.split(" ");
  const capitalizedWords = [];

  for (const word of words) {
    if (word.length > 0) {
      const capitalizedWord = word[0].toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  }

  return capitalizedWords.join(" ");
}
let balance=+prompt("Please enter your balance");
const user1 = new ATM(capitalizeWords(fullName), balance);
document.querySelector("#welcome").innerHTML=`Welcome ${user1.fullName} `

balanceBtn.addEventListener("click", function () {
  loading.classList.remove("d-none");
  loading.style.display = "block";
  intro.classList.remove("d-block");
  intro.classList.add("d-none");
  cashInDiv.classList.remove("d-block");
  cashInDiv.classList.add("d-none");
 

  setTimeout(function () {
  loading.classList.remove("d-block");

    loading.classList.add("d-none")
    user1.showBalance();
  }, 2000);
});

homeBtn.addEventListener("click", function(){
  loading.classList.remove("d-none");
  loading.classList.add("d-block");
  balanceDiv.classList.remove("d-block");
    balanceDiv.classList.add("d-none");
    cashInDiv.classList.remove("d-block");
    cashInDiv.classList.add("d-none");
  setTimeout(function () {
    loading.classList.add("d-none");
  loading.classList.remove("d-block");

    intro.classList.remove("d-none");
    intro.classList.add("d-block");

  }, 3000);
})
cashInBtn.addEventListener("click", function(){
  intro.classList.remove("d-block");
  intro.classList.add("d-none");
  cashInDiv.classList.remove("d-none");
  cashInDiv.classList.add("d-block");
  balanceDiv.classList.remove("d-block");
  balanceDiv.classList.add("d-none");

  enterBtn.addEventListener("click", function(){
    user1.cashIn();
  document.querySelector("#cashInPut").value=""
  loading.classList.remove("d-none");
  loading.classList.add("d-block");
  cashInDiv.classList.remove("d-block");
  cashInDiv.classList.add("d-none");
  setTimeout(function () {
    loading.classList.add("d-none");
  loading.classList.remove("d-block");
  divDone.classList.remove("d-none");
  divDone.classList.add("d-block");
  setTimeout(function () {
    intro.classList.remove("d-none");
    intro.classList.add("d-block");
    divDone.classList.remove("d-block");
    divDone.classList.add("d-none");

      },1000)

  }, 3000);

  })
  
})
withdrawBtn.addEventListener("click", function(){
  intro.classList.remove("d-block");
  intro.classList.add("d-none");
  cashInDiv.classList.remove("d-none");
  cashInDiv.classList.add("d-block");
  balanceDiv.classList.remove("d-block");
  balanceDiv.classList.add("d-none");

  withdrowEnter.addEventListener("click", function(){
    user1.withdraw();
  document.querySelector("#cashInPut").value=""
  loading.classList.remove("d-none");
  loading.classList.add("d-block");
  cashInDiv.classList.remove("d-block");
  cashInDiv.classList.add("d-none");
  setTimeout(function () {
    loading.classList.add("d-none");
  loading.classList.remove("d-block");
  divDone.classList.remove("d-none");
  divDone.classList.add("d-block");
  setTimeout(function () {
    intro.classList.remove("d-none");
    intro.classList.add("d-block");
    divDone.classList.remove("d-block");
    divDone.classList.add("d-none");

      },1000)

  }, 3000);

  })

 })
