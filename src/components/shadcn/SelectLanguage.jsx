import { Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/shadcn/utils";
import { useMemo, useState } from "react";
import { LangIcon1 } from "@/assets/icons";

const SelectLanguage = ({ value, setValue }) => {
  const [openPopover, setOpenPopover] = useState(false);

  const allLanguage = useMemo(
    () => [
      { code: "en", name: "English" },
      { code: "fr", name: "French" },
      { code: "es", name: "Spanish" },
      { code: "de", name: "German" },
      { code: "it", name: "Italian" },
      { code: "zh", name: "Chinese" },
      { code: "ja", name: "Japanese" },
      { code: "ko", name: "Korean" },
      { code: "pt", name: "Portuguese" },
      { code: "ru", name: "Russian" },
      { code: "ar", name: "Arabic" },
      { code: "hi", name: "Hindi" },
      { code: "bn", name: "Bengali" },
      { code: "pa", name: "Punjabi" },
      { code: "jv", name: "Javanese" },
      { code: "ta", name: "Tamil" },
      { code: "tr", name: "Turkish" },
      { code: "vi", name: "Vietnamese" },
      { code: "pl", name: "Polish" },
      { code: "uk", name: "Ukrainian" },
      { code: "ro", name: "Romanian" },
      { code: "th", name: "Thai" },
      { code: "he", name: "Hebrew" },
      { code: "id", name: "Indonesian" },
      { code: "ms", name: "Malay" },
      { code: "ml", name: "Malayalam" },
      { code: "cs", name: "Czech" },
      { code: "sw", name: "Swahili" },
      { code: "hu", name: "Hungarian" },
      { code: "el", name: "Greek" },
      { code: "nl", name: "Dutch" },
      { code: "no", name: "Norwegian" },
      { code: "da", name: "Danish" },
      { code: "fi", name: "Finnish" },
      { code: "sv", name: "Swedish" },
      { code: "is", name: "Icelandic" },
      { code: "sr", name: "Serbian" },
      { code: "hr", name: "Croatian" },
      { code: "sk", name: "Slovak" },
      { code: "bs", name: "Bosnian" },
      { code: "sq", name: "Albanian" },
      { code: "mk", name: "Macedonian" },
      { code: "lv", name: "Latvian" },
      { code: "et", name: "Estonian" },
      { code: "lt", name: "Lithuanian" },
      { code: "gl", name: "Galician" },
      { code: "eu", name: "Basque" },
      { code: "ca", name: "Catalan" },
      { code: "mt", name: "Maltese" },
      { code: "sq", name: "Albanian" },
      { code: "ky", name: "Kirghiz" },
      { code: "mr", name: "Marathi" },
    ],
    []
  );

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={openPopover}
          className={cn(
            "md:text-md flex h-14 w-full items-center gap-3 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            !value && "text-input"
          )}
        >
          <LangIcon1 className="text-input" />
          {value
            ? allLanguage.find((language) => language.name === value)?.name
            : "Choose your language"}
          <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandInput placeholder="Search Language" />
          <CommandList>
            <CommandEmpty>No Language found.</CommandEmpty>
            <CommandGroup>
              {allLanguage.map((language, idx) => (
                <CommandItem
                  key={`lang-${idx}`}
                  value={language.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpenPopover(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === language.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {language.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectLanguage;
