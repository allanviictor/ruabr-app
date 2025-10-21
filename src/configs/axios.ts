import httpClient from "axios";

export const axios = httpClient.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
