import { Button } from "@/components/ui/button"
import React from "react"

interface ButtonGroupProps {
    children?: React.ReactNode
    title?: string,
    handleClick?: () => void
}

const ButtonGroup = ({ children, title, handleClick }: ButtonGroupProps) => {
    return (
        <div
            className="flex justify-center items-center gap-2 p-2 rounded-md border w-full">
            <Button
                variant="outline"
                size="primary"
                className="custom-button"
                onClick={handleClick}
            >{title}</Button>
            <Button
                variant="outline"
                size="primary"
                className="custom-button"
            >Đăng ký</Button>
            <Button
                variant="outline"
                size="primary"
                className="custom-button bg-green-500 text-white hover:text-[#212221]"
            >Đăng tin</Button>
            {children}
        </div>
    )
}

export default ButtonGroup