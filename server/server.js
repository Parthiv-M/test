const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json({ extended: false }));

app.use("/api/test", require("./api/test"))

// listens to the app on PORT
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});