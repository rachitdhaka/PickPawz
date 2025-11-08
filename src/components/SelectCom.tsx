import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Option = { value: string; label: string }

interface SelectComProps {
  options?: Option[]
  label?: string
  placeholder?: string
  className?: string
}

export function SelectCom({
  options = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "both", label: "Both" },
  ],
  label = "Select",
  placeholder = "Select preference",
  className = "w-[180px]",
}: SelectComProps) {
  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
