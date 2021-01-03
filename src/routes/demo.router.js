const express = require("express")
const router = express.Router()
const { getDemo } = require("../controller/demo")

router.get("/", getDemo)
