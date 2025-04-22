export async function getTodos() {
    const res = await fetch('http://127.0.0.1:3001/todos', {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch todos')
    }
    return res.json()
}

export default async function Todos() {
    const todos = await getTodos()

    return(<>
        <h2>Todos</h2>
        <ul>
            {todos.map((todo: any) => (
                <li key={todo.id}>
                    <ul>
                        <span style={{textDecoration: !todo.completed ? 'line-through' : 'none'}}>
                            {todo.title} - {String(todo.completed)}
                        </span>
                    </ul>
                </li>
            ))}
        </ul>

    </>)
}