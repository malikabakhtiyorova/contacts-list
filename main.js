// var jsForm = document.querySelector(".jsForm");
// var attempt = 6;
// jsForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   var numberInput = jsForm.querySelector(".number")

//   var password = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

//   attempt--;
//   if (attempt >= 1) {
//     var number = parseFloat(numberInput.value.trim());
//     if (number === password) {
//       console.log("Siz topdizngiz");
//       return;
//     } else {
//       console.log(`To'gri javob ${password} edi`);
//       console.log(`sizda ${attempt} ta urunish qoldi`);

//     }

//   }
//   else if (attempt === 0) {
//     console.log("Urinishlar qolmadi");
//     numberInput.value = "";
//     numberInput.classList.add("is-invalid", "disabled");
//     alert("Urunishlar qolmadi");
//     return;
//   }

// });

var jsForm = document.querySelector(".jsForm");
var card = document.querySelector(".card");
var cardHeader = card.querySelector(".card-header");
var cardBody = card.querySelector(".card-body");
var attempt = 5;
jsForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var numberInput = jsForm.querySelector(".number")

  var password = "parol123";

  attempt--;

  if (attempt >= 1) {
    var number = numberInput.value.trim();
    if (number === "") {
      alert("Valid password cointains letters and numbers")
    }
    if (number === password) {
      console.log("Siz topdizngiz");
      card.classList.remove("bg-primary", "bg-danger");
      card.classList.add("bg-success");
      cardHeader.textContent = "Access verified!";
      cardBody.classList.add("d-none");
      return;
    } else {
      console.log(`To'gri javob ${password} edi`);
      card.classList.remove("bg-primary", "bg-danger", "bg-success");
      card.classList.add("bg-danger");
      cardHeader.textContent = "Access  denied! Try again! ";
      cardHeader.textContent += (attempt + '  attempt left');
      numberInput.value = "";

    }

  }
  else if (attempt === 0) {
    console.log("Urinishlar qolmadi");
    numberInput.value = "";
    numberInput.classList.add("is-invalid", "disabled");
    card.classList.remove("bg-primary", "bg-danger", "bg-success");
    card.classList.add("bg-dark");
    cardHeader.textContent = "Access denied! ";
    cardHeader.textContent += (" You were blocked by the owner!");
    cardBody.classList.add("d-none");
    alert("Urunishlar qolmadi");
    return;
  }

});