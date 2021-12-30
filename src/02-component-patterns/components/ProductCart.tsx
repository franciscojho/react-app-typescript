import styles  from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';

export const ProductCart = () => {

    const { counter, increaseBy } = useProduct(0);

    return (
        <div className={ styles.productCard }>
            <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffe Mug" />
            {/* <img className={ styles.productImg } src={ noImage } alt="No Image" /> */}
            <span className={ styles.productDescription }>Coffee Mug</span>
            <div className={ styles.buttonsContainer }>
                <button 
                    className={ styles.buttonMinus }
                    onClick={ () => increaseBy(-1) }>-</button>

                <div className={ styles.countLabel }>{ counter }</div>

                <button 
                    className={ styles.buttonAdd }
                    onClick={ () => increaseBy(1) }>+</button>
            </div>
        </div>
    )
}
