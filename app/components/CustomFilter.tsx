
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Fuel } from "lucide-react"

const CustomFilter = () => {
  return (
    <div className="w-full border stroke-black py-10">
      <div className="leading-2">
        <h2 className="text-4xl font-bold">Car Catalogue</h2>
        <p className="text-lg">Explore the cars you might like</p>
      </div>
      <div className="flex gap-x-5 py-5">
        <Input className="p-5" placeholder="Search" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Gas"/>
            <Fuel />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year" />
            <Calendar />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}

export default CustomFilter