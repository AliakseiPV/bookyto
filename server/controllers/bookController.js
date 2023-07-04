const uuid = require('uuid')
const path = require('path')
const {Book, Seller} = require('../models/models')
const ApiError = require('../error/ApiError')


class BookController {

    async create(req, res, next) {
        try {
            const {title,
                price,  
                book_desc, 
                total_pages, 
                genreId} = req.body    
            const {book_cover} = req.files
            let fileName = uuid.v4() + '.jpg'
            book_cover.mv(path.resolve(__dirname, '..', 'static', fileName))
            
            const book = await Book.create({
                title, 
                price, 
                book_desc, 
                total_pages, 
                genreId, 
                book_cover: fileName,
            })
            return res.json(book)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        let {genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 15
        let offset = page * limit - limit
        let books
        if(!genreId) {
            books = await Book.findAndCountAll({limit, offset})
        }
        if(genreId) {
            books = await Book.findAndCountAll( {where: {genreId}, limit, offset})
        }
        return res.json(books)
    }
    async getOne(req,res) {
        const {id} = req.params
        const book = await Book.findOne(
            {where: {id}}
        )
        return res.json(book)
    }
}

module.exports = new BookController

