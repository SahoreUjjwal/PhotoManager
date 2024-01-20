import styles from "../assets/css/Navbar.module.css"

export function Navbar(){
    return(<div className={styles.container}>
        <img src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png" alt="photo"/>   
        <span> PhotoFolio</span>
    </div>)
}