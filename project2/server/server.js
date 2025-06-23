const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

const genderData = [
  { id: 1, name: "Male", checked: false },
  { id: 2, name: "Female", checked: false },
  { id: 3, name: "Other", checked: false },
];

app.get("/gender", (req, res) => {
  res.json(genderData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.patch("/gender/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = genderData.findIndex((item) => item.id === id);

  if (index !== -1) {
    genderData[index].checked = req.body.checked;
    res.json(genderData[index]);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});