export async function getPost(id: number) {
    const res = await fetch(`http://127.0.0.1:3001/posts/${id}`,
        { cache: 'no-store' }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch todos')
    }
    return res.json()
}


export default async function Posts({ params }: { params: { id: string } }) {
    const post = await getPost(Number(params.id)) 

    return(<>
        <h1>{post.title}</h1>
        {post.body}
    </>)
}