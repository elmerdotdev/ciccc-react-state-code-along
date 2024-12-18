import { useState } from "react"
import Welcome from "./components/Welcome"
import ProfileButton from "./components/ProfileButton"
import Todos from "./components/Todos"

type User = {
  firstname: string,
  lastname: string,
  age: number,
  isWorking: boolean
}

const App = () => {
  const [user, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    age: 0,
    isWorking: false
  })

  const handleProfile = (data: User) => {
    const { firstname, lastname, age, isWorking } = data
    setUser({
      firstname,
      lastname,
      age,
      isWorking
    })
  }

  return (
    <div>
      <ProfileButton onProfile={handleProfile} />
      <Welcome user={user} />
      <hr />
      <Todos />
    </div>
  )
}

export default App