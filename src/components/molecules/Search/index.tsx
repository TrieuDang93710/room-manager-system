
const SeachComponent = () => {
    return (
        <div className="flex flex-col items-end justify-between gap-2">
            <label
                className="text-[#333333] font-bold text-[14px] dark:text-[#d1d1d1]"
                htmlFor="">Search</label>
            <input
                className="text-[#333333] font-bold text-[13px] dark:text-[#d1d1d1] dark:border-[#d1d1d1] border-[#303030] border-[2px] rounded-md py-2 px-3"
                placeholder="Searching ..."
                type="text"
                name="search"
                id="search" />
        </div>
    )
}

export default SeachComponent