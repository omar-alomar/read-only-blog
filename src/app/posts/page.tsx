export async function getPosts() {
    const res = await fetch('http://127.0.0.1:3001/posts', {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch todos')
    }
    return res.json()
}

export async function getPostAuthor(id: number) {
    const res = await fetch(`http://127.0.0.1:3001/users/${id}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch post authors')
    }
    return res.json()
}


export default async function Page() {
    const posts = await getPosts()
    const authors = await

    return (<>
        <h2 className="page-title">Posts page</h2>
        <ul className="post-list">
            {posts.map((post: any) => (
                <li key={post.id} className="post-card">
                    <h2 className="post-title">{post.title}</h2>
                    <h5 className="post-title">{post.body}</h5>
                    <h5 className="post-author">Author ID:{await getPostAuthor(post.userId)}</h5>
                    <button className="view-btn">View</button>
                </li>
            ))}
        </ul>

    </>)
}