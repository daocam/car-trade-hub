import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { UserRoundCheck } from "lucide-react"

const UserNav = () => {
  return (
    <div>
      <Avatar className="h-10 w-10 rounded-sm">
        <UserRoundCheck className="h-8 w-8" />
      </Avatar>
    </div>
  )
}

export default UserNav