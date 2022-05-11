const app = require('./app')

async function Main(){
    await app.listen(app.get('puerto'))
    console.log('Conectador por el puerto: ' , app.get('puerto'))
}

Main()