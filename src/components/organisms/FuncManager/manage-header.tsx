import Modal from "@/components/molecules/Modal"
import { BellOutlined, MenuUnfoldOutlined, MessageOutlined, MoonOutlined, SunOutlined, UserAddOutlined, WindowsOutlined } from "@ant-design/icons"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ManagerHeaderProps {
    ishiddenMenu?: boolean,
    setIshiddenMenu: (value: boolean) => void,
    account?: string
}

const ManagerHeader = ({ setIshiddenMenu, ishiddenMenu, account }: ManagerHeaderProps) => {

    const { setTheme } = useTheme()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Modal to open and to set theme: dark/light
    const handleMouseEnter = () => {
        setIsModalOpen(true)
    }
    const handleMouseLeave = () => {
        setIsModalOpen(false)
    }

    return (
        <div
            className="w-full fixed z-10 right-0 shadow-md bg-[#fdfdfd] dark:bg-[#0D1116] p-3">
            <div
                onClick={() => setIshiddenMenu(!ishiddenMenu)}
                // onMouseLeave={() => setIshiddenMenu(!ishiddenMenu)}
                className="absolute top-5 left-1 md:hidden">
                <MenuUnfoldOutlined
                    className="text-black dark:text-white text-[16px] font-bold text-xl hover:cursor-pointer hover:text-[#dcdcdc]"
                />
            </div>
            <div className="flex items-center justify-end gap-4">
                <div
                    className="relative">
                    <Link href="href">
                        <MessageOutlined className=" text-[#2f2f2f] dark:text-[#d3d3d3] font-bold text-lg hover:cursor-pointer hover:text-[#a0a0a0] dark:hover:text-[#767676]" />
                    </Link>
                    <span className="absolute z-10 right-[-10px] top-[-5px] w-[20px] text-center bg-red-500 text-white border rounded-full font-bold text-[12px]">1</span>
                </div>
                <div className="relative">
                    <BellOutlined className=" text-[#2f2f2f] dark:text-[#d3d3d3] font-bold text-lg hover:cursor-pointer hover:text-[#a0a0a0] dark:hover:text-[#767676]" />
                    <span className="absolute z-10 right-[-10px] top-[-5px] w-[20px] text-center bg-red-500 text-white border rounded-full font-bold text-[12px]">1</span>
                </div>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative flex items-start justify-center gap-1 before:content-normal before:absolute before:bg-[#ffffff00] before:w-1/2 before:h-8 before:top-12 before:left-5">
                    <Image
                        alt="avatar"
                        src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
                        width="40"
                        height="40"
                        className="cursor-pointer"
                    />
                    <div className="flex flex-col items-start relative">
                        <h3 className="font-medium text-[14px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer">Dang Binh Trieu</h3>
                        <p className="font-medium text-[12px] dark:text-[#b4b4b4] dark:hover:text-[#ebebeb] cursor-pointer">trieu.{account}123@gmail.com</p>
                        <Modal hedden={false} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <ul className="w-full">
                                <li className="flex gap-2 text-[#141414] hover:text-[#747474] cursor-pointer font-bold">
                                    <UserAddOutlined />
                                    <Link className="text-[15px]" href={"/dashboard/lessor/profile"}>q.ly ho so</Link>
                                </li>
                                <li className="flex gap-2 text-[#141414] hover:text-[#747474] cursor-pointer font-bold">
                                    <WindowsOutlined />
                                    <p onClick={() => setTheme("system")} className="text-[15px]">system</p>
                                </li>
                                <li className="flex gap-2 text-[#141414] hover:text-[#747474] cursor-pointer font-bold">
                                    <SunOutlined />
                                    <p onClick={() => setTheme("light")} className="text-[15px]">light</p>
                                </li>
                                <li className="flex gap-2 text-[#141414] hover:text-[#747474] cursor-pointer  font-bold">
                                    <MoonOutlined />
                                    <p onClick={() => setTheme("dark")} className="text-[15px]">dark</p>
                                </li>
                            </ul>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagerHeader