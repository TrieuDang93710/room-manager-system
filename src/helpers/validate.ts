const checkPassword = (password: string): string[] => {
  const errors: string[] = [];
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordLength = password.length > 8;

  if (!hasLetter) {
    errors.push('Password must contain at least one letter.');
  }
  if (!hasDigit) {
    errors.push('Password must contain at least one digit.');
  }
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character.');
  }
  if (!isPasswordLength) {
    errors.push('Password must be at least 8 characters long.');
  }
  return errors;
};

const checkEmail = (email: string): string => {
  let error: string = '';

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  if (!isValidEmail) {
    error = 'Email must be correct the email address.';
  }

  return error;
};

export { checkPassword, checkEmail };
