const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING}
})

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketBook = sequelize.define('basket_book', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Book = sequelize.define('book', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  book_cover: {type: DataTypes.STRING, allowNull: false},
  book_desc: {type: DataTypes.STRING, allowNull: false},
  total_pages: {type: DataTypes.INTEGER},
  total_sales: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Genre = sequelize.define('genre', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  genre: {type: DataTypes.STRING, allowNull: false}
})

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false}
})

const Profile = sequelize.define('profile', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  userName: {type: DataTypes.STRING, allowNull: false},
  profile_img: {type: DataTypes.STRING, allowNull: true},
  pronouns: {type: DataTypes.STRING, allowNull: true},
  bio: {type: DataTypes.STRING, allowNull: true}
})

const Seller = sequelize.define('seller', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  author_name : {type: DataTypes.STRING},
  total_earned: {type: DataTypes.INTEGER, defaultValue: 0}
})

const SoldBooks = sequelize.define('sold_books', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  sold: {type: DataTypes.INTEGER, allowNull: false}
})

const BookGenres = sequelize.define('book_genres', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const SellerBooks = sequelize.define('book_genres', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)
User.hasOne(Profile)
Profile.belongsTo(User)

User.hasOne(Seller, {constraints: false})
Seller.belongsTo(User)

Basket.hasMany(BasketBook)
BasketBook.belongsTo(Basket)

Genre.hasMany(Book)
Book.belongsTo(Genre)

Book.hasMany(Genre)
Genre.belongsToMany(Book , {through: BookGenres})

Book.hasMany(Rating)
Rating.belongsTo(Book)

Seller.hasMany(Book)
Book.belongsTo(Seller)

Book.hasOne(Seller)
Seller.belongsToMany(Book, {through: SellerBooks})

Seller.hasMany(SoldBooks)
SoldBooks.belongsTo(Seller)

Book.hasOne(SoldBooks)
SoldBooks.belongsTo(Book)


module.exports = {
  User,
  Basket,
  BasketBook,
  Book,
  Genre,
  BookGenres,
  Profile,
  Rating,
  Seller
} 