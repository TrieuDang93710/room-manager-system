
// interface CardProps {
//     children: React.ReactNode,
// }

// const Card = ({children}: CardProps) => {
//     return (
//         <div className="w-full border shadow-md rounded-md p-4 bg-[#f7f7f7] dark:bg-[#e9e9e9] dark:shadow-md dark:border-gray-400 dark:shadow-[#e4e4e4] dark:text-black">
//             {children}
//         </div>
//     )
// }

// export default Card

import * as React from "react"

import { cn } from "@/helpers/utils"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "w-full border shadow-md rounded-md p-4 bg-[#f7f7f7] dark:bg-[#e9e9e9] dark:shadow-md dark:border-gray-400 dark:shadow-[#e4e4e4] dark:text-black",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export { Card }