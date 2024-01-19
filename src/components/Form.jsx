import styles from "../assets/css/Form.module.css";

export function Form(){
    return(<div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <span>Create an album</span>
                    <form className={styles.form}>
                            <input placeholder="Add album" className={styles.albumInput} type="text" required/>
                            <button className={styles.clearButton}>Clear</button>
                            <button className={styles.createButton} type="Submit">Create</button>
                    </form>               
                </div>         
    </div>)
}