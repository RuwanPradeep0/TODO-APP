import axios from 'axios';

const apiEndpoint = 'http://localhost:5000/api/task';
  

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(apiEndpoint + '/createtasks', taskData ,{
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,  
      })
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = async () => {
    try {
      const response = await axios.get(apiEndpoint + '/gettasks', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,  
      });
  
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

export const updateTask = async (taskId, updatedData) => {
  try {
    const response = await axios.put(`${apiEndpoint}/${taskId}/update`, updatedData);
    console.log(response.data);
    return response.data.task;
  } catch (error) {
    handleApiError(error, "Failed to update task");
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${apiEndpoint}/${taskId}/delete`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to delete task");
  }
};


const handleApiError = (error, message) => {
  console.error(`${message}:`, error.response ? error.response.data : error.message);
  alert(message); 
};
