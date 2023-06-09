import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session?.user?.access_token)
  if(session) {
    return <>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}