import Link from "next/link"

// iconos
import { FaCalculator } from "react-icons/fa";
import { SidebarMenuItems } from "./SidebarMenuItems";

const menuItems=[
    {
        path:"/dashboard/main",
        title: "Main",
        icon: <FaCalculator/>,

    },
    {
        path:"/dashboard/counter",
        title: "Counter",
        icon: <FaCalculator/>,

    }
]

export const Sidebar = () => {
  return (
   
    <div className="min-h-screen flex">
    <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
      <div className="relative border-b border-white/20">
        <Link className="flex items-center gap-4 py-6 px-8" href="#/">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">My Dashboard</h6>
        </Link>
        <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
        </button>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
            {
                menuItems.map(item =>(  
                <SidebarMenuItems key={item.path} {...item} />
                ))
            } 
          
        </ul>
       
      </div>
    </aside>

    
    </div>
  )
}
