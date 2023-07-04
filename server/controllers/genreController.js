const {Genre} = require('../models/models')
const ApiError = require('../error/ApiError')
class genreController {
  async create(req, res) {
      const {genre} = req.body
      const genreType = await Genre.create({genre})
      return res.json(genreType)
  }

  async getAll(req, res) {
      const genres = await Genre.findAll()
      return res.json(genres)
  }
}

module.exports = new genreController()