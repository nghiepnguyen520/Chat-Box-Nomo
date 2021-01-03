const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const rfs = require("rotating-file-stream")
const path = require("path")
const dotenv = require("dotenv")
const connectDB = require("./src/configs/db.config")

dotenv.config()

connectDB()
const app = express()
const port = process.env.PORT || 3000
const isProduction = process.env.NODE_ENV === "production"

//Add log for production
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: join(__dirname, "log"),
})
app.use(
  isProduction
    ? morgan("combined", {
        stream: accessLogStream,
      })
    : morgan("combined")
)

app.use(helmet())
app.use(cors())
app.use(express.json())

app.get("/api", require("./src/routes/router").default)

app.get("/", (req, res) => {
  res.json({
    message: "Code now",
  })
})
app.get("*", (req, res) => {
  res.json({
    message: "Code now",
  })
})

app.listen(port, () => console.log(`Server: ${port}`))
