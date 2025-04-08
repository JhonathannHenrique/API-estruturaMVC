const express = require('express')
const UsersController = require('./controllers/userController')
const ProjectsController = require('./controllers/projectController')
const TasksController = require('./controllers/taskController')
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/users', UsersController.insert)
app.get('/users', UsersController.findAll)
app.delete('/users/:id', UsersController.delete)


app.post('/projects', ProjectsController.insert)
app.get('/projects', ProjectsController.findAll)
app.delete('/projects/:id', ProjectsController.delete)

app.post('/tasks', TasksController.insert)
app.get('/tasks', TasksController.findAll)
app.delete('/tasks/:id', TasksController.delete)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

