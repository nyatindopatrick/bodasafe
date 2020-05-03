const router = require('express').Router();
const saccoRoutes = require('../../controllers/Sacco');
const { sacco, riders, newRider } = saccoRoutes;

router.post('/', sacco);

router.post('/riders', riders);

router.post('/newrider', newRider);
module.exports = router;
