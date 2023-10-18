import s from './button.module.scss'
import classNames from 'classnames'

const Button = (props) => {
    const styleBtn = classNames(
        s.btn,
        props.theme === "light" ? s.btn_light : s.btn_dark 
    )
    return (
        <button className={styleBtn}>{props.text}</button>
    )
}

export default Button