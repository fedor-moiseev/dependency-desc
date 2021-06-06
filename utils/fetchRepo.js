const axios = require("axios");

module.exports = async (name, branch = "main") => {
  const host = "https://raw.githubusercontent.com";
  const path = "package.json";
  const url = `${host}/${name}/${encodeURIComponent(branch)}/${path}`;
  const data = (await axios.get(url)).data;
  return Object.keys(data.dependencies);
};
