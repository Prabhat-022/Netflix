import React from 'react'
import { useNavigate, Link } from "react-router-dom";

const SingUp = () => {

    const navigate = useNavigate();

    const clickhandle = (e) => {
        e.preventDefault();
        navigate("/Login")

    }
    const Submithandle = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    }
    return (
        <>
            <div className="login">
                <div className="login_wrap">
                    <h2>Sing Up</h2>
                    <div className="login_input">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email or phone number" />
                        <input type="text" placeholder="Password" />
                    </div>
                    <Link To='/'>
                        <button onClick={Submithandle}>Sing Up</button>
                    </Link>
                    <div className="login_info">
                        <div className="login_checkbox">
                            <input type="checkbox" />

                            <p>Remember me</p>
                        </div>
                        <p>Need help?</p>
                    </div>
                    <div className="login_discriptions">
                        <h3>New to Netflix? <Link To="/"><span onClick={clickhandle}>Sing in now.</span></Link> </h3>
                        <p>Sign in is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingUp
