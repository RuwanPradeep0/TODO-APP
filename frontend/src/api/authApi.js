import axios from 'axios';

const authApiEndpoint =  'http://localhost:5000/api/auth';

const signup = async (formData) => {
  try {
    const response = await axios.post(`${authApiEndpoint}/signup`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to sign up");
  }
};

const verifyEmail = async (verificationcode) => {
  try {
    const response = await axios.post(`${authApiEndpoint}/verify-email`, verificationcode, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,  
    });
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to verify email");
  }
};

const login = async (formdata) => {
  try {
    const response = await axios.post(`${authApiEndpoint}/login`, formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to log in");
  }
};

const logout = async () => {
  try {
    const response = await axios.post(`${authApiEndpoint}/logout`);
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to log out");
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${authApiEndpoint}/forgot-password`, email, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to send password reset email");
  }
};

const resetPassword = async (token, requestBody) => {
  try {
    const response = await axios.post(`${authApiEndpoint}/reset-password/${token}`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to reset password");
  }
};

const getUserDetails = async () => {
  try {
    const response = await axios.get(`${authApiEndpoint}/getUserDetails`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,  
    });

    const { success, user } = response.data;

    if (success) {
      return {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
    } else {
      throw new Error("Failed to retrieve user details");
    }
  } catch (error) {
    handleApiError(error, "Failed to retrieve user details");
    return null;
  }
};


const handleApiError = (error, defaultMessage) => {
  if (error.response) {
    throw new Error(error.response.data.message || defaultMessage);
  } else if (error.request) {
    throw new Error("No response received from the server");
  } else {
    throw new Error("Request failed to be sent");
  }
};

export {
  signup,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
};
