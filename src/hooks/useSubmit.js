import { useState } from "react";
import axios from "axios";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      await axios.post(`https://cleauve4.domcloud.dev/form`, data);
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: error,
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit, setResponse };
};

export default useSubmit;
