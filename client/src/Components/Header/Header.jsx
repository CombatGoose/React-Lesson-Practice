import s from './header.module.scss'
import HeaderList from './HeaderList'

const Header = () => {
    const store = [
        {
            name:"NavEl1"
        },
        {
            name: "NavEl2"
        },
        {
            name: "NavEl3"
        }
    ]
    const ElCollection = store.map((el, index) => {
        return (
            <HeaderList key={index} name={el.name}/>
        )
    })
    return (
        <ul className={s.header}>
            {ElCollection}
        </ul>
    )
}

export default Header