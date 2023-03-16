import Formbtn from "./formbtn";
import "./contact.css";
const Contact= ()=>{
  return(
  
              <div className="container" id="contact-id">
                <div className="formcard">
                      <div className="formcard-list">
                        <div className="formcard-blog">
                          <h1 className="title">Reach Out To Us</h1>
                          <div className="input-box">
                            <div className="input-text">
                              <input type="text" placeholder="FirstName" />
                              <input type="text" placeholder="LastName" />
                            </div>
                            <div className="input-mail">
                              <input type="email" placeholder="Email" />
                              <input type="password" placeholder="Password" />
                            </div>
                          </div>
                          <div className="address-input">
                            <input type="address" placeholder="Address" />
                          </div>
                          <div className="feedback-box">
                            <textarea
                              placeholder="Type your message here"
                              id=""
                            ></textarea>
                          </div>
                          <Formbtn />
                        </div>
                      </div>
                    </div>
                  </div>

  )
}
export default Contact;