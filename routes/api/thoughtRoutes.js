const router = require("express").Router();
const {
  getSingleThought,
  createThought,
  updateThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getSingleThought).post(createThought);
router.put(updateThought);

module.exports = router;
