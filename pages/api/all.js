const fetchRepoPackages = require("../../utils/fetchRepoPackages");

console.log(fetchRepoPackages);

export default async (req, res) => {
  const { name, branch } = req.query;
  try {
    const data = await fetchRepoPackages(name, branch);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: error || "NotFound",
    });
  }
};
