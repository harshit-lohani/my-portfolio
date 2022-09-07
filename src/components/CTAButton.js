import styles from "./CTAButton.module.css"

const CTAButton = (props) => {

    const variant = props.variant

    if(variant == "primary") {
        return (
            <div className={styles.primary}>
                {props.children}
            </div>
        );
    }
    else{
        return (
            <div className={styles.secondary}>
                
            </div>
        );
    }

}

export default CTAButton