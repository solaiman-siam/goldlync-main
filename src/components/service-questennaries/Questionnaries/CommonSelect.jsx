import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";

function CommonSelect({ id, label, options, value, onChange, labelNum }) {
  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <label className="text-lg md:text-xl font-semibold">
        {labelNum}. {label}
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full px-4 h-[52px] md:h-[64px] text-left">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CommonSelect;