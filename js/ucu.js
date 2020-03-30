// 1. Submit the form, only if it is valid
//    email is between 5 and 50 chars long
//    email format is correct
//    name has 0 or 2 whitespaces benween words
//    name length is 1 or more chars
//    phone length is 12 or more digits
//    phone format is correct. Valid formats: "+38032 000 000 00", "+380(32) 000 000 00", "+380(32)-000-000-00", "0380(32) 000 000 00", + any combitaion
//    message is 10 or more characters.
//    message must not iclude bad language: ugly, dumm, stupid, pig, ignorant
// 2. Validate each input on the fly using onchange event
// 3. Define re-usable validators: length, format,  
function validateMe(event) {
  event.preventDefault();


  return checkEmail() && checkName() && checkPhone() && checkMessage();
}

function checkEmail(){
  const emailNode = event.target.elements['email'];
  const emailErrorNode = emailNode.parentNode.querySelector('p.help-block')
  emailErrorNode.innerHTML = '';

  let emailErrors = document.createElement('ul');
  emailErrors.setAttribute("role", "alert");

  if (emailNode.value.length < 5 ) {
    let li = document.createElement('li');
    li.innerText = 'Email is too short';
    emailErrors.appendChild(li)
    // console.log('Email is too short');
  }

  if (!emailNode.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    let li = document.createElement('li');
    li.innerText = 'Email format is incorrect';
    emailErrors.appendChild(li)
  }

  if (emailErrors.childElementCount > 0) {
    emailErrorNode.appendChild(emailErrors)
    return false;
  }
  return true;
}

function checkName(){
  const nameNode = event.target.elements['name'];
  const nameErrorNode = nameNode.parentNode.querySelector('p.help-block')
  nameErrorNode.innerHTML = '';

  let nameErrors = document.createElement('ul');
  nameErrors.setAttribute("role", "alert");

  if (nameNode.value.length < 1 ) {
    let li = document.createElement('li');
    li.innerText = 'Name is too short';
    nameErrors.appendChild(li)
  }

  if (!nameNode.value.match(/^([A-Za-z]+(  ))*[A-Za-z]+$/)) {
    let li = document.createElement('li');
    li.innerText = 'Name format is incorrect';
    nameErrors.appendChild(li)
  }

  if (nameErrors.childElementCount > 0) {
    nameErrorNode.appendChild(nameErrors)
    return false;
  }
  return true;
}

function checkPhone(){
  const phoneNode = event.target.elements['phone'];
  const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block')
  phoneErrorNode.innerHTML = '';

  let phoneErrors = document.createElement('ul');
  phoneErrors.setAttribute("role", "alert");

  if (phoneNode.value.length < 12 ) {
    let li = document.createElement('li');
    li.innerText = 'Phone is too short';
    phoneErrors.appendChild(li)
  }

  if (!phoneNode.value.match(/^[\+0]\d{3}[\( ]?\d{2}[\) ]?[- ]?\d{3}[\- ]?\d{2}[- ]?\d{2}$/)) {
    let li = document.createElement('li');
    li.innerText = 'Phone format is incorrect';
    phoneErrors.appendChild(li)
  }

  if (phoneErrors.childElementCount > 0) {
    phoneErrorNode.appendChild(phoneErrors)
    return false;
  }
  return true;
}

function checkMessage(){
  const messageNode = event.target.elements['message'];
  const messageErrorNode = messageNode.parentNode.querySelector('p.help-block')
  messageErrorNode.innerHTML = '';

  let messageErrors = document.createElement('ul');
  messageErrors.setAttribute("role", "alert");

  if (messageNode.value.length < 10 ) {
    let li = document.createElement('li');
    li.innerText = 'Message is too short';
    messageErrors.appendChild(li)
  }

  if (messageNode.value.match(/ugly|dumm|stupid|pig|ignorant/)) {
    let li = document.createElement('li');
    li.innerText = 'Message is indecent';
    messageErrors.appendChild(li)
  }

  if (messageErrors.childElementCount > 0) {
    messageErrorNode.appendChild(messageErrors)
    return false;
  }
  return true;
}