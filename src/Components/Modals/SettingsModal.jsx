
import { useContext, useMemo, useState } from "react";
import { WidthContext } from "../../Providers/WidthProvider";
import { SettingsData } from "../../Providers/SettingsProvider";

import useClickOutsideHook from "../../Custom Hooks/ClickOutsideHook";
import useDebounceHook from "../../Custom Hooks/useDebounceHook";
import ThemeManager from "../../Managers/ThemeManager";

function ThemeIcon({ isDark }) {
    return isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
        </svg>
    )
}

function SettingsModal() {
    const { isLarge } = useContext(WidthContext)
    const { settingsModalState, setSettingsModalState, SettingsButtonRef, SettingsModalRef } = useContext(SettingsData)
    const [themeState, setThemeState] = useState(false)
    
    const clickOutsideRefs = useMemo(() => [SettingsModalRef, SettingsButtonRef], [SettingsModalRef, SettingsButtonRef])
    const toggledelay = useDebounceHook({ setState: setThemeState, delay: 400 })

    useClickOutsideHook({ ref: clickOutsideRefs, setState: setSettingsModalState})
    
    

    return(
        <>
            <div ref={SettingsModalRef} className={`group absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-4 flex flex-col bg-[var(--elevated)] rounded-md p-4 h-[50vh]  ${settingsModalState ? "scale-100 opacity-100 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" : "scale-0 opacity-0  transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"} ${isLarge ? "w-[60vw]" : "w-[70vw]"}`}>
                    <span className="absolute top-[-2px] left-[-2px] p-[2px] group-hover:pr-[calc(60vw-2px)] bg-[var(--accent)] transition-all duration-400 ease-out "></span>
                    <span className="absolute bottom-[-2px] right-[-2px] p-[2px] group-hover:pl-[calc(60vw-2px)] bg-[var(--accent)] transition-all duration-400 ease-out "></span>
                    <span className="absolute top-[-2px] right-[-2px] p-[2px] group-hover:pb-[calc(50vh-2px)] bg-[var(--accent)] transition-all duration-400 ease-out "></span>
                    <span className="absolute bottom-[-2px] left-[-2px] p-[2px] group-hover:pt-[calc(50vh-2px)] bg-[var(--accent)] transition-all duration-400 ease-out "></span>                
                <div onClick={toggledelay} className="flex items-center w-30 h-12 px-1 rounded-[100vw] border border-[var(--border)] active:bg-[var(--accent)] hover:bg-[var(--accent)] ">

                    
                    
                    <button className={`${themeState ? "translate-x-[calc(4.5rem-2px)] " : "tranlsate-x-0"} transition2_t flex justify-center items-center w-10 h-10 text-[var(--border)] rounded-full `}>
                        <ThemeIcon isDark={themeState} />
                    </button>

                </div>
                <button onClick={() => setSettingsModalState(false)} className="absolute top-0 right-0 m-4 text-[var(--border)] ">
                    Close
                </button>
                <ThemeManager themeState={themeState} />
            </div>
        </>
    );
}
export default SettingsModal