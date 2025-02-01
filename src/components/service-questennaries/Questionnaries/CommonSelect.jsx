import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"

function CommonSelect({label,options}) {
  return (
    <div className="flex flex-col gap-3">
    <label className="font-medium" htmlFor="">
      {label}
    </label>
    <Select>
      <SelectTrigger className="w-full px-4 py-8">
        <SelectValue placeholder="what type of property needs gutter cleaning? " />
      </SelectTrigger>
      <SelectContent>
        {
            options.map(option =>  <SelectItem key={option} value={option}>{option}</SelectItem>)
        }

      </SelectContent>
    </Select>
  </div>
  )
}

export default CommonSelect