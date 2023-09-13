const express = require('express');
const imprestRouter=require('../controllers/imprestController')
const router = express.Router();

router.get('/',imprestRouter.getImprest);
router.get('/:id',  imprestRouter.getOneImprest);
router.post('/imprest_create', imprestRouter.createImprest);
router.put('/imprest_update/:id', imprestRouter.updateImprest);
router.delete('/imprest_delete/:id',imprestRouter.deleteOneImprest)

module.exports = router; 