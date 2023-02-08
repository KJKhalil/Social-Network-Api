const router = require('express').Router();

const {
    getAllUsers,
    getAUser,
    updateUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controller/userController');

router
.route('/')
.get(getAllUsers)
.post(createUser);

router
.route('/:userId')
.get(getAUser)
.put(updateUser)
.delete(deleteUser);

router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;