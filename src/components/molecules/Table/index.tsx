import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

const TableComponent = () => {
    return (
        <div className="min-w-full h-[50vh] overflow-y-auto">
            <table className="w-full table-fixed border-separate border-[2px] border-[#b0b0b0] rounded-md dark:text-[#d2d2d2]">
                <thead className="w-full border rounded-sm">
                    <tr className="w-full border">
                        <th className="sticky top-0 bg-blue-400 dark:bg-gray-500 rounded-tl-md w-[15%] p-2">Room of Name</th>
                        <th className="sticky top-0 bg-blue-400 dark:bg-gray-500 w-[20%]">Address</th>
                        <th className="sticky top-0 bg-blue-400 dark:bg-gray-500 ">Price</th>
                        <th className="sticky top-0 bg-blue-400 dark:bg-gray-500 ">Status</th>
                        <th className="sticky top-0 bg-blue-400 dark:bg-gray-500 ">Hidden</th>
                        <th className="sticky top-0 bg-blue-400 dark:bg-gray-500 ">Approved</th>
                        <th className="sticky top-0 bg-blue-400 dark:bg-gray-500 rounded-tr-md ">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from({ length: 20 }).map((_, index) =>
                            <tr key={index} className="cursor-default text-center border bg-[#c6c6c6] hover:bg-[#e3e3e300] dark:text-[#e6e6e6] dark:bg-[#ececec25] dark:hover:bg-[#ececec18]">
                                <td className="truncate px-2">Chung cu mini 1012</td>
                                <td className="truncate px-2">512 Nui Thanh, Hoa Cuong Nam, Hai Chau</td>
                                <td className="truncate px-2">3,000,000</td>
                                <td className="truncate px-2">Da thue</td>
                                <td className="truncate px-2">Show</td>
                                <td className="truncate px-2">Da duyet</td>
                                <td className="flex items-center justify-center sm:gap-2 px-2">
                                    <EditOutlined className="cursor-pointer rounded-full hover:bg-[#bebebe72] p-3" />
                                    <DeleteOutlined className="cursor-pointer rounded-full hover:bg-[#bebebe72] p-3" />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent