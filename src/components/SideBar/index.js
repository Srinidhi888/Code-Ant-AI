import "./index.css"
import { TiHomeOutline } from "react-icons/ti";
import { FaCode } from "react-icons/fa";
import { CiCloudOn ,CiSettings} from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
    return (
        <div className="side-bar">
          <div className="stick">
            <div className="logo">
            <img className="logo-img" alt="logo" src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"/>
            <h2>CodeAnt AI</h2>
            </div>
            <select className="select-ipt">
                <option value="uthkarshdhairya">UthkarshDhairya</option>
                <option value="grewal">Grewal</option>
                <option value="srinidhi">Srinidhi</option>
           </select>
           <br/>
           <br/>
           <button className="btn-opt-spcl">
           <TiHomeOutline className="icon"/>
                Repositories
           </button>
           <button className="btn-opt">
           <FaCode className="icon"/>
                AI Code Review
           </button>
           <button className="btn-opt">
           <CiCloudOn className="icon"/>
                Cloud Security
           </button>
           <button className="btn-opt">
           <LuBookText className="icon"/>
                How to use
           </button>
           <button className="btn-opt">
           <CiSettings className="icon"/>
                Settings
           </button>
           </div>
           <footer className="foot">
           <button className="btn-opt">
           <FiPhone className="icon"/>
                Support
           </button>
           <button className="btn-opt">
           <IoIosLogOut className="icon"/>
                Logout
           </button>
           </footer>
        </div>
    )
    
}

export default SideBar