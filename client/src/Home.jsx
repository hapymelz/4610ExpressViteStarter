export const Login = () => {
    
    async function login(e) {
        
    }


    return (
        <form onSubmit={createUser}>
        <input placeholder="First Name" type='firstName' value={firstName} onChange={setFirstName(e.target.value)}/>
        <input placeholder="Last Name" type='lastName' value={lastName} onChange={setLastName(e.target.value)}/>
        <input placeholder="Email" type='email' value={email} onChange={setEmail(e.target.value)}/>
        <input placeholder="Password" type='password' value={password} onChange={setPassword(e.target.value)}/>
        <button>Create Account</button>
     </form>
    )
}