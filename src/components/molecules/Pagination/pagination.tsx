import React, { useState } from "react"
import { pageSizeList } from "@/faker/data"
import SelectionComponent from "@/components/atoms/Selection"

const PaginationComponent = () => {
    const [pageSize, setPageSize] = useState<number>(10)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [disabled, setDisabled] = useState<boolean>(false)

    const handlePageInc = () => {
        const inc = currentPage + 1
        if (inc > 100) {
            setCurrentPage(100)
            setDisabled(!disabled)
        } else {
            setCurrentPage(inc)
        }
    }

    const handlePageDec = () => {
        const dec = currentPage - 1
        if (dec <= 0) {
            setCurrentPage(1)
            setDisabled(!disabled)
        } else {
            setCurrentPage(dec)
        }
    }

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectValue = Number(e.target.value)
        setPageSize(selectValue)
    }

    return (
        <div className="w-1/3 flex items-center justify-between p-2 gap-4">
            <div className="w-2/3 flex items-center justify-between">
                <button
                    onClick={handlePageDec}
                    className="text-center text-[#f1f1f1] bg-[#5f5f5fc4] text-[12px] font-bold py-2 px-4 rounded-md hover:bg-[#616161] dark:bg-[#30303000] dark:hover:bg-[#616161] dark:border-[#fff] dark:border-[2px]"
                    type="button">pre</button>
                <ul className="gap-2">
                <li
                    className="text-[#1e1e1e] font-[14px] dark:text-[#e2e2e2]">
                    {currentPage}
                </li>
                </ul>
                <button
                    onClick={handlePageInc}
                    className="text-center text-[#f1f1f1] bg-[#5f5f5fc4] text-[12px] font-bold py-2 px-4 rounded-md hover:bg-[#616161] dark:bg-[#30303000] dark:hover:bg-[#616161] dark:border-[#fff] dark:border-[2px]"
                    type="button">next</button>

            </div>
            <SelectionComponent
                optionList={pageSizeList}
                selectValue={String(pageSize)}
                setSelectValue={handlePageSizeChange}
                className="px-3 py-1 border rounded-md border-[#434343] w-1/3 dark:text-[#fff] dark:border dark:border-[#fff]"
            />
        </div>
    )
}

export default PaginationComponent