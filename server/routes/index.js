const router = require('express').Router();

router.use('/admin', require('./admin'));
router.use('/sacco', require('./sacco'));
router.use('/rider', require('./rider'));
router.use('/sms', require('./sms'));

module.exports = router;
