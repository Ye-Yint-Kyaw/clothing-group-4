import Formbtn from "./formbtn";
import styles  from "./contact.module.css";
const Contact= ()=>{
  return(
  
             <div className={styles.container} >
                <div className={styles.formcard}>
                      <div className={styles.formcardList}>
                        <div className={styles.formcardBlog}>
                          <h1 className={styles.title}>Reach Out To Us</h1>
                          <div className={styles.inputBox}>
                            <div className={styles.inputText}>
                              <input type="text" placeholder="FirstName" />
                              <input type="text" placeholder="LastName" />
                            </div>
                            <div className={styles.inputMail}>
                              <input type="email" placeholder="Email" />
                              <input type="password" placeholder="Password" />
                            </div>
                          </div>
                          <div className={styles.addressInput}>
                            <input type="address" placeholder="Address" />
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