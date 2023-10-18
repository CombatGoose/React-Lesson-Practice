import s from './headerList.module.scss'

const HeaderList = (props) => {
    return (
        <li className={s.list}>
            <p className={s.list_element}>{props.name}</p>
        </li>
    )
}

export default HeaderList