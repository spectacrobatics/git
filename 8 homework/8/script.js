document.querySelector("#username").addEventListener('blur', validateUsername)
document.querySelector('#userLastname').addEventListener('blur', validateUserLastname);
document.querySelector('#phoneNumber').addEventListener('blur', validatePhoneNumber); 
document.querySelector('#town').addEventListener('blur', validateTown);
document.querySelector('#check').addEventListener('blur', validateCheck);


function validateUsername() {
  const reSpaces = /^\S*$/;
  const username = document.querySelector("#username")
  if(username.value.length > 3 & username.value.length < 10 & reSpaces.test(username.value)){
    username.classList.remove('is-invalid');
    username.classList.add("is-valid")
  } else {
    username.classList.remove('is-valid');
    username.classList.add('is-invalid')
  }
}




function validateUserLastname(e) {

  const userLastname = document.querySelector('#userLastname');
  if (userLastname.value.length > 3) {
    userLastname.classList.remove('is-invalid');
    userLastname.classList.add('is-valid');
    return true;
  } else {
    userLastname.classList.remove('is-valid');

    userLastname.classList.add('is-invalid');
    return false;
  }
}

function validatePhoneNumber(){
  const phoneNumber = document.querySelector('#phoneNumber');
  const re = /^\d{10}$/;
  if(re.test(phoneNumber.value)){
    phoneNumber.classList.remove('is-invalid');
    phoneNumber.classList.add('is-valid');
  }else{
    phoneNumber.classList.add('is-invalid');
    phoneNumber.classList.remove('is-valid');
  }
}

function validateTown(){
  const town = document.querySelector('#town');
  if(town.value !== ""){
    town.classList.remove('is-invalid');
    town.classList.add('is-valid');
  }else{
    town.classList.add('is-invalid');
    town.classList.remove('is-valid');
  }
}

function validateCheck() {
  const check = document.querySelector('#check');
  if (!check.checked) {
    check.classList.remove('is-valid');
    check.classList.add('is-invalid');
  } else {
    check.classList.remove('is-invalid');
    check.classList.add('is-valid');
  }
}
