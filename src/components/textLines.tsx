import * as React from "react";
import type { PageProps } from "gatsby";
import "../styles/styles.scss";
import { animated } from '@react-spring/web'; // Animation from react-spring
//import { useScroll } from 'react-use-gesture';

const TextLines: React.FC<PageProps> = () => {

    const texts = [
        "The full story of crypto is still untold.",
        "Millions of its holders have gone unheard. We’re here to change that.",
        "Doctors.",
        "We’re here to amplify your voice.",
        " Loud and clear.",
    ];

    return (
        <div className="position-fixed w-100 h-100 d-flex align-items-center justify-content-center ">
            <animated.div>
                test
            </animated.div>
        </div>
    )

}

export default TextLines