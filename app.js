const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.set('puerto' , 3050 || 4000)

app.get('/', (req,res)=>{
    res.send('Conexion correctamente:')
})

app.use('/pago' , require('./mercadopago/mp'))

module.exports = app