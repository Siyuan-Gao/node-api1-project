const express = require("express")

const db = require("./database")

const server = express()

server.use(express.json())

server.get("/", (req, res) => {
	res.json({ message: "Hello, World" })
})

server.get("/users", (req,res)=>{
  const users =db.find()
  res.json(users)
  })

  server.get("/users/:id", (req,res)=>{
    const id =req.param.id

      const user =db.findById(id)

      if (user){
        res.json(user)
      } else {
        res.status(404).json({message: "User not found"})
      }
  })

    server.post("/users", (req,res)=>{
      const newUser = db.insert({
        name:req.body.name
      })
      res.status(201).json(newUser)
    })

    


server.listen(8080, () => {
	console.log("Server started")
})