const { Router } = require("express");

const router = Router();

// funciona exactamente igual que el app.get, app.post, app.put
// app.METHOD...

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("respondiendo al post");
});

router.put("/", (req, res) => {
  res.send("respondiendo al put");
});

router.delete("/", (req, res) => {
  res.send("respondiendo al delete");
});

// exportar en node
module.exports = router;
