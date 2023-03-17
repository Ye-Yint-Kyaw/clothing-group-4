import styles from "./contact.module.css";
type Props = {
  type: string,
  placeholder: string
}

const Input: React.FC <Props> = ({type, placeholder})=>{
 
  return(
    <div className={styles.inputText}>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}
export default Input;