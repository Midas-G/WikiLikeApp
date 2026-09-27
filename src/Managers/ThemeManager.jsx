import { useEffect } from "react"




function ThemeManager({ themeState }){
    useEffect(() => {
        if (!themeState) {
            document.documentElement.style.setProperty("--border", "hsl(0, 0%, 100%)")
            document.documentElement.style.setProperty("--main", "hsla(0, 0%, 0%, .6)")
            document.documentElement.style.setProperty("--elevated", "hsl(0, 0%, 5%)")
            document.documentElement.style.setProperty("--shadow", "hsla(0, 0%, 100%, .3)")
            document.documentElement.style.setProperty("--accent", "hsl(344, 53%, 40%)")
            document.documentElement.style.setProperty("--background", `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'100%25'%20height%3D'100%25'%3E%3Cdefs%3E%3Cpattern%20id%3D'a'%20patternUnits%3D'userSpaceOnUse'%20width%3D'65.5'%20height%3D'55.2'%20patternTransform%3D'scale(1)%20rotate(45)'%3E%3Crect%20x%3D'0'%20y%3D'0'%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23121212'%2F%3E%3Cpath%20d%3D'M0%2021L32.7-4.9%2065.5%2021V.1L32.7-25.6%200%20.1zm0%2030.6l28-22-8.3-6.5L0%2038.1zm45.8-28.5l-8.4%206.5%2028.1%2022V38.1zM0%2076.3l32.7-26%2032.8%2026v-21L32.7%2029.6%200%2055.3z'%20%20stroke-width%3D'0.5'%20stroke%3D'none'%20fill%3D'%23000000'%2F%3E%3Cpath%20d%3D'M26.4%203.9L13.2%2014.3l19.5%2015.3%2019.5-15.3L39.1%203.9l-6.4%204.9z'%20%20stroke-width%3D'0.5'%20stroke%3D'none'%20fill%3D'%23000000'%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D'800%25'%20height%3D'800%25'%20transform%3D'translate(0%2C0)'%20fill%3D'url(%23a)'%2F%3E%3C%2Fsvg%3E")`)
        }
        else if (themeState) {
            document.documentElement.style.setProperty("--border", "hsl(0, 0%, 0%)")
            document.documentElement.style.setProperty("--main", "hsla(0, 0%, 100%, .5)")
            document.documentElement.style.setProperty("--elevated", "hsl(0, 0%, 100%)")
            document.documentElement.style.setProperty("--shadow", "hsla(0, 0%, 0%, .3)")
            document.documentElement.style.setProperty("--accent", "hsl(344, 71%, 50%)")
            document.documentElement.style.setProperty("--background", `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'100%25'%20height%3D'100%25'%3E%3Cdefs%3E%3Cpattern%20id%3D'a'%20patternUnits%3D'userSpaceOnUse'%20width%3D'65.5'%20height%3D'55.2'%20patternTransform%3D'scale(1)%20rotate(45)'%3E%3Crect%20x%3D'0'%20y%3D'0'%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23cccccc'%2F%3E%3Cpath%20d%3D'M0%2021L32.7-4.9%2065.5%2021V.1L32.7-25.6%200%20.1zm0%2030.6l28-22-8.3-6.5L0%2038.1zm45.8-28.5l-8.4%206.5%2028.1%2022V38.1zM0%2076.3l32.7-26%2032.8%2026v-21L32.7%2029.6%200%2055.3z'%20%20stroke-width%3D'0.5'%20stroke%3D'none'%20fill%3D'%23e6e6e6'%2F%3E%3Cpath%20d%3D'M26.4%203.9L13.2%2014.3l19.5%2015.3%2019.5-15.3L39.1%203.9l-6.4%204.9z'%20%20stroke-width%3D'0.5'%20stroke%3D'none'%20fill%3D'%23e6e6e6'%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D'800%25'%20height%3D'800%25'%20transform%3D'translate(0%2C0)'%20fill%3D'url(%23a)'%2F%3E%3C%2Fsvg%3E")`)
        }
    }, [themeState])
}
export default ThemeManager