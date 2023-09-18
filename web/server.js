import axios from "axios"

export const server = axios.create({
  baseURL: "http://shortssummarizer-898038330acc.herokuapp.com/",
})
