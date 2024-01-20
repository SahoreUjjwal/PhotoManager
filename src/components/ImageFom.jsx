import { useEffect, useRef, useState } from "react";
import styles from "../assets/css/Form.module.css";
export function ImageForm(props){
    const [image,setImageData] = useState({desc:"",url:""});
    const [index,setIndex] = useState(null);
    let inputDesc = useRef();
    let inputUrl = useRef();
    const {addImage ,album,editFlag,updateImage} = props;
    function clearForm(){
        setImageData({desc:"",url:""})
    }
    useEffect(()=>{
        if(localStorage.getItem("editIndex")!==null)
            {
                setIndex(parseInt(localStorage.getItem("editIndex")));
                album.images.forEach((image,i)=>{if(i==index){
                    setImageData({desc:image.desc,url:image.url});
                }})
               
            }
        
    },[index])

    function addUpdateImages(e,data){
        e.preventDefault();
        if(editFlag){
            console.log(index);
            updateImage(data,index);
        }
        else
            addImage(e,data);
        clearForm();
    }
    return(<div className={styles.formWrapper}>
        <div className={styles.formContainer}>
            <span>Add Image to {album.name}</span>
            <form className={styles.form} onSubmit={(e)=>{addUpdateImages(e,{desc:inputDesc.current.value,url:inputUrl.current.value})}}>
                    <input ref ={inputDesc} placeholder="Add album" className={styles.albumInput} value={image.desc} onChange={(e)=>{setImageData({desc:e.target.value,url:image.url})}} type="text" required/>
                    <input ref={inputUrl} type="text" className={styles.albumInput} placeholder="Image URL" value={image.url} onChange={(e)=>{setImageData({desc:image.desc,url:e.target.value})}} required/>
                    <button className={styles.clearButton} onClick={clearForm}>Clear</button>
                    <button className={styles.createButton} type="Submit">{editFlag?"Update":"Add"}</button>
            </form>               
        </div>         
</div>)       
}   