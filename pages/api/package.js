const fetchPackage = require("../../utils/fetchPackage");

export default async (req, res) => {
  const { name } = req.query;
  try {
    const data = await fetchPackage(name);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: "NotFound",
    });
  }
};
