import { useSelector } from "react-redux"
import { selectCategories } from "../features/categories/categoriesSlice"

export const CategoriesSideBar = () => {
    const categories = useSelector(selectCategories)

    return (
        <nav className="flex flex-1 flex-col mr-6" aria-label="Sidebar">
            <ul role="list" className="-mx-2 space-y-1">
                <span className="text-rose-400 group flex gap-x-3 rounded-md p-2 pl-3 text-xs leading-6 font-semibold">CATEGORIES</span>
                {Object.values(categories).map((category, index) => {
                    return (
                        <li key={index} className="text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-md ">
                            {/* <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" --> */}
                            <a href="#" className="font-normal group flex gap-x-3 p-2 pl-3 text-sm leading-6 font-semibold inline-block align-middle">
                                <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={category.icon} />
                                </svg>
                                {category.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>

    )
}