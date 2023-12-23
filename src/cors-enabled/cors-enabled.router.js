const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

const corsDelete = cors({ methods: "DELETE" });
const corsGet = cors({ methods: "GET" }); // non-standard -- normally just pass cors() directly in the get route below

router
  .route("/:corsId")
  .get(corsGet, controller.read)
  .put(controller.update)
  .delete(corsDelete, controller.delete)
  .options(corsDelete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
