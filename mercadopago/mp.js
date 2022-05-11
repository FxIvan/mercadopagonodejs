const { Router } = require('express')
const router = Router()

const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'TEST-416635249836597-011823-189e3b033f0050ef428eb34e27d5d822-273551394'
  });

router.route('/')
.post(async(req,res)=>{
    let preference = {
        items: [
          {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
          }
        ]
      };

      mercadopago.preferences.create(preference)
      .then(function(response){
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        console.log(response.body)
      })
      .catch(function(error){
        console.log(error);
      })
})

module.exports = router