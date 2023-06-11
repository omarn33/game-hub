import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9edae422462c4f4496fe719892210bbc",
  },
});
