import { useRouter } from 'next/router'
import { useState } from 'react'

const About = () => {
    const router = useRouter()

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const formHandle = (e) => {
        e.preventDefault()
         const data = {
             name,
             password
         }

         console.log(data)
         router.push('/')
    }
    return (

        <div>
            This is the about page

            <form onSubmit = {formHandle}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default About
