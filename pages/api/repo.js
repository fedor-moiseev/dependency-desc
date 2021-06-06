const fetchRepo = require("../../utils/fetchRepo");

export default async (req, res) => {
  const { name, branch } = req.query;
  try {
    const data = await fetchRepo(name, branch);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      error: "NotFound",
    });
  }
};
