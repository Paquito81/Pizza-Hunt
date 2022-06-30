const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controllers');

// /api/commens/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);


module.exports = router;