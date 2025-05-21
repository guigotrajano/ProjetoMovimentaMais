
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../../../services/api";
import './style.css'

function Login() {
  const inputEmail = useRef()
  const inputPassword = useRef()
  const navigate = useNavigate() // hook de navegação

  async function loginUser() {
    try {
      const response = await api.post('/login', {
        email: inputEmail.current.value,
        password: inputPassword.current.value
      })

      alert('Login realizado com sucesso!')
      localStorage.setItem('usuario', JSON.stringify(response.data.user))

      // Redirecionar após login
      navigate('/home') // ou outra rota da sua aplicação

    } catch (error) {
      alert('Email ou senha inválidos')
      console.error(error)
    }
  }

  function irParaCadastro() {
    navigate('/cadastro') // rota para tela de cadastro, se configurada
  }

  return (
    <div className='container'>
      <form>
        <h1 className="titulo">
          <span className="azul">Movimenta</span><span className="laranja">+</span>
        </h1>
        <h2><span className="subtitulo">Que bom te ver aqui!</span></h2>

        <input placeholder='Digite seu e-mail' type='text' ref={inputEmail} />
        <input placeholder='Digite sua senha' type='password' ref={inputPassword} />

        <button className='button-login' type='button' onClick={loginUser}>Entrar</button>

        <h3><span className="texto1">Ainda não possui conta?</span></h3>
        <button className='button-cadastro' type='button' onClick={irParaCadastro}>
          Cadastre-se
        </button>
      </form>
    </div>
  )
}

export default Login
