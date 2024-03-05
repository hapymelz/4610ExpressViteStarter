import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  async function getRandomNumber() {
    const res = await fetch("/random_number");
    const body = await res.json();
  }



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
      <div>
        <nav className="my-nav"><h2>App Name</h2></nav>
        <Outlet />
      </div>

    </>
  )
}

export default App
