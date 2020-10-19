import axios from "axios";
export default async (requestParams, cb) => {
  try {
    const { data } = await axios(requestParams);
    if (typeof cb === "function") {
        cb(data);
    }
    else {
      return data;
    }
  }
  catch (error) {
      console.log(error);
  }
};


