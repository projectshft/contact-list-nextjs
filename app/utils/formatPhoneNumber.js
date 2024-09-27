// Using RegEx to format the phone number properly so it looks nice and consistent

export const formatPhoneNumber = (phoneNum) => {
  if (!phoneNum) return "";
  const cleanedUp = ('' + phoneNum).replace(/\D/g, '');
  const match = cleanedUp.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNum;
};
