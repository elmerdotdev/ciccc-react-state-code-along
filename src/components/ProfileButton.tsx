import { User } from "../types/user.types"

type Props = {
  onProfile: (data: User) => void
}

const ProfileButton = ({ onProfile }: Props) => {
  return (
    <button onClick={() => onProfile({
      firstname: "Joe",
      lastname: "Smith",
      age: 50,
      isWorking: true
    })}>Fill in information</button>
  )
}

export default ProfileButton