const DemoModal = require("../models/demo.model")

const DemoService = {}
DemoService.getDemo = async () => {
  return await DemoModal.find({})
}
export default DemoService
