

import Link from "next/link";


const Users = ({data}) => {
 

   
    return (
        
        <div>
            {data.map(d => (
                
                    <Link href={`/users/${d.id}`} key={d.id} >
                        <a>
                          <h2>{d.name}</h2>
                          <h5>{d.email}</h5>
                        </a>
                    </Link>
                 
            ))}
                
               
            
        </div>
    )
}

export default Users


export async function  getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
  
  
    return {
      props: {data}, 
    }
  }