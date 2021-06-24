const app = require('express')()
const cosign = require('consign')
const consign = require('consign/lib/consign')

consign()
    .include('./config/passport.js')
    .include('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(4000, () => {
    console.log('Backend executando...')
})