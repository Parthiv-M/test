const express = require("express")
const router = express.Router();

router.get("/hello", (req, res) => {
    res.send({ message: "This was an AWS-ome workshop 🌍" });
})

module.exports = router