const express = require('express');
const userApi = require('./API/user');
const ProjectApi = require('./API/project');
const TaskApi = require('./API/task');
const database = require('./config/database');

console.log('Starting server....')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})
app.post('/login', userApi.login);
app.post('/users', userApi.criarUsuario);

// Aplica a validação do token para as rotas abaixo
app.use(userApi.validarToken);
app.get('/users', userApi.listarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);

app.get('/projects', ProjectApi.listarProjetos);
app.put('/projects/:id', ProjectApi.alterarProjeto);
app.delete('/projects/:id', ProjectApi.deletarProjeto);

app.get('/tasks', TaskApi.listarTarefas);
app.put('/tasks/:id', TaskApi.alterarTarefa);
app.delete('/tasks/:id', TaskApi.deletarTarefa);

database.sync({ force: false })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

