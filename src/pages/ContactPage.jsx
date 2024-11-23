import NavBar from "../components/NavBar"

function ContactPage() {
  return (
    <>
      <NavBar/>
      <div id="content">
        <div className="contact-page-container">
          <div className="contact-page-box">
            <h2 className="contact-page-heading">Opening Hours</h2>
            <div className="contact-page-text">Sunday - Thursday: 9 am to 11 pm</div>
          </div>
          <div className="contact-page-box">
            <h2 className="contact-page-heading">Contact Us</h2>
            <div className="contact-page-text">Phone: 123-456-7890</div>
            <div className="contact-page-text">Email: restaurant@example.com</div>
            <div className="contact-page-text">Address: 123 Ay Res St, ABC City</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage