const express = require('express'),
	postsRouter = require('./posts'),
	profileRouter = require('./profile'),
	usersRouter = require('./users');

let router = express.Router();

// router.route('*')
//     .post(tokenMiddleware, isLoggedIn)
//     .put(tokenMiddleware, isLoggedIn)
//     .delete(tokenMiddleware, isLoggedIn);

router.use('/profile', profileRouter);
router.use('/posts', postsRouter);
router.use('/users', usersRouter);

module.exports = router;
