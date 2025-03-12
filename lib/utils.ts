<<<<<<< HEAD
import { clsx, type ClassValue } from "clsx"
=======
import { type ClassValue, clsx } from "clsx"
>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
<<<<<<< HEAD
=======

>>>>>>> 259c63f05b1927fb7ae608c89267cf9e972086b8
