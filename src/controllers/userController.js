const User = require('../models/user')

class UserController {
    
    static insert(req, res) {
        const { id, name, email, password } = req.body

        const user = new User(id, name, email, password)
        user.save()

        res.status(201).json(user)
    }

    static findAll(req, res) {
        const users = User.findAll()

        res.json(users)
    }

    static deleteUser(req, res) {
        const id = parseInt(req.params.id)
        User.delete(id)
        res.status(204).send()
      }

}

module.exports = UserController;

