import Link from "next/link";

export async function getUsers() {
    const res = await fetch(`http://127.0.0.1:3001/users`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch todos')
    }
    return res.json()
}

export default async function Users() {
    const users = await getUsers()
    
    return(<>
            <div className="container">
            <h1>All Users</h1>
            <ul className="user-list">
                {users.map((user: any) => (
                <li key={user.id} className="user-card">
                    <div className="user-info">
                    <h2>{user.name}</h2>
                    <p>@{user.username}</p>
                    <p>{user.email}</p>
                    </div>
                    <Link href={`/users/${user.id}`}>
                    <button className="view-btn">View Profile</button>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        
    </>)
}