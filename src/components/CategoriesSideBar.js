import { useSelector } from "react-redux"
import { selectCategories } from "../features/categories/categoriesSlice"

export const CategoriesSideBar = () => {
    const categories = useSelector(selectCategories)
    
    return (
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
            <ul role="list" className="-mx-2 space-y-1">
                {Object.values(categories).map((category, index) => {
                    return (
                        <li key={index}> 
                            {/* <!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" --> */}
                            <a href="#" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold">
                                <svg className="h-4 w-4 shrink-0 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
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