

import React from "react";
import "./Value.css";

// import { MdOutlineArrowDropDown, MdCancel, MdAnalytics } from "react-icons/md";
// import { HiShieldCheck } from "react-icons/hi";

// const data=[
//     {
//         icon:<HiShieldCheck/>,
//         heading:"Security Guaranteed",
//         detail:"Your security is our top priority. We ensure your data and transactions are protected with the highest level of security measures."
//     },
//     {
//         icon:<MdCancel/>,
//         heading:"Prevent unstable prices",
//         detail:"We offer competitive pricing on all our properties, ensuring you get the best value for your investment."
//     },
//     {
//         icon:<MdAnalytics/>,
//         heading:"Best Price",
//         detail:"We offer competitive pricing on all our properties, ensuring you get the best value for your investment."

//     }
// ]
export default function Value() {
    return <div>
        <section className="v-wrapper">
           
                <div className="v-left">
                       <div className="hero-image-container">
            <img src="./homee.avif" alt="Dream Home" className="hero-img" />
          </div>
                </div>
                {/* right side */}
                <div className="v-right">
                    <span  className="orangeText">
                        Security Guaranteed
                    </span><span className="primaryText">
                        Your security is our top priority. We ensure your data and transactions are protected with the highest level of security measures.
                    </span><span className="secondaryText">
                        We offer competitive pricing on all our properties, ensuring you get the best value for your investment.
                    </span>
                  
              </div>
           
        </section>
    </div>;
}