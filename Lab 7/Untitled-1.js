
// Sprawdzenia czy pole ma wartość

function checkFieldValue() {
    const x = document.getElementById("user_name").value;
    let text = "";
    if (x === "") {
      text = "Pole nie posiada wartości";
      document.getElementById("demo").innerHTML = text;
    } else {
      document.getElementById("demo").innerHTML = text;
    }
  }
  
 // funkcja sprawdzania długości znaków

  function checkStringLength(input) {
    const length = input.value.length;
    return length;
  }
  
 // Funkcja weryfikacji adresu e-mail

  function validateEmail(email) {
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCheck.test(email);
  }
  function checkEmailValidity() {
    const emailInput = document.getElementById("email_input");
    if (!validateEmail(emailInput.value)) {
      alert("Podajcie poprawny email");
    }
  }
  
// Możliwość sprawdzenia trudności hasła

function checkPasswordStrength(password) {
    var strength = 0;
    var passwordLength = password.length;
    var containsUppercase = /[A-Z]/.test(password);
    var containsLowercase = /[a-z]/.test(password);
    var containsNumbers = /\d/.test(password);
    var containsSymbols = /[$@!%*?&]/.test(password);
  
    if (passwordLength >= 8) {
      strength += 1;
    }
    if (containsUppercase) {
      strength += 1;
    }
    if (containsLowercase) {
      strength += 1;
    }
    if (containsNumbers) {
      strength += 1;
    }
    if (containsSymbols) {
      strength += 1;
    }
    if (strength <= 2) {
      return "Słaby";
    } else if (strength <= 4) {
      return "Średni";
    } else {
      return "Silny";
    }
}

function checkPassword() {
    var passwordInput = document.getElementById("password_input");
    var passwordStrength = document.getElementById("password_strength");
  
    var password = passwordInput.value;
    var strength = checkPasswordStrength(password);
  
    passwordStrength.innerHTML = "Twoje hasło jest: " + strength;
}