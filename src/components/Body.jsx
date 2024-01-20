import styles from "../assets/css/Body.module.css";
import { HomeForm } from "./HomeForm";
import { Album } from "./Album";
import { useEffect, useState } from "react";
import {db} from "../config/firestore";
import { collection, addDoc ,onSnapshot,setDoc,doc ,deleteDoc} from "firebase/firestore";
import { AlbumsPage } from "./AlbumsPage";
import backImage from "../assets/image/back.png";
import { ImageForm } from "./ImageFom";

export function Body(){
    const [showForm,setShowform] = useState(false);
    const [albums,setAlbums] = useState(null);
    const [album,setAlbum] = useState(null);
    const [albumForm,setAlbumForm] = useState(false);
    const [editFlag,setEditFlag] = useState(false);

    useEffect(()=>{
        onSnapshot(collection(db, "albums"), (querySnapshot) => {
            const albums = [];
            querySnapshot.forEach((doc) => {
                albums.push(doc.data());
            });
            setAlbums(albums);
          });
    },[])
    
    async function addImage(e,image){
        e.preventDefault();
        console.log(album.id,image);
        await setDoc(doc(db, "albums", album.id), {
               id:album.id,
               name:album.name,
               images:[{desc:image.desc,url:image.url},...album.images]
          });
    }
    async function updateImage(data,index){
        setEditFlag(false);
        const tempAlbum= album;
        const tempAlbumImages = album.images;
        tempAlbumImages.forEach((image,i)=>{if(i==index){
            image.desc=data.desc,
            image.url=data.url
        }})
        tempAlbum.images=tempAlbumImages;
        await setDoc(doc(db,"albums",album.id),tempAlbum);
        
    }

    function toggleHomeForm(){
        setShowform(!showForm);
        setAlbumForm(false);
    }
    function toggleAlbumForm(){
        localStorage.clear();
        if(editFlag){
            setEditFlag(false);
            setAlbumForm(false);
        }else{
            setAlbumForm(!albumForm);
        }

    }

    async function addAlbum(e,name){
            e.preventDefault();
            const albumref = doc(collection(db,"albums"));
            await setDoc(albumref, {
            id:albumref.id,
            name: name,
            images:[]
          });
    }
    function showAlbum(album){
        setAlbum(album);
    }

    async function deleteAlbum(e,id){
        e.stopPropagation();
        await deleteDoc(doc(db, "albums", id));
        setEditFlag(false);
    }
    async function deleteImage(e,index){
        e.stopPropagation();
        const tempAlbum =album;
        const tempAlbumImages = album.images.filter((image,i)=>{i!==index});
        tempAlbum.images=tempAlbumImages;
        console.log(tempAlbum);
        await setDoc(doc(db, "albums", album.id), tempAlbum);
    }
    function editImage(e,i)
        {
            e.preventDefault();
            setEditFlag(true);
            localStorage.setItem("editIndex",i);
        }


    return(
        <div className={styles.body}>
            {showForm?<HomeForm addAlbum={addAlbum}/>:albumForm||editFlag?<ImageForm addImage={addImage} album={album} editFlag={editFlag} updateImage={updateImage}/>:null}
            <div className={styles.formToggle}>
                <div className={styles.albumHeading}>
                    {album?(
                        <>
                            <div onClick={()=>{setAlbum(null);setShowform(false);setAlbumForm(false)}} className={styles.backImageContainer}>
                                <img src={backImage} alt="hello"/>
                            </div>
                            <span>
                                Images in {album.name}
                            </span>
                        </>
                          
                    ):"Your albums"}
                </div>
                <div>
                    {album?<button onClick={toggleAlbumForm} className={albumForm||editFlag?styles.trueButton:styles.falseButton}>{albumForm||editFlag?"Cancel":"Add Image"}</button>:<button onClick={toggleHomeForm} className={showForm?styles.trueButton:styles.falseButton}>{showForm?"Cancel":"Add albums"}</button>}
                    
                </div>
            </div>
            <div className={styles.albumContainer}>
                {album?<AlbumsPage id={album.id} albums={albums} editImage={editImage} deleteImage={deleteImage}/>:albums?<Album albums={albums} showAlbum={showAlbum} deleteAlbum={deleteAlbum}/>:null}
            </div>
        </div>)
        }