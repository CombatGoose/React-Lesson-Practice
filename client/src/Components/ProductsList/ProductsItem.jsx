import Button from '../Button/Button'
import s from './productsItem.module.scss'

const ProductsItem = (props) => {
    return (
        <li className={s.list_item}>
            <p className={s.list_item_name}>{props.name}</p>
            <p className={s.list_item_price}>{props.price}</p>
            <Button theme="dark" text="Buy"/>
        </li>
    )
}

export default ProductsItem