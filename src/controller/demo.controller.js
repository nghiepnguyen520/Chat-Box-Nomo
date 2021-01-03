const DemoServices = require("../services/demo.services")
const DemoController = {}
DemoController.getDemo = (req, res) => {
  try {
    const demos = DemoServices.getDemo()
    res.status(200).json({ demos })
  } catch (error) {
    res.status(400)
  }
}
export default DemoController
