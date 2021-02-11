const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController')

router.get('/',usuariosController.list);
router.post('/add',usuariosController.save)
router.get('/delete/:id',usuariosController.delete)
router.get('/update/:id',usuariosController.edit)
router.post('/update/:id',usuariosController.update)
module.exports = router;

















