import axios from "axios";

const FetchData = async (url, options = {}) => {
  const {
    method = "GET",
    headers = {},
    data = null,
    retries = 2,
    delay = 2000,
  } = options;

  const retryFetch = async (attemptsLeft) => {
    try {
      const response = await axios({
        method,
        url,
        headers,
        data,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429 && attemptsLeft > 0) {
        console.warn(`Rate limit hit. Retrying in ${delay / 1000}s...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return retryFetch(attemptsLeft - 1);
      }
      throw error;
    }
  };

  return retryFetch(retries);
};

export default FetchData;
