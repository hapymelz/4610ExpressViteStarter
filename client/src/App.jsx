import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  async function getRandomNumber() {
    const res = await fetch("/random_number");
    const body = await res.json();
    setRandomNumber(body.number);
  }

  useEffect(() => {
    getRandomNumber();
  }, []);

  async function createUser(e) {
    e.preventDefault();

    const res = await fetch("/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        email,
        password,
        firstName,
        lastName
      )
    })
    console.log(await res.json())
  }

  return (
    <>
     <form onSubmit={createUser}>
        <input placeholder="First Name" type='firstName' value={firstName} onChange={setFirstName(e.target.value)}/>
        <input placeholder="Last Name" type='lastName' value={lastName} onChange={setLastName(e.target.value)}/>
        <input placeholder="Email" type='email' value={email} onChange={setEmail(e.target.value)}/>
        <input placeholder="Password" type='password' value={password} onChange={setPassword(e.target.value)}/>
     </form>


    </>
  )
}

export default App
