
var jsForm = document.querySelector(".jsForm");
var resetBtn = document.querySelector(".reset");
var elContacts = document.querySelector(".contacts-wrapper");
var userP = jsForm.querySelector(".number");
var userS = jsForm.querySelector(".surname");
var userN = jsForm.querySelector(".name");
var userR = jsForm.querySelector(".additional");

jsForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var userSurname = userS.value.trim();
  var userName = userN.value.trim();
  var userAdd = userR.value.trim();
  var userNumber = userP.value.trim();

  var contacts = [];

  contacts.push({
    name: `Ism: ${userName}`,
    surname: `Familya: ${userSurname}`,
    number: `Tel: ${userNumber}`,
    additional: `Qo'shimcha: ${userAdd}`,
  });


  for (var i = 0; i < contacts.length; i++) {
    console.log(contacts[i]);
    var contactUl = document.createElement("ul");
    contactUl.classList.add("list-group", "list-group-horizontal-sm");
    elContacts.appendChild(contactUl);

    var contactsItem = Object.values(contacts[i]);
    console.log(contactsItem);

    for (var k = 0; k < contactsItem.length; k++) {
      console.log(contacts[i]);

      var contactLi = document.createElement("li");
      contactUl.appendChild(contactLi);
      contactLi.textContent = contactsItem[k];
      contactLi.classList.add("list-group-item");
      var bg = ["list-group-item-primary", "list-group-item-success", "list-group-item-dark", "list-group-item-info", "list-group-item-light", "list-group-item-warning", "list-group-item-danger", "list-group-item-info"];

      for (var l = 0; l < bg.length; l++) {
        contactLi.classList.add(bg[l]);


      }
    }
    console.log(contacts);

    if (contacts[0].number.includes(userNumber.value)) {
      console.log("Bor");
      break;
    }



    userP.value = "";
    userN.value = "";
    userS.value = "";
    userR.value = "";
    userN.focus();
  }
});


resetBtn.addEventListener("click", function () {

  elContacts.innerHTML = "";
  userP.value = "";
  userN.value = "";
  userS.value = "";
  userR.value = "";

});
