import { animateScroll } from 'react-scroll';
import styles from "./Logo.module.css";

function Logo() {
    const options = {
        duration: 500,
        smooth: "easeInOutQuint",
    };

    const handleScrollToTop = () => {
        animateScroll.scrollToTop(options);
    };

    return (
        <div className={styles.logo} onClick={handleScrollToTop}>
            Zion<span className={styles.highlight}>B</span>log
        </div>
    );
}

export default Logo;
