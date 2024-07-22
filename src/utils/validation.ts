import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  userName: yup.string().min(6, 'Username must be at least 6 characters').matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'Username must contain both letters and numbers').required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().min(10, 'Phone number must be at least 10 digits').matches(/^[0-9]+$/, 'Phone number must contain only digits').required('Phone number is required'),
  status: yup.mixed().oneOf(['active', 'not_active', 'null'], 'Invalid status'),
});
