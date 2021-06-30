const express = require('express')
const app = express()
const port = 3000

const customer=require('./routes/customer-route')
const item=require('./routes/item-route')

const bodyPaser=require('body-parser')

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extends:true}))

app.use('/customer',customer)
app.use('/item',item)

app.listen(port, () => {
  console.log('Server Start')
})
//------------------------------------------------------------------------->