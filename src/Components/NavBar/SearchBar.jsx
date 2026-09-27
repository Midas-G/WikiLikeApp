import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { SearchData } from "../../Providers/SearchProvider";
import SearchSuggestions from "./SearchSuggestions";
import useClickOutsideHook from "../../Custom Hooks/ClickOutsideHook";

function SearchBar({isLarge, isSmall, searchBarState, setSearchbarState}) {
    const SearchBarRef = useRef(null)
    const MagniGlassRef = useRef(null)
    const searchSuggestionsRef = useRef(null)
    const { searchResults, query, isFocused, setQuery, setArticle, setisFocused } = useContext(SearchData);

    const refs = useMemo(() => [SearchBarRef, MagniGlassRef, searchSuggestionsRef], [SearchBarRef, MagniGlassRef, searchSuggestionsRef])

    useClickOutsideHook({ ref: refs, setState: setisFocused,})

    return(
        <>
            {isSmall &&
                <>
                    <div className={`h-14 flex items-center relative ml-auto transition2_c`}>

                        <div>
                            <div className={`${isFocused ? "" : "bg-[var(--main)]"} ${searchBarState ? "" : "hidden"} flex sm:w-80 md:w-100 lg:w-130
                        hover:bg-[var(--accent)] active:bg-[var(--accent)]
                        rounded-[100vw] mr-2 `}>

                            <input ref={SearchBarRef} value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setisFocused(f => true)} type="text" placeholder="Search..." className="flex-1
                            text-[var(--border)] 
                            outline-none rounded-r rounded-[100vw] border-y border-l border-[var(--border)] 
                            transition1_all
                            placeholder:text-[var(--border)]/70
                            h-14 px-3 py-3" />

                            <div ref={MagniGlassRef} onClick={() => {setisFocused(f => true); SearchBarRef.current?.focus()}} className="h-14 w-14
                            text-[var(--border)] hover:bg-[var(--accent)] active:bg-[var(--accent)]
                            outline-none rounded-l rounded-[100vw] border border-[var(--border)] flex items-center justify-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                            </div>
                            </div>
                            {isFocused && searchBarState &&
                                <SearchSuggestions searchSuggestionsRef={searchSuggestionsRef} searchBarState={searchBarState} query={query} setArticle={setArticle} setisFocused={setisFocused} searchResults={searchResults}/>
                            }                                            
                        </div>

                    </div>
                    
                    <button onClick={() => setSearchbarState(s => !s)} className={`bg-[var(--main)] w-10 h-10 rounded-full align-center border border-[var(--border)] mr-2 `}></button>
                

                </>
            }
            {!isSmall &&
                <div className={`h-14 flex items-center relative ml-auto transition2_c`}>

                    <div className={`${isFocused ? "" : "bg-[var(--main)]"} flex md:w-100 lg:w-130
                    hover:bg-[var(--accent)] active:bg-[var(--accent)]
                    rounded-[100vw] mr-2 `}>

                        <input ref={SearchBarRef} value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setisFocused(f => true)} type="text" placeholder="Search..." className="flex-1
                        text-[var(--border)] 
                        outline-none rounded-r rounded-[100vw] border-y border-l border-[var(--border)] 
                        transition1_all
                        placeholder:text-[var(--border)]/70
                        h-14 px-3 py-3" />

                        <div ref={MagniGlassRef} onClick={() => {setisFocused(f => true); SearchBarRef.current?.focus()}} className="h-14 w-14
                        text-[var(--border)] hover:bg-[var(--accent)] active:bg-[var(--accent)]
                        outline-none rounded-l rounded-[100vw] border border-[var(--border)] flex items-center justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        </div>
                    </div>
                    
                    {isFocused &&
                        <SearchSuggestions searchSuggestionsRef={searchSuggestionsRef} searchBarState={searchBarState} isSmall={isSmall} query={query} setArticle={setArticle} setisFocused={setisFocused} searchResults={searchResults}/>
                    }
                </div>
            }
        </>
    );
}
export default SearchBar