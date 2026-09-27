import { useRef } from "react"

export default function useDebounceHook({setState , delay}) {
    const lock = useRef(false)
    function debounce() {
        if (lock.current) return
        lock.current = true
        setState(s => !s)

        setTimeout(() => {
            lock.current = false
        }, delay)
    }
    return debounce
}