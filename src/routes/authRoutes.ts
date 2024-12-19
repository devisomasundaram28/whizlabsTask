import { Router } from 'express';
import { register, login } from '../controllers/authController';
import { validateUserRegistration, validateUserLogin, handleValidationErrors } from '../utils/validators';

const router = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: User registration
 *     description: Register a new user with name, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request, validation errors
 *       500:
 *         description: Internal server error
 */
router.post('/register', validateUserRegistration(), handleValidationErrors, register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: Log in an existing user with email and password to receive a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT token successfully generated
 *       400:
 *         description: Invalid credentials or validation errors
 *       500:
 *         description: Internal server error
 */
router.post('/login', validateUserLogin(), handleValidationErrors, login);

export default router;
