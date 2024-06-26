const { expose, group, mids } = require("xprz").Route();
const { updateFollowStatus,handler_friend,followingList } = $read("controller/api/relationship");
const { verifyToken } = $read("middleware/is-auth");
mids([verifyToken]);
group("/api", (r) => {
  r.route("/follow-status").put(updateFollowStatus);
  r.route('/add_friend/:id').post(handler_friend)
  r.route('/remove_friend/:id').del(handler_friend)
  r.route('/follower/list/:userId').get(followingList)
});

module.exports = expose;
