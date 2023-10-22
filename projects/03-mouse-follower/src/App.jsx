import { useState } from "react"
import { FollowMouse } from "./components/FollowMouse"

function App() {

  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={ () => {setMounted(!mounted)}}>
        Toogle mounted FollowMouse component
      </button>
    </main>
  )
}

export default App
