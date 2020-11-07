function validate()
{
  var fisrtName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var phoneNumber = document.getElementById('phone-number').value;
  var mailId = document.getElementById('mail-id').value;
  var Password = document.getElementById('password').value;
  var firstRGEX= /^[A-Z][a-z]*$/;
  var lastRGEX= /^[A-Z][a-z]*$/;
  var phoneRGEX = /^(\+91)?[6|7|8|9]{1}[0-9]{9}$/;
  var mailRGEX= /^[a-zA-Z]([a-zA-Z0-9]{2,10}[\.+\-+\_]){0,5}[a-zA-Z0-9]{2,10}@([a-zA-Z0-9]{2,8}\.){1,3}[a-zA-Z0-9]{2,5}$/;
  var passRGEX= /^(?=.*[a-z]){1,8}(?=.*[A-Z]){1,8}(?=.*[0-9]){1,4}(?=.*[\+\*/!%$#@)]).*{1,5}$/;
  var firstResult = firstRGEX.test(firstName);
  var lastResult = lastRGEX.test(lastName);
  var phoneResult = phoneRGEX.test(phoneNumber);
  var passResult = mailRGEX.test(mailName);
  var passResult = passRGEX.test(passName);
  
  alert( "first: "+firstResult ", last: "+lastResult ",phone:"+phoneResult ",mail:"+mailResult",pass:"+passResult   );
  return false;
}
