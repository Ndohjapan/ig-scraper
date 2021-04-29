const express = require("express")
const app = express()
const scraper = require("./index")

app.use(express.json())
app.use(express.static("public"))

// app.get("/", (req, res) => {
//     res.render("index")
// })

app.post("/scrape", async(req, res) => {
    console.log(req.body)
    const result = await scraper(req.body.username)
    console.log(result)
    res.send(result)
})

const PORT = process.env.PORT || 1898
app.listen(PORT, () => {
    console.log("App is listening on port 1898")
})

