
import logo from '../assets/netflix.png';
import { useNavigate, Link } from "react-router-dom";
// import banner from '../assets/banner.jpg'; 




const Header = () => {
    const navigate = useNavigate();

    const singinHandler = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    return (
        <>
            <div className="header">

                <div className="header_logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header_btn">

                    <select >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Japani">Japani</option>
                        <option value="Korean">Korean</option>
                    </select>
                    <button onClick={singinHandler}>Sing in</button>
                </div>
            </div>
        </>
    )



}
export default Header;


