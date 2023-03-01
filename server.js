const express = require("express")
const server = express()
server.use(express.json())
const port = 5500;
const host = `http://localhost:${port}`

server.use('/', express.static('www'))

// start
server.listen(port, () => {
  console.log(host)
  console.log('server running on port ' + port)
})

// stop
server.get("/done", async (req, res) => {
    setTimeout(process.exit, 2000)
    res.json({done:"done", exiting:"in 2 seconds"})
})