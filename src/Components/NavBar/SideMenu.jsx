

import { useEffect, useRef, useContext } from "react"
import SettingsButton from "./SettingsButton"
import useClickOutsideHook from "../../Custom Hooks/ClickOutsideHook";

import { SettingsData } from "../../Providers/SettingsProvider"

function SideMenu({ isMenuOpen, setIsMenuOpen}) {
    const SideMenuRef = useRef(null)
    const { SettingsModalRef } = useContext(SettingsData)

    useClickOutsideHook({ ref:[SideMenuRef, SettingsModalRef], setState:setIsMenuOpen})

    return(
        <>
            <aside ref={SideMenuRef} className={`${ isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"} transition1_t fixed z-3 left-0 top-0 w-[clamp(6rem,25vw,50rem)] h-screen gap-5 bg-[var(--elevated)] border-r border-[var(--border)] `}>
                <div className="flex items-center h-[6rem] pl-2 border-b border-[var(--border)] ">
                    <div className="p-2 text-[var(--border)] hover:text-[var(--accent)] active:text-[var(--accent)]">
                        <svg onClick={() => setIsMenuOpen(false)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
                    </div>
                </div>
                <div className="flex items-center">
                    <SettingsButton />
                </div>
            </aside>
        </>
    )
}
export default SideMenu