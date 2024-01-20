import { useEffect,useState } from "react";
import styles from "../assets/css/AlbumPage.module.css"
import warning from "../assets/image/warning.png";
import edit from "../assets/image/edit.png";
import trash from "../assets/image/trash-bin.png";

export function AlbumsPage(props){
        const [albumData,setAlbumData] = useState(null);
        const {albums,id,deleteImage,editImage} =props;
        useEffect(()=>{
            albums.forEach((album)=>{if(album.id==id){
                    setAlbumData(album);
            }})
        },[albums])
        return (<>
            {albumData?albumData.images.map((image,index)=>(<div key={index} className={styles.gridItem}>
            <div className={styles.edit} onClick={(e)=>{editImage(e,index)}}><img src={edit} alt="edit" /></div>
            <div className={styles.trash} onClick={(e)=>deleteImage(e,index)}><img src={trash}  alt="trash" /></div>
            <img src={image.url} alt="image" onError={({ currentTarget }) => {
                                                                console.log(currentTarget);
                                                                currentTarget.onerror = null; // prevents looping
                                                                currentTarget.src=warning;
                                                            }}/>
            <span>{image.desc}</span>
            </div>)):null}
        </>
    )
}