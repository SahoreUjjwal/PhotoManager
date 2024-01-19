import styles from "../assets/css/Album.module.css";
import logo from "../assets/image/photos.png";
export function Album(props){
    const {albums,showAlbum} = props;
    return(albums.map((album)=>(<div onClick={()=>showAlbum(albums.id)}className={styles.gridItem}>
        <img src={logo} alt="image" />
        <span>{album.name}</span>
</div>)))
}