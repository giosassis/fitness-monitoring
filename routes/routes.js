const Router = require('koa-router');
const UserController = require('../controllers/UserController');

const router = new Router();
const userController = new UserController();

// Rotas CRUD para usuários
router.post('/users', userController.createUser.bind(userController));
router.put('/users/:id', userController.updateUser.bind(userController));
router.delete('/users/:id', userController.deleteUser.bind(userController));
router.get('/users/:id', userController.getUserById.bind(userController));
router.get('/users', userController.getAllUsers.bind(userController));

module.exports = router;