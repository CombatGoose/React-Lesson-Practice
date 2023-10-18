import ProductsItem from './ProductsItem'
import s from './productsList.module.scss'

const ProductsList = () => {
    const store = [
        {
            name:"Gold Nokia 3310",
            price: "100000$"
        },
        {
            name: "Samsung TV",
            price: "1000$"
        },
        {
            name: "Asus ROG Strix G",
            price: "800$"
        }
    ]

    const ProductsCollection = store.map((el, index) => {
        return (
            <ProductsItem key={index} name={el.name} price={el.price}/>
        )
    })

    return (
        <ul className={s.list}>
            {ProductsCollection}
        </ul>
    )
}

export default ProductsList