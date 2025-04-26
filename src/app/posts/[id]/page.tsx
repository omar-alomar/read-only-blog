import Link from "next/link"

export async function getPost(id: number) {
    const res = await fetch(`http://127.0.0.1:3001/posts/${id}`,
        { cache: 'no-store' }
    )
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

export async function getCommentsByPost(postId: number) {
    const res = await fetch(`http://127.0.0.1:3001/comments`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch post comments')
    }
    const comments = await res.json()
    return comments.filter((comment: any) => comment.postId === postId)
}


export default async function Posts({ params }: { params: { id: string } }) {
    const post = await getPost(Number(params.id))
    const author = await getPostAuthor(post.userId)
    const comments = await getCommentsByPost(Number(params.id))

    return (<>
        <h2 className="page-title">{post.title}</h2>
        <div className="post-card">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-body">{post.body}</div>

            <div className="section-label">Author</div>
            <div className="author-card">
                <Link href={`/users/${author.id}`}>
                    <div className="author-name">{author.name}</div>
                </Link>
                <div className="author-details">
                    Username: {author.username}<br />
                    Email: {author.email}<br />
                    Phone: {author.phone}<br />
                    Website: <a href={`http://${author.website}`} target="_blank">{author.website}</a><br />
                    Company: {author.company.name}<br />
                    Catchphrase: "{author.company.catchPhrase}"<br />
                    City: {author.address.city}
                </div>
            </div>

            <div className="section-label">Comments</div>
            <div className="comments">
                {comments.length > 0 ? (
                    comments.map((comment: any) => (
                        <div key={comment.id} className="comment-card">
                            <div className="comment-name">{comment.name}</div>
                            <div className="comment-email">{comment.email}</div>
                            <div className="comment-body">{comment.body}</div>
                        </div>
                    ))
                ) : (
                    <div>No comments yet.</div>
                )}
            </div>
        </div>
    </>)
}