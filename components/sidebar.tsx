'use client';

import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {useActiveAccount} from 'thirdweb/react';

const Sidebar = () => {
  const pathName = usePathname();
  const ActiveAccount = useActiveAccount();

  return (
    <div className='fixed top-1/4 translate-y-1/2 left-6 bg-gray-900 text-white rounded-md py-4 px-4 shadow-lg'>
          <ul className='flex flex-col items-center space-y-6 text-4xl'>
              {/* <li><IoIosHome/></li>
              <li><MdDashboard/></li>
              <li><FaPoll/></li>
              <li> <IoIosPeople /></li>
              <li><FaVoteYea/></li>
              <li><HiUserAdd /></li>
              <li> <CgProfile /></li> */}
        {
          navLinks.map((item, index) => {
             if(item.name ==='Dashboard'&& !ActiveAccount  ) return null;
            return (
              <li key={index}
                className={cn(
                  'hover:text-green-500 hover: translate-x-1 hover:translate-y-1 transition-all',
                  { 'text-yellow-400': pathName === item.path })}>
              <Link href={item.path}>
                {item.icon}
              </Link>
              
              
              </li>
            )
        
          })
        }

     </ul>
    </div>
  )
}

export default Sidebar
