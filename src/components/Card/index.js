import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from "react-router";

function Card({ id, titulo, capa }) {
    const { favoritos, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favoritos.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;
    const url = `/${id}`

    return (
        <div className={styles.container}>
            <Link to={url}>
                <img src={capa} alt={titulo} className={styles.capa}></img>
            </Link>
            <h2>{titulo}</h2>

            <img src={icone}
                alt='Favoritar filme'
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}></img>

        </div>
    )
}

export default Card;