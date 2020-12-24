function maskPhoneNumber(phone_number) {
  if (phone_number.indexOf('-') !== -1) {
    return phone_number.replace(/\d+(?:\d+-)+/g, '***-****-');
  } else {
    return phone_number.replace(/\d(?=\d{4})/g, '*');
  }
}

console.log(maskPhoneNumber('010-1234-5678'));
console.log(maskPhoneNumber('01012345678'));
