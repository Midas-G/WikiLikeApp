import { useContext, useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import SettingsButton from "./SettingsButton";
import MenuButton from "./MenuButton";
import SideMenu from "./SideMenu";

import { WidthContext } from "../../Providers/WidthProvider";

function Nav() {

    const { isLarge, isSmall, isMenuOpen, setIsMenuOpen,  } = useContext(WidthContext)
    const [searchBarState, setSearchbarState] = useState(false)

    return(
        <>
            {isLarge &&
                <>
                    <nav className="flex items-center justify-between overflow-y-visible h-[6rem] border-b border-[var(--border)] bg-[var(--elevated)] ">
                        <div className="px-4 select-none">
                            <span className="text-[clamp(2.5rem,2vw,3rem)] text-[var(--border)] hover:text-[var(--accent)] active:text-[var(--accent)] cinzel">ARK Companion</span>
                        </div>
                        <SearchBar />
                        <SettingsButton />
                    </nav>
                </>
            }
            
            {!isLarge &&
                <>
                    <SideMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} isLarge={isLarge}/>
                    <nav className="flex z-[5] items-center justify-between overflow-y-visible h-[6rem] border-b border-[var(--border)] bg-[var(--elevated)] ">
                        {!isMenuOpen && 
                            <MenuButton setIsMenuOpen={setIsMenuOpen} searchBarState={searchBarState} isLarge={isLarge} isSmall={isSmall}/>
                        }
                        <SearchBar isLarge={isLarge} isSmall={isSmall} searchBarState={searchBarState} setSearchbarState={setSearchbarState} />
                    </nav>
                </>
            }
        </>
    );
}
export default Nav