import { useEffect } from "react";

export default function useClickOutsideHook({ref, setState}) {
    useEffect(() => {
        const refs = Array.isArray(ref) ? ref : [ref]

        function refHandler(e) {
            if (!refs.some(elementRef => elementRef.current?.contains(e.target))) {
                setState(false)
            }
        }

        document.addEventListener("pointerdown", refHandler)
        return () => {
            document.removeEventListener("pointerdown", refHandler)
        }
    }, [ref, setState])
}