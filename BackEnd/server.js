import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/usuarios', async(req, res) => {
    //users.push(req.body)
    
    
    await prisma.user.create( {

        data: {
            email: req.body.email, 
            password: req.body.password,
            name: req.body.name,
            birthDate: new Date(req.body.birthDate),
            weight: req.body.weight,
            height: req.body.height,
            sex: req.body.sex
        }
    })

    res.status(201).json(req.body)

})

/*
app.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        birthDate: new Date(req.body.birthDate),
        weight: req.body.weight,
        height: req.body.height,
        sex: req.body.sex
              }
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});*/

app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)

    
})

app.put('/usuarios/:id', async(req, res) => {

        await prisma.user.update( {

        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email, 
            password: req.body.password,
            name: req.body.name,
            birthDate: new Date(req.body.birthDate),
            weight: req.body.weight,
            height: req.body.height,
            sex: req.body.sex
        }
    })
    
    res.status(201).json(req.body)

})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete ({

        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuario deletado com sucesso!"})

})

app.listen(3000)

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Email ou senha inválidos' });
    }

    res.status(200).json({ message: 'Login realizado com sucesso!', user });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});



