import { cn } from "@/lib/utils"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import React, { ReactNode } from "react"

interface FunctionListManagerProps {
    title?: string,
    hidden?: boolean,
    setHidden: (value: boolean) => void,
    listFunc?: Map<string, string>[],
    listIcon?: Map<string, ReactNode>[],
    className? :string,
    account?: string
}
const FunctionListManager = ({className,  hidden, listFunc, listIcon, title, setHidden, account }: FunctionListManagerProps) => {
    return (
        <div className={
            hidden ?
                cn("fixed z-20 md:w-1/12 w-1/8 flex flex-col items-center justify-start h-screen bg-[#0D1116] py-10 px-5", className)
                :
                cn("fixed z-20 md:w-1/6 w-1/4 flex flex-col items-start justify-start h-screen bg-[#0D1116] py-10 px-5", className)
        }>
            {
                hidden ?
                    <Image
                        alt="avatar"
                        src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
                        width="60"
                        height="60"
                        className="pb-5"
                    />
                    :
                    <div className="w-full flex flex-col items-center">
                        <h2 className="text-white md:text-2xl text-[16px] font-bold pb-5 text-center">{title}</h2>
                        <Image
                            alt="avatar"
                            src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
                            width="60"
                            height="60"
                            className="pb-5"
                        />
                        <p className="text-[#e4e4e4] md:text-[16px] text-[13px] font-bold pt-4 pb-4 text-center">Quan ly chuc nang</p>
                    </div>
            }
            <div className="w-full">
                <ul className="w-ful">
                    {
                        hidden === false
                            ?
                            listFunc?.map((item, index) => {
                                return <li key={index} className="w-ful block text-[#fcfcfc] md:text-[16px] text-[12px] px-5 md:p-4 p-[10px] hover:bg-[#e5e5e52e] hover:cursor-pointer rounded-md truncate">
                                    {
                                        Array.from(item).map(([key, value]) => <Link key={`${index}-${key}`} href={`/dashboard/${account}/${key}`}>{value}</Link>)
                                    }
                                </li>
                            })
                            :
                            listIcon?.map((item, index) => {
                                return <li key={index} className="w-ful flex items-center justify-center text-[#fcfcfc] md:text-[16px] text-[12px] px-5 md:p-4 p-[10px] hover:bg-[#e5e5e52e] hover:cursor-pointer rounded-md">
                                    {
                                        Array.from(item).map(([key, value]) => <Link key={`${index}-${key}`} href={`/dashboard/${account}/${key}`}>{value}</Link>)
                                    }
                                </li>
                            })
                    }
                </ul>
            </div>
            <div className="absolute top-2 right-1">
                {
                    hidden ?
                        <MenuUnfoldOutlined onClick={() => setHidden(!hidden)} className=" text-white font-bold text-xl hover:cursor-pointer hover:text-[#dcdcdc]" />
                        :
                        <MenuFoldOutlined onClick={() => setHidden(!hidden)} className=" text-white font-bold text-xl hover:cursor-pointer hover:text-[#dcdcdc]" />
                }
            </div>
        </div>
    )
}

export default FunctionListManager