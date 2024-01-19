import styles from "../assets/css/Body.module.css";
import { Form } from "./Form";
import { Album } from "./Album";
export function Body(){
    return(
        <div className={styles.body}>
            <Form/>
            <div className={styles.formToggle}>
                <div className={styles.albumHeading}>
                    Your albums
                </div>
                <div >
                    <button className={styles.falseButton}>Add albums</button>
                </div>
            </div>
            <div>
                <Album/>
            </div>
        </div>
    )
}