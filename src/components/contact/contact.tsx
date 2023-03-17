import Formbtn from "./formbtn";
import styles  from "./contact.module.css";
import Input from "./contactinput";
const Contact= ()=>{
  return(
  
             <div className={styles.container} >
                <div className={styles.formcard}>
                      <div className={styles.formcardList}>
                        <div className={styles.formcardBlog}>
                          <h1 className={styles.title}>Reach Out To Us</h1>
                          <div className={styles.inputBox}>
                            <div className={styles.inputWrap}>
                              <Input type="text" placeholder="First name..."/>
                              <Input type="text" placeholder="LastName..." />
                            </div>
                            <div className={styles.inputWrap}>
                              <Input type="email" placeholder="Email..."/>
                              <Input type="tel" placeholder="Phone Number..." />
                            </div>
                          </div>
                          <div className={styles.feedbackBox}>
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