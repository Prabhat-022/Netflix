
import React from 'react';


const HomeBanner = () => {
    return (
        <>
            <div className="homebanner">

                <h1>Unlimited movies, Tv shows and more</h1>
                <h3>Watch anywhere. Cancel anytime</h3>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>


                <div className="homebanner_btn">
                    <input type="text" placeholder='Email address' />
                    <button>Get Started <i class="fa-solid fa-chevron-right"></i></button>
                </div>

            </div>
        </>
    )
}

export default HomeBanner
