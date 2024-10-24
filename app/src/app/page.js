"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"





export default function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2">
      
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <ModeToggle/>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Zamknij</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      
    </div>
  )
}
