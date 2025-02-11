import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"

function CommonSelect({id,label,options}) {
  return (
    <div className="flex flex-col gap-4">
    <label className="font-semibold text-xl" htmlFor="">
      {id}  .{" "}{label}
    </label>
    <Select>
      <SelectTrigger className="w-full px-4 py-8">
        <SelectValue placeholder={label} />
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