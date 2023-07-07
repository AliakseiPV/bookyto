const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket, Author} = require('../models/models.js')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, 
        {expiresIn: '24h'}
    )
}
class UserController {

    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password || !role) {
            return next(ApiError.badRequest('no email, password or role'))
        }      
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'))
        }  
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, role})

        if (role === 'Seller') {
            const author = await Author.create({userId: user.id})
        }
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('User is not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Password is wrong'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
       const token = generateJwt(req.user.id, req.user.email, req.user.role)
       return res.json({token})
    }

    async createProfile(req, res) {

    }

    async getProfile(req, res) {

    }
}

module.exports = new UserController

