import express from 'express'
import cors from 'cors'


const app = express()

const port = process.env.PORT || 4000

app.use(cors())

app.get('/api/hello', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)  
})