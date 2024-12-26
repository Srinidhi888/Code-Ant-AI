import "./index.css"
import SideBar from "../SideBar"
import Repository from "../Repository"
const HomePage = () => {
    return(
        <div className="main-bg">
        <SideBar/>
        <Repository/>
        </div>
    )
}

export default HomePage