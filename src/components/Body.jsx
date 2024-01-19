import styles from "../assets/css/Body.module.css";
import { Form } from "./Form";
export function Body(){
    return(
        <div className={styles.body}>
            <Form/>
            <div>
                <div>
                    Your albums
                </div>
                <div>
                    <button>Add albums</button>
                </div>
            </div>
            <div>
                //render all the documents here 
            </div>
        </div>
    )
}