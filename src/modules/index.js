const {
  user,
  SUCCESS,
  FAILED,
} = require("./util1");
const { foo } = require("./util");

console.log(user, SUCCESS, FAILED);

console.log(foo());