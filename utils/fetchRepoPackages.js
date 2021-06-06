const fetchRepo = require("./fetchRepo");
const fetchPackage = require("./fetchPackage");

module.exports = async (name, branch) => {
  const packages = await fetchRepo(name, branch);
  return Promise.all(packages.map((p) => fetchPackage(p)));
};
