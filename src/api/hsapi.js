import axios from "axios";

export default axios.create({
  baseURL: "https://omgvamp-hearthstone-v1.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "68244ba06cmsh6bb6ed9472833aap140085jsnaf0a73634369",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
});
