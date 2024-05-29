import { TiHome } from 'react-icons/ti'
import { CgProfile } from 'react-icons/cg'
import { FaPoll, FaVoteYea } from 'react-icons/fa'
import { HiUserAdd } from 'react-icons/hi'
import { IoIosHome, IoIosPeople } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'



 export const navLinks = [
    { name: 'Home', icon: <TiHome />, path: '/' },
    { name: 'Admin', icon: <MdDashboard/>, path: '/admin' },
    { name: 'Elections', icon: <FaPoll/>, path: '/elections' },
    { name: 'Candidate', icon: <IoIosPeople />, path: '/candidate' },
    { name: 'Voting', icon: <FaVoteYea/>, path: '/voting' },
    { name: 'Registration', icon: <HiUserAdd />, path: '/registration' },
    { name: 'Profile', icon: <CgProfile />, path: '/profile' },
  ]
  