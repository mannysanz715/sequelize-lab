const { Dog } = require("../models")

async function create(req, res){
  try {
    const dog = await Dog.create(req.body)
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function index(req, res){
  try {
    const dogs = await Dog.findAll()
    res.status(200).json(dogs)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function update(req, res){
  try {
    const dog = await Dog.findByPk(req.params.id)
    dog.set(req.body)
    await dog.save()
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}

async function deleteDog(req, res){
  try {
    const dog = await Dog.findByPk(req.params.id)
    await dog.destroy()
    res.status(200).json(dog)
  } catch (error) {
    res.status(500).json(error)
  }
}
module.exports = {
  create,
  index,
  update,
  delete: deleteDog,
}