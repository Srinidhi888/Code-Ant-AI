import "./index.css"
import { Link } from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa6";
import { AiFillPieChart } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Component } from "react";
import { IoKeyOutline } from "react-icons/io5";
class LoginPage extends Component {
    state = {isActive: true}
    onBtn = () => {
            this.setState(prevState => ({isActive: !prevState.isActive}))
        }
    render(){
    const {isActive} = this.state
    const btnAlt1 = isActive ? "alt-col" : ""
    const btnAlt2 = isActive ? "" : "alt-col"
    const onChange1 = (
    <div>
        <Link className="link" to="/home">
        <div class="btn-bg-1">
            <button type="button" className="btn-sign">
            <FaGithub className="re-ic"/> Sign in with GitHub
            </button>
        </div>
        </Link>
        <Link className="link" to="/home">
    <div class="btn-bg-1">
        <button type="button" className="btn-sign">
        <img alt="logo" className="bit-buc" src="https://percy.io/images/marketing/Copy_of_changelog_images.png"/> Sign in with BitBucket
        </button>
    </div>
    </Link>
    <Link className="link" to="/home">
    <div class="btn-bg-1">
        <button type="button" className="btn-sign">
        <img alt="logo"  className="git-lab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpBZBPyUPZZhVBPyhZS2NmGBjEmPEmcTm1A&s"/> Sign in with Azure Devops
        </button>
    </div>
    </Link>
    <Link className="link" to="/home">
    <div class="btn-bg-1">
        <button type="button" className="btn-sign">
        <img alt="logo" className="git-lab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVr6Z7ha66sCbFI0SVewZXTqCm3RzzIYQLng&s"/> Sign in with GitLab
        </button>
    </div>
    </Link>
    </div>
    )
    const onChange2 = (
        <div>
            <Link className="link" to="/home">
            <div class="btn-bg-1">
        <button type="button" className="btn-sign">
        <img alt="logo" className="git-lab" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVr6Z7ha66sCbFI0SVewZXTqCm3RzzIYQLng&s"/> Self Hosted GitLab
        </button>
    </div>
    </Link>
    <Link className="link" to="/home">
    <div class="btn-bg-1">
            <button type="button" className="btn-sign">
            <IoKeyOutline className="re-ic"/> Sign in with SSO
            </button>
        </div>
        </Link>
        </div>
    )
   
    return(
        <div className="login-box">
            <div className="left-side">
                <div className="img-left">
                <img alt="logo" className="logo-login" src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"/>
                </div>
                <div className="ento">
                    <div className="bg-inner-login">
                    <div className="bg-login">
                        <img alt="logo" className="login-logo" src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"/>
                        <h3>AI to Detect & Autofix Bad Code</h3>
                        </div>
                        <hr/>
                        <div className="all-right-login">
                        <div className="bg-all">
                            <h3>30+</h3>
                            <p>Language Support</p>
                        </div>
                        <div className="bg-all">
                            <h3>10K+</h3>
                            <p>Developers</p>
                        </div>
                        <div className="bg-all">
                            <h3>100K+</h3>
                            <p>Hours Saved</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-issue">
                        <div className="issue-right">
                    <AiFillPieChart className="pie"/>
                    <div >
                    <FaArrowUp className="colo"/>
                    <span>14%</span>
                    <p>This Week</p>
                    </div>
                    </div>
                        <h5>Issues Fixed</h5>
                        <h2>500K+</h2>
                       
                    </div>
            </div>
            <div className="right-side">
                <div className="signin">
                <img alt="logo" className="logo-login-1" src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww"/>
                <h2>Welcome to CodeAnt AI</h2>
                <div className="div-cen">
                <div className="btn-bg">
                    <button type="button" onClick={this.onBtn} className={`btn-sh ${btnAlt1}`}>SAAS</button>
                    <button type="button" className={`btn-sh ${btnAlt2}`} onClick={this.onBtn}>Self Hosted</button>
                </div>
                </div>
                    <hr className="ln"/>
                    {isActive ? onChange1 : onChange2}
                </div>
            
                <p>By signing up you agree to the <b>Privacy Policy.</b></p>
            </div>
        </div>
    )
}
}

export default LoginPage