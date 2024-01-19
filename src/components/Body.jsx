import styles from "../assets/css/Body.module.css";
import { Form } from "./Form";
import { Album } from "./Album";
import { useEffect, useState } from "react";
import {db} from "../config/firestore";
import { collection, addDoc ,onSnapshot } from "firebase/firestore";

export function Body(){
    const [showForm,setShowform] = useState(false);
    const [albums,setAlbums] = useState(null);
    const [album,setAlbum] = useState(null);
    useEffect(()=>{
        onSnapshot(collection(db, "albums"), (querySnapshot) => {
            const albums = [];
            querySnapshot.forEach((doc) => {
                albums.push(doc.data());
            });
            setAlbums(albums);
          });
    })

    function toggleForm(){
        setShowform(!showForm);
    }
    async function addAlbum(e,name){
        console.log(name);
            e.preventDefault();
            await addDoc(collection(db, "albums"), {
            name: name
          });

    }
    function showAlbum(id){
        setAlbum(id);
    }

    return(
        <div className={styles.body}>
            {showForm?<Form addAlbum={addAlbum}/>:null}
            <div className={styles.formToggle}>
                <div className={styles.albumHeading}>
                    Your albums
                </div>
                <div>
                    <button onClick={toggleForm} className={showForm?styles.trueButton:styles.falseButton}>{showForm?"Cancel":"Add albums"}</button>
                </div>
            </div>
            <div className={styles.albumContainer}>
                {albums?<Album albums={albums} showAlbum={showAlbum}/>:null}
            </div>
        </div>)
}