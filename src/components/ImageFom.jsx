import { useRef, useState } from "react";
import styles from "../assets/css/Form.module.css";
export function ImageForm(props){
    const [image,setImageData] = useState({desc:"",url:""});
    const inputDesc = useRef();
    const inputUrl = useRef();
    const {addImage ,album} = props;
    function clearForm(){
        setImageData({desc:"",url:""})
    }
    return(<div className={styles.formWrapper}>
        <div className={styles.formContainer}>
            <span>Add Image to {album.name}</span>
            <form className={styles.form} onSubmit={(e)=>{addImage(e,{desc:inputDesc.current.value,url:inputUrl.current.value});clearForm();}}>
                    <input ref ={inputDesc} placeholder="Add album" className={styles.albumInput} value={image.desc} onChange={(e)=>{setImageData({desc:e.target.value,url:image.url})}} type="text" required/>
                    <input ref={inputUrl} type="text" className={styles.albumInput} placeholder="Image URL" value={image.url} onChange={(e)=>{setImageData({desc:image.desc,url:e.target.value})}} required/>
                    <button className={styles.clearButton} onClick={clearForm}>Clear</button>
                    <button className={styles.createButton} type="Submit">Add</button>
            </form>               
        </div>         
</div>)       
}   