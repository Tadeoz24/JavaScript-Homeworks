class Validator {
  isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  isDomain(domain) {
    return /[a-zA-Z0-9][a-zA-z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/.test(
      domain
    );
  }

  isDate(date) {
    return /^\d\d\.\d\d.\d\d\d\d$/.test(date);
  }
  isPhone(phone) {
    return /^\+995 5\d\d\ (\d\d\d \d\d\d|\d\d \d\d \d\d)/.test(phone);
  }
}

var validator = new Validator();
console.log(validator.isEmail("jshtml@mail.ru"));
console.log(validator.isDomain("jshtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+995 571 088 004"));
