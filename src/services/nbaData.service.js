import axios from "axios";

export const getNbaPlayersData = () => {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/players",
    params: { team: "1", season: "2021" },
    headers: {
      "X-RapidAPI-Key": "6a8a090194msh81252e151949a3dp1271d2jsneb0f4da76e78",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };
  return axios
    .request(options)
    .then(function (response) {
      const data = response.data;
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getNbaTeamsData = () => {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/teams",
    headers: {
      "X-RapidAPI-Key": "6a8a090194msh81252e151949a3dp1271d2jsneb0f4da76e78",
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      const data = response.data;
      return data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
