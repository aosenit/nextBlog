import Link from "next/link"


// This function gets called at build time
export async function getStaticPaths() {
  
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }))

    return { paths, fallback: false }
  }

  export async function getStaticProps({params}) {


    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data= await res.json()
  
    return { props: {user: data } }
  }


const User = ({user}) => {
    console.log(user)
    return (
        
        <div>
          <p>User</p>
           <Link href="/users">Back to Users</Link>
           <li>
                <h2>{user.name}</h2>
                <h3>{user.company.name}</h3>
                <h5>{user.address.city}</h5>
           </li>
        </div>
    )
}

export default User
