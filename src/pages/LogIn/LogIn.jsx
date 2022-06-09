import "./LogIn.css"
import { useData } from "../../context/Context"
import { useState } from "react"
import { Link } from "react-router-dom"

const initialState = {
  inputEmail: '',
  inputPassword: '',
}
export default function LogIn({history}) {
  const {users, currentUser, setCurrentUser} = useData()
  const [formLogin, setFormLogin] = useState(initialState);
  const [wrongMessage, setWrongmessage] = useState(false)

  const handleChange = ({ target: { name: nameInput, value } }) => {
    setFormLogin({ ...formLogin, [nameInput]: value })
  }

  const handleClick = (event) => {
    event.preventDefault()
    checkLoginUser(formLogin.inputEmail, formLogin.inputPassword);
  }

  const checkLoginUser = (userEmail, userPassword) => {

    const isSignIn = users.find((user) => {
      if (user.email.toLowerCase() === userEmail.toLowerCase() && user.password === userPassword) {
        return user;
      }
      return null;
    });
    if (isSignIn) {
      setCurrentUser(isSignIn)
      history.push("/user-info")
    } else {
      setWrongmessage(true)
    }
  }
  return (
  <div className="LogIn">
    <form className='login-form' action="">
        <div className='login-inputs'>

          <input onChange={handleChange} placeholder="Email"
            name='inputEmail' value={formLogin.email} type="email" required />

          <input onChange={handleChange} placeholder="Password"
            name='inputPassword' autoComplete="true" password={formLogin.password} type="password" required />
        </div>

           <button onClick={handleClick} type='submit'>Log In</button>
           <button className="new-user" type='submit'>New User</button>

      </form>
      {wrongMessage && "Wrong password / Email. please try again."}
  </div>
  )
}
