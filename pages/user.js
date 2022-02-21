
const user = ({ users }) => {
  return (
   <>
    <h1>List of Users</h1>
    {
        users.map(user => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })
    }   
   </>
  )  
}

export default user;

/* ------------------------------ Static props ------------------------------ */
export async function getStaticProps() {  

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {   
            users: data,
        }
    }
}



