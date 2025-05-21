import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from "../../../services/api";


function Home() {
//const [users, setUsers] = useState([])

const inputEmail = useRef();
const inputPassword = useRef();
const inputName = useRef();
const inputBirthDate = useRef();
const inputWeight = useRef();
const inputHeight = useRef();
const inputSex = useRef();


  async function createUsers() {

    await api.post('/usuarios', {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      name: inputName.current.value,
      birthDate: inputBirthDate.current.value,
      weight: parseFloat(inputWeight.current.value), 
      height: parseFloat(inputHeight.current.value), 
      sex: inputSex.current.value,

    });

}

  return (
      <div className='container'>
        <form>
          <h1 className="titulo">
            <span className="azul">Movimenta</span><span className="laranja">+</span>
          </h1>
          <h2>
            <span className="subtitulo">Sua jornada saudável <br/> está prestes a começar!</span>
          </h2>
          <input placeholder='Digite seu e-mail' name='email' type='text' ref={inputEmail}></input>
          <input placeholder='Crie uma senha' name='password' type='password' ref={inputPassword}></input>
          <input placeholder='Digite seu nome' name='name' type='text' ref={inputName}></input>
          <input placeholder='Insira sua data de nascimento' name='birthDate' type='date' ref={inputBirthDate}></input>
          <input placeholder='Informe seu peso atual' name='weight' type='number' ref={inputWeight}></input>
          <input placeholder='Informe sua altura' name='height' type='number' ref={inputHeight}></input>
          <label htmlFor="sex" placeholder='Selecione seu sexo'></label>
          <select name="sex" id="sex" ref={inputSex} defaultValue="">
            <option value="" disabled>
              Selecione seu sexo
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>

          <button className='button-cadastro' type='button' onClick={createUsers}>Tudo Pronto!</button>
        </form>
        
      </div>

  )
}

export default Home
