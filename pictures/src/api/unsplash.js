import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kXSJpGwj1yFpuAfaf2Sd7norJwQVy-MbW2RvWVT9QIs",
  },
});
