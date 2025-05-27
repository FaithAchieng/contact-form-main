
function ContactForm(){
  

 return(
    <div className='container'>
        <div className='main-card'>
                    
                    <h1>Contact Us</h1> 
                    <form action=""> 
            <div className="container-2 ">
                        
  <label className="fname">First Name<span className='asterix'>*</span>  </label>
  <label className="lname">Last Name <span className='asterix'>*</span></label>

  <input type="text" className="fname-input" id="fname-input" />
  <input type="text" className="lname-input"  />

  <label className="email-label">Email Address  <span className='asterix'>*</span></label>
  <input type="email" className="email-input"  />

  <label className="query-label">Query Type  <span className='asterix'>*</span></label>
  <div className="radio1">
    <input type="radio" id="general" name="query" />
    <label htmlFor="general">General Enquiry</label>
  </div>
  <div className="radio2">
    <input type="radio" id="support" name="query" />
    <label htmlFor="support">Support Request</label>
  </div>

  <label className="message-label">Message  <span className='asterix'>*</span></label>
  <input className="message-textarea"></input>

  <div className="checkbox">
    <input type="checkbox" id="consent" />
    <label htmlFor="consent">I consent to being contacted by the team  <span className='asterix'>*</span></label>
  </div>

  <button className="submit" >Submit</button>


            </div>
                
                </form> 

                {/* Message Sent!
                Thanks for completing the form. We'll be in touch soon! */}
                
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                    Coded by <a href="#">Faith Achieng</a>.
                </div>

        </div>

    </div>
 )
}
export default ContactForm