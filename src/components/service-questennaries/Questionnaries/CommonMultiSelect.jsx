import { Check, ChevronsUpDown, X } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popoverCustom";
import { Badge } from "@/components/shadcn/ui/badge";
import { cn } from "@/lib/shadcn/utils";
import { useEffect, useRef, useState } from "react";

function CommonMultiSelect({
  id,
  label,
  options,
  value = [],
  onChange,
  labelNum,
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    const newValue = [...value];

    if (newValue.includes(option)) {
      onChange(newValue.filter((item) => item !== option));
    } else {
      onChange([...newValue, option]);
    }
  };

  const removeOption = (option, e) => {
    e.stopPropagation();
    onChange(value.filter((item) => item !== option));
  };

  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState("");
  console.log(divWidth);

  // Update the width after the component has rendered
  useEffect(() => {
    if (divRef.current) {
      setDivWidth(`!min-w-[${divRef.current.offsetWidth}px]`);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4" ref={divRef}>
      <label className="text-lg font-semibold md:text-xl">
        {labelNum}. {label}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline2"
            role="combobox"
            aria-expanded={open}
            className="h-auto md:h-auto lg:h-auto min-h-[52px] w-full justify-between px-4 text-left md:min-h-[64px]"
          >
            {value.length > 0 ? (
              <div className="flex flex-wrap gap-2 text-wrap md:gap-3 lg:gap-4">
                {value.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-[20px]">
                    {item}
                    <button
                      className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => removeOption(item, e)}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {item}</span>
                    </button>
                  </Badge>
                ))}
              </div>
            ) : (
              <span className="text-wrap text-left !text-sm text-muted-foreground md:text-base">
                {label}
              </span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-accent" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("p-0", divWidth)}>
          <Command>
            <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={() => handleSelect(option)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value.includes(option) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CommonMultiSelect;
