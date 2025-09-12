import { useId } from "react"

import { Label } from "@/components/ui/label"
import { SelectNative } from "@/components/ui/select-native"

export default function Select({...field}) {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Select Role</Label>
      <SelectNative id={id} {...field} className="bg-muted border-transparent shadow-none">
        <option value="USER">USER</option>
        <option value="AGENT">AGENT</option>

      </SelectNative>
    </div>
  )
}
