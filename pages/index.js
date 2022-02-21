import Link from "next/link";

export default function Home() {
  return (
     <>
       <h1>Next js pre-rendering</h1>
      <Link href='/user'>
        <a>Users</a>
      </Link>
      <hr />
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
     </>
  )
}
