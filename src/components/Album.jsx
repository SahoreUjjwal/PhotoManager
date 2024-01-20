import styles from "../assets/css/Album.module.css";
import logo from "../assets/image/photos.png";
import edit from "../assets/image/edit.png";
import trash from "../assets/image/trash-bin.png";

export function Album(props){
    const {albums,showAlbum,deleteAlbum} = props;
    return(albums.map((album)=>(
        <div onClick={()=>showAlbum(album)} className={styles.gridItem}>
            <div className={styles.edit} ><img src={edit} alt="edit" /></div>
            <div className={styles.trash} onClick={(e)=>deleteAlbum(e,album.id)}><img src={trash} alt="trash" /></div>
            <img src={logo} alt="image" />
            <span>{album.name}</span>
</div>)))
}