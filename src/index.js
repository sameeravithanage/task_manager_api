const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

/* this function parses all json strings sent from client so they
can be accessed in route requests */
app.use(express.json())

// Setting the routers
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is running on port ' + port)
})

