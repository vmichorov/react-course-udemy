import axios from "axios";

const KEY = "AIzaSyC1FOs_xuhaxQb9Iuy_Lipw5_k3P5kJvRA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 30,
    key: KEY,
  },
});
