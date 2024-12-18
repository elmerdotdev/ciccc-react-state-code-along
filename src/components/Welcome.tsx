import { User } from "../types/user.types"

type Props = {
  user: User
}

const Welcome = ({ user }: Props) => {
  return (
    <div>
      <ul>
        <li>Firstname: {user.firstname}</li>
        <li>Lastname: {user.lastname}</li>
        <li>Age: {user.age}</li>
        <li>Employed: {user.isWorking ? "Yes" : "No"}</li>
      </ul>
    </div>
  )
}

export default Welcome