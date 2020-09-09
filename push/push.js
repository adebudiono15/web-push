var push = require('web-push')

let vapiKey = {
    publicKey: 'BB3ygkY4C5OP0QB__7QmKBDNmRvvY707YYR0tAc3IhlgMQ_X9huZehoZdPIl2TGIXVnmmn5dZHUl_bPzN0Op2p8',
    privateKey: 'Pc87LUFk9wXJt0W_R1GVwy4xflQ3281qpbgTzsRKhN8'
}

push.setVapidDetails('mailto:adebudiono7@gmail.com', MapidKeys.publicKey, vapiKey.privateKey)

let klik = {};
push.sendNotification(klik, 'klik tes')