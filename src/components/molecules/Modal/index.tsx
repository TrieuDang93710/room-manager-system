import { cn } from "@/helpers/utils"
import React, {  } from "react"

interface ModalProps {
    isOpen: boolean,
    hidden: boolean,
    onClose: () => void,
    children: React.ReactNode,
    className?: string
}

const Modal = ({ isOpen, hidden, onClose, children, className}: ModalProps) => {
    if (!isOpen) return null
    return (
        <div
        className={
            cn("absolute top-14 right-10 w-full dark:bg-[#ececec] bg-[#fbfbfb] shadow-md py-3 px-3 border rounded-lg", className)
        }>
            {hidden ?
                <button onClick={onClose}>close</button>
                :
                <button hidden onClick={onClose}>close</button>
            }
            {children}
        </div>
    )
}

export default Modal