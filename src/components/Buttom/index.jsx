import  './index.scss'

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...othenProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...othenProps}> {children}</button>
    )
}

export default  Button