import { HomeIcon, 
         MagnifyingGlassIcon, 
         CubeIcon,
         UserGroupIcon } from '@heroicons/react/20/solid'

const menuIconClassName = "relative m-auto h-[70%] text-black opacity-70 basis-1/4"

export const iconLibrary = {
    CubeIcon: <CubeIcon className={menuIconClassName}/> ,
    MagnifyingGlassIcon: <MagnifyingGlassIcon className={menuIconClassName}/> ,
    HomeIcon: <HomeIcon className={menuIconClassName} />,
    UserGroupIcon: <UserGroupIcon className={menuIconClassName} />
  }