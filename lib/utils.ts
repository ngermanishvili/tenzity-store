import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case "xs":
      return "X-Small"
    case "s":
      return "S - პატარა"
    case "m":
      return "M - საშუალო"
    case "l":
      return "L - დიდი"
    case "xl":
      return "XL"
    case "one-size":
      return "One Size"
  }
}
