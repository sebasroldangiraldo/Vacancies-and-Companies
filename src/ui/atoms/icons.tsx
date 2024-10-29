import { PiSuitcaseBold} from "react-icons/pi";
import { LuBuilding2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { PiTrashBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const icons = {
    search : <IoSearch size={20} />,
    suitcase : <PiSuitcaseBold size={20} />,
    building : <LuBuilding2 size={20} />,
    add : <IoAddCircleOutline size={20} />,
    edit : <LuPencil size={20} />,
    delete : <PiTrashBold size={20} />,
    close : <IoClose size={20} />,
    back: <IoIosArrowBack size={20}/>,
    foward: <IoIosArrowForward size={20}/>
};