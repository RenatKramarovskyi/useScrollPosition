import React, {useState} from "react";

export default function useScrollPosition() {

    const [scrollPosition, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return scrollPosition;
}