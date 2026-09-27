import { createContext, useRef, useState } from "react";

export const SettingsData = createContext()

function SettingsProvider({children}) {

    const [settingsModalState, setSettingsModalState] = useState(false)
    const SettingsButtonRef = useRef(null)
    const SettingsModalRef = useRef(null)

    return(
        <>
            <SettingsData.Provider value={{ settingsModalState, setSettingsModalState, SettingsButtonRef, SettingsModalRef}}>
                {children}
            </SettingsData.Provider>
        </>
    );
}
export default SettingsProvider