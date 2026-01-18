export const loginValidationMin = {
  value: 3,
  message: "Minimum 3 characters",
};

export const loginValidationMax = {
  value: 30,
  message: "Maximum 30 characters",
};

export const passwordValidationMin = {
  value: 8,
  message: "Minimum 8 characters",
};

export const passwordValidationMax = {
  value: 64,
  message: "Maximum 64 characters",
};

export const usernameValidationMin = {
  value: 3,
  message: "Minimum 3 characters",
};

export const usernameValidationMax = {
  value: 20,
  message: "Maximum 20 characters",
};

export const usernameValidationPattern = {
  value: /^[a-zA-Z0-9_]+$/,
  message: "Username can only contain letters, numbers, and underscores",
};

export const emailValidationMax = {
  value: 254,
  message: "Maximum 254 characters",
};

export const emailValidationPattern = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Invalid email address",
};

export const passwordValidationPattern = {
  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  message:
    "Password must be at least 8 characters long and contain at least one letter and one number",
};
