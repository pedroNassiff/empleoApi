const router = require('express').Router()
const apiUsers = require('./api/users')
const apiMail = require('./api/mail')
const apiCursosAndCategias = require('./api/cursosAndCategias')
const apimunicipios = require('./api/municipios')

//router.use('/otracosa', middlewares.checkToken, otraRuras)

router.use('/users', apiUsers);
router.use('/mail', apiMail);
router.use('/cursosAndCategias', apiCursosAndCategias);
router.use('/municipios', apimunicipios);


module.exports = router