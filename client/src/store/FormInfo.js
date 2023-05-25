export default class FormInfo {
    constructor(props) {
        this._firstName = ''
        this._lastName = ''
        this._email = ''
        this._password = ''
        this._repeatPassword = ''
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._firstName
    }

    get email() {
        return this._email
    }

    get repeatPassword() {
        return this._repeatPassword
    }

    setFirstName(value) {
        this._firstName = value
    }

    setLastName(value) {
        this._lastName = value
    }

    setEmail(value) {
        this._email = value
    }

    setRepeatPassword(value) {
        this._repeatPassword = value
    }
    
}