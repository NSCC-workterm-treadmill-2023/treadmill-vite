import axios from "axios";

//get is not being used in the application
//it can be used for extra features like getting the stored user workouts
export const getData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  //this will be used to send the data to the backend and then to the treadmill
  //don't forget to pay attention to the url if there is a "?" mark at the end
  export const postData = async (url, value) => {
    try {
      const response = await axios.post(`${url}=${value}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };
  
  export default {
    getData,
    postData,
  };