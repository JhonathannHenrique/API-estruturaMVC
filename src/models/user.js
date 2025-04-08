const users = []

class User {

    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        users.push(this)
    }

    static findAll() {
        return users
    }

    static delete(id) {
        User.users = User.users.filter(user => user.id !== id)
      }

}

module.exports = User