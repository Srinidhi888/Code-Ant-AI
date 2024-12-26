import "./index.css"
import { HiOutlineCircleStack } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { FiRefreshCw } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
const Repository = () => {
    return(
        <div className="bg-inner-main">
            <div className="rep-name">
                <div >
                <h1>Repositories</h1>
                <p>33 total repositories</p>
                <div className="search-tog">
                <CiSearch className="search-icon"/>
                <input className="search-input" type="search" placeholder="Search Repositories">
                </input>
                </div>
                </div>
                <div className="name-right">
                    <button className="btn-refresh">
                    <FiRefreshCw className="icon"/>
                    Refresh All
                    </button>
                    <button className="btn-add">
                    <FaPlus className="icon"/>
                    Add Repository
                    </button>
                </div>
            </div>
            <div className="rep">
                <div className="grp-rep">
                <h4>design-system</h4>
                <p className="public-span">Public</p>
                </div>
                <div className="grp-rep">
                <p className="adjust">React <GoDotFill className="dot"/></p>
                <p ><HiOutlineCircleStack/> 7320 KB</p>
                <p>Updated 1 day ago</p>
                </div>
            </div>
            <div className="rep">
                <div className="grp-rep">
                <h4>codeant-ci-app</h4>
                <p className="public-span">Private</p>
                </div>
                <div className="grp-rep">
                <p className="adjust">Javascript
                <GoDotFill className="dot"/></p>
                <p ><HiOutlineCircleStack/> 5871 KB</p>
                <p>Updated 2 days ago</p>
                </div>
            </div>
            <div className="rep">
                <div className="grp-rep">
                <h4>analytics-dashboard</h4>
                <p className="public-span">Private</p>
                </div>
                <div className="grp-rep">
                <p className="adjust">Python
                <GoDotFill className="dot"/></p>
                <p ><HiOutlineCircleStack/> 4521 KB</p>
                <p>Updated 5 days ago</p>
                </div>
            </div>
            <div className="rep">
                <div className="grp-rep">
                <h4>mobile-app</h4>
                <p className="public-span">Public</p>
                </div>
                <div className="grp-rep">
                <p className="adjust">Swift
                <GoDotFill className="dot"/></p>
                <p ><HiOutlineCircleStack/> 3096 KB</p>
                <p>Updated 3 days ago</p>
                </div>
            </div>
            <div className="rep">
                <div className="grp-rep">
                <h4>e-commerce-platform</h4>
                <p className="public-span">Private</p>
                </div>
                <div className="grp-rep">
                <p className="adjust">Java
                <GoDotFill className="dot"/></p>
                <p ><HiOutlineCircleStack/> 6210 KB</p>
                <p>Updated 3 days ago</p>
                </div>
            </div>
           
        </div>
    )
}
export default Repository