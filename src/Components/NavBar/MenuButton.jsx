

function MenuButton({ setIsMenuOpen, searchBarState, isSmall }) {
    return(
        <>
        {isSmall && !searchBarState &&
            <div onClick={() => setIsMenuOpen(m => !m)} 
            className={`px-4 hover:text-[var(--accent)] active:text-[var(--accent)] transition2_c text-[var(--border)]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </div>           
        }
        {!isSmall &&
            <div onClick={() => setIsMenuOpen(m => !m)} 
            className={`px-4 hover:text-[var(--accent)] active:text-[var(--accent)] transition2_c text-[var(--border)]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </div>    
        }
        </>
    );
}
export default MenuButton