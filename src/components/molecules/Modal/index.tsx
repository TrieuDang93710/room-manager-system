import { cn } from "@/lib/utils"
import React, {  } from "react"

interface ModalProps {
    isOpen: boolean,
    hedden: boolean,
    onClose: () => void,
    children: React.ReactNode,
    className?: string
}

const Modal = ({ isOpen, hedden, onClose, children, className}: ModalProps) => {
    if (!isOpen) return null
    return (
        <div
        className={
            cn("absolute top-14 right-10 w-full dark:bg-[#ececec] bg-[#fbfbfb] shadow-md py-3 px-3 border rounded-lg", className)
        }>
            {hedden ?
                <button onClick={onClose}>close</button>
                :
                <button hidden onClick={onClose}>close</button>
            }
            {children}
        </div>
    )
}

export default Modal