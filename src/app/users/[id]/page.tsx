export async function getUser(id: number) {
    const res = await fetch(`http://127.0.0.1:3001/users/${id}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }
    return res.json()
}

export async function getTodos() {
    const res = await fetch(`https://127.0.0.1:3001/todos`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch todos')
    }
    return res.json()
}


export default async function Users( { params } : { params: {id: string}}) {
    const user = await getUser(Number(params.id))
    // const todos = await 

    return(<>
            <div className="container">
            <h1>User Details</h1>

            <div className="card">
                <h2>{user.name} <span className="username">(@{user.username})</span></h2>
                <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank">{user.website}</a></p>
            </div>

            <div className="card">
                <h3>Address</h3>
                <p>{user.address.suite}, {user.address.street}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
                <p><small>Geo: {user.address.geo.lat}, {user.address.geo.lng}</small></p>
            </div>

            <div className="card">
                <h3>Company</h3>
                <p><strong>{user.company.name}</strong></p>
                <p><em>{user.company.catchPhrase}</em></p>
                <p>{user.company.bs}</p>
            </div>
            </div>
    </>)
}