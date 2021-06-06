const axios = require("axios");

module.exports = async (name) => {
  const registry = "https://registry.npmjs.org";
  const url = `${registry}/${encodeURIComponent(name)}`;
  const data = (await axios.get(url)).data;
  return {
    name: data.name,
    description: data.description,
  };
};
