const mongoose = require("mongoose")
const { Schema } = mongoose
const DemoSchema = Schema({
  name: string,
})
const DemoModal = mongoose.model("Demos", DemoSchema, "demos")
export default DemoModal
