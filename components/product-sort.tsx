"use client"

import { useRouter } from "next/navigation"
import { Filter } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ProductFilters } from "@/components/product-filters"

const sortOptions = [
  { name: "ახალი დამატებული", value: "/?date=desc" },
  { name: "ფასი,  ზრდადი", value: "/?price=asc" },
  { name: "ფასი, კლებადი", value: "/?price=desc" },
]

export function ProductSort() {
  const router = useRouter()

  return (
    <div className="flex items-center">
      <Select onValueChange={(value) => router.replace(value)}>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder="გაფილტრე" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((opt) => (
            <SelectItem key={opt.name} value={opt.value}>
              {opt.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Sheet>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle>კატეგორია</SheetTitle>
            <SheetDescription>
              შეამცირეთ თქვენი პროდუქტის ძებნა ქვემოთ მოცემული ვარიანტების გამოყენებით.
            </SheetDescription>
          </SheetHeader>
          <ProductFilters />
        </SheetContent>
        <SheetTrigger className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
          <span className="sr-only">ფილტრი</span>
          <Filter className="h-5 w-5" aria-hidden="true" />
        </SheetTrigger>
      </Sheet>
    </div>
  )
}