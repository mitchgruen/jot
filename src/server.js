const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server is running on port ${port}!`))