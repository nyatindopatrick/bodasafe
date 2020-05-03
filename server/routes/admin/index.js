const router = require('express').Router();
const adminRoutes = require('../../controllers/Admin');
const {
  register,
  login,
  newSacco,
  saccos,
  messages,
  clearNotifications
} = adminRoutes;

router.post('/register', register);

router.post('/newsacco', newSacco);

router.post('/login', login);

router.post('/saccos', saccos);

router.post('/messages', messages);

router.put('/notifications', clearNotifications);

module.exports = router;
