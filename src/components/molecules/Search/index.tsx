
const SeachComponent = () => {
    return (
        <div className="flex flex-col items-end justify-between gap-2">
            <label
                className="text-[#333333] font-bold text-[14px] dark:text-blue-600"
                htmlFor="">Tìm Kiếm</label>
            <input
                className="text-[#333333] dark:text-blue-600 bg-white dark:bg-transparent border-blue-600 font-bold text-[13px] dark:text-[#d1d1d1] dark:border-blue-600 dark:focus:border-blue-600 border-[2px] rounded-sm py-1 px-3"
                placeholder="Nhập các từ khóa ..."
                type="text"
                name="search"
                id="search" />
        </div>
    )
}

export default SeachComponent