function ContactForm() {
  function handleSubmission(event) {
    event.preventDefault();

    const firstname = document.getElementById("fname-input");
    const firstnameError = document.getElementById("fname-error");
    const lastname = document.getElementById("lname-input");
    const lastnameError = document.getElementById("lname-error");
    const email = document.querySelector(".email-input");
    const emailError = document.querySelector(".email-error");
    const queryGeneral = document.getElementById("general");
    const querySupport = document.getElementById("support");
    const queryError = document.querySelector(".query-error");
    const message = document.querySelector(".message-textarea");
    const messageError = document.querySelector(".message-error");
    const consent = document.getElementById("consent");
    const consentError = document.querySelector(".consent-error");
    const fnameInput=document.querySelector(".fname-input");
    const lnameInput=document.querySelector(".lname-input");
    const emailInput=document.querySelector(".email-input");
    const messageTextarea=document.querySelector(".message-textarea")

    if (firstname.value.trim() === "") {
      firstnameError.style.display = "block";
      fnameInput.style.border="1px solid hsl(0, 66%, 54%)"
    } else {
      firstnameError.style.display = "none";
       fnameInput.style.border="1px solid hsl(186, 15%, 59%)"
      
    }

    if (lastname.value.trim() === "") {
      lastnameError.style.display = "block";
      lnameInput.style.border="1px solid hsl(0, 66%, 54%)"
    } else {
      lastnameError.style.display = "none";
      lnameInput.style.border="1px solid hsl(186, 15%, 59%)"
    }

    if (!email.checkValidity()) {
      emailError.style.display = "block";
      emailInput.style.border="1px solid hsl(0, 66%, 54%)"
    } else {
      emailError.style.display = "none";
      emailInput.style.border="1px solid hsl(186, 15%, 59%)"
    }

    if (!queryGeneral.checked && !querySupport.checked) {
      queryError.style.display = "block";
    } else {
      queryError.style.display = "none";
    }

    if (message.value.trim() === "") {
      messageError.style.display = "block";
      messageTextarea.style.border="1px solid hsl(0, 66%, 54%)"
      
    } else {
      messageError.style.display = "none";
      messageTextarea.style.border="1px solid hsl(186, 15%, 59%)"
    }

    if (!consent.checked) {
      consentError.style.display = "block";
    } else {
      consentError.style.display = "none";
    }
  }

  return (
    <div className="container">
      <div className="main-card">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmission}>
          <div className="container-2">
            <label className="fname">
              First Name<span className="asterix">*</span>
            </label>
            <label className="lname">
              Last Name <span className="asterix">*</span>
            </label>
            <div className="fname-error" id="fname-error">
              This field is required
            </div>
            <div className="lname-error" id="lname-error">
              This field is required
            </div>

            <input type="text" className="fname-input" id="fname-input" />
            <input type="text" className="lname-input" id="lname-input" />

            <label className="email-label">
              Email Address <span className="asterix">*</span>
            </label>
            <input type="email" className="email-input" />
            <div className="email-error">Please enter a valid email address</div>

            <label className="query-label">
              Query Type <span className="asterix">*</span>
            </label>
            <div className="radio1">
              <input type="radio" id="general" name="query" />
              <label htmlFor="general">General Enquiry</label>
            </div>
            <div className="radio2">
              <input type="radio" id="support" name="query" />
              <label htmlFor="support">Support Request</label>
            </div>
            <div className="query-error">Please select a query type</div>

            <label className="message-label">
              Message <span className="asterix">*</span>
            </label>
            <textarea className="message-textarea" />
            <div className="message-error">This field is required</div>

            <div className="checkbox">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">
                I consent to being contacted by the team{" "}
                <span className="asterix">*</span>
              </label>
            </div>
            <div className="consent-error">
              To submit this form, please consent to being contacted
            </div>

            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Faith Achieng</a>.
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
