import React from 'react';
import { Link } from 'react-router-dom'
import '../Seller/vendor.css'

function vendor() {
  return (
    <>
      {/* page_1 */}
      <div className="vendor">
        <div className="grow_business">
          <h1 style={{ fontSize: "3.5rem" }}>Use Budget Trip Vendor <br />Services to   help grow your <br /> <i class="fa-solid fa-arrow-up-right-dots"></i> Business</h1>
          <p>Vendor Services solutions to help you reach and engage millions of Buget Trip travellers, <br /> customers at every stage of their journey <i class="fa-solid fa-people-group"></i></p>
          <Link to="/vendor_register"><button className="btn start_now"> <strong> Start Now</strong></button></Link>

        </div>
      </div>

      {/* page_2 */}
      <div className="services">
        <h1 style={{ fontSize: "2.5rem" }}>Why Choose Budget Trip ?</h1>
        <div className='vertical'></div>
        <div className="vendor_services">
          <div className="why_choose_bt">
            <h1><i class="fa-solid fa-indian-rupee-sign"></i></h1>
            <h5>Secure timely payments</h5>
            <p>Funds are deposited directly to your bank account every 7 days, including for Pay on Delivery order.</p>
          </div>

          <div className="why_choose_bt">
            <h1><i class="fa-solid fa-screwdriver-wrench"></i></h1>
            <h5>Ease of starting</h5>
            <p>From product photography to hassle free delivery & returns management, Amazon has a solution for you.</p>
          </div>

          <div className="why_choose_bt">
            <h1><i class="fa-solid fa-globe"></i></h1>
            <h5>Sell to customers worldwide</h5>
            <p>Sign up for Amazon Global Selling & reach customers in upto 200+ countries.</p>
          </div>

          <div className="why_choose_bt">
            <h1><i class="fa-solid fa-mobile"></i></h1>
            <h5>Manage business on the go</h5>
            <p>With the Amazon Seller App you can manage your business, solve issues, and respond to customers – anywhere, anytime.</p>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div className="services">
        <h1 style={{ fontSize: "2.5rem" }}>How To Sell On Budget Trip ?</h1>
          <div className='vertical'></div>
        <div className="vendor_services_steps">
          
            <div className="steps_for_sell">
              <h1><i class="fa-solid fa-user"></i></h1>
              <h5>Create an Account</h5>
              <p>Create an account in 3 simple steps. All you need is your GST, PAN & an active bank account details.</p>
              
            </div>

            <div className="steps_for_sell">
              <h1><i class="fa-solid fa-desktop"></i></h1>
              <h5>List, store & deliver</h5>
              <p>Complete listing your products & choose from one of the many options for storage, packaging & delivery.</p>
              
            </div>

            <div className="steps_for_sell">
              <h1><i class="fa-solid fa-users-between-lines"></i></h1>
              <h5>Monitor sales & track growth</h5>
              <p>Easily track customer orders, sales growth & payment settlements on our centralized dashboard available on desktop & app.</p>
              
            </div>

            <div className="steps_for_sell">
              <h1><i class="fa-solid fa-universal-access"></i></h1>
              <h5>Get paid for your sales</h5>
              <p>Once you become a verified Amazon.in seller, payments are deposited safely to your bank account every 7 days, even for Pay on Delivery orders.</p>
              
            </div>

          
        </div>
      </div>
    </>
  )
}

export default vendor
