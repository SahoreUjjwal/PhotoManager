import { useRef, useState } from "react";
import styles from "../assets/css/Form.module.css";

export function HomeForm(props){
    const inputValue = useRef();
    const [value,setValue] = useState("");
    const {addAlbum} = props;

    function clearForm(){
        setValue("");
    }
    return(<div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <span>Create an album</span>
                    <form className={styles.form} onSubmit={(e)=>{clearForm();addAlbum(e,inputValue.current.value)}}>
                            <input ref ={inputValue} placeholder="Add album" className={styles.albumInput} value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" required/>
                            <button className={styles.clearButton} onClick={clearForm}>Clear</button>
                            <button className={styles.createButton} type="Submit">Create</button>
                    </form>               
                </div>         
    </div>)
}