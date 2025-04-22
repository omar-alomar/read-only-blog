import { Metadata } from "next";
import Link from "next/link";
import './styles.css'

export const metadata: Metadata = {
  title: "Welcome",
  description: "Description",
}

export default function Layout ({ children } : {children: React.ReactNode}) {
  return (<>
  <html lang="en">
    <body>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      {children}
    </body>
  </html>
  </>)
}