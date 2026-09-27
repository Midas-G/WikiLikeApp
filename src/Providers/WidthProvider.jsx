import { createContext, useState, useEffect } from "react"
    
export const WidthContext = createContext()

function WidthProvider({children}) {


    
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024)
    const [isSmall, setIsSmall] = useState(window.innerWidth <= 450)
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    useEffect(() => {

        function HandleResize() {
            setIsLarge(window.innerWidth >= 1024)
            setIsSmall(window.innerWidth <= 450)
        }

        window.addEventListener("resize", HandleResize)
        return () => (window.removeEventListener("resize", HandleResize))
    }, [])

    return(
        <WidthContext.Provider value={{ isLarge, isSmall, isMenuOpen, setIsLarge, setIsSmall, setIsMenuOpen }} >
            {children}
        </WidthContext.Provider>
    );
}
export default WidthProvider