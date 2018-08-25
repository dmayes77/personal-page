import { Router } from 'express';
import postsRouter from './posts';
import profileRouter from './profile';
import usersRouter from './users';

let router = Router();

// router.route('*')
//     .post(tokenMiddleware, isLoggedIn)
//     .put(tokenMiddleware, isLoggedIn)
//     .delete(tokenMiddleware, isLoggedIn);

router.use('/profile', profileRouter);
router.use('/posts', postsRouter);
router.use('/users', usersRouter);

export default router;
