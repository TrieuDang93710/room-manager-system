import { Card } from "@/components/molecules/Card"
import { cn } from "@/lib/utils"

interface MaintenanceCardProps {
    title: string,
    count?: number,
    icon: React.ReactNode,
    className?: string
}

const MaintenanceCard = ({className, title, count, icon}: MaintenanceCardProps) => {
    return (
        <div className={
            cn("md:w-[84%] w-full md:ml-4 pr-10 md:flex md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2", className)
        }>
            <Card
            className="dark:bg-[#1a1a1a]"
            >
                <div className="flex justify-between">
                    <div className="flex flex-col items-stretch gap-6">
                        <p className="text-[#292929] dark:text-[#dedede] font-bold text-[15px]">{title}</p>
                        <p className="text-[#1b1b1b] dark:text-[#f2f2f2] font-bold text-3xl">{count}</p>
                    </div>
                    <span className="text-[#0e0e0e] dark:text-[#dedede] font-[20px] text-xl">
                        {icon}
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default MaintenanceCard