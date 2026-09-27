import { useContext } from "react";

function SearchSuggestions({searchBarState, searchSuggestionsRef, query, setArticle, setisFocused, searchResults}) {
    return(
        <>
            {searchResults.length > 0 &&
                <div ref={searchSuggestionsRef} className={`absolute top-[3rem] z-50 mt-5 flex flex-col rounded-md border border-[var(--border)] shadow-[0px_0px_10px_var(--shadow)] bg-[var(--elevated)] px-2 py-4`}>
                        {searchResults.slice(0, 11).map(result => (
                        <div onClick={() => {setArticle(result); setisFocused(false)}} key={result.id} className={` h-10 flex-1 rounded-md p-2 active:bg-[var(--accent)] hover:bg-[var(--accent)]`}>
                            <span className="text-[var(--border)] text-2xl">
                                {result.id}
                            </span>
                        </div>
                    ))}
                </div>
            }
            {query && searchResults.length === 0 &&
                <div ref={searchSuggestionsRef} className={` absolute top-full left-0 right-0 z-50 mt-5 flex flex-col overflow-visible rounded-md border border-[var(--border)] shadow-[0px_0px_10px_var(--shadow)] bg-[var(--elevated)] px-2 py-4`}>
                    <div className="flex-1 h-10 rounded-md p-2">
                        <span className="text-[var(--border)] text-2xl">
                            No Results...
                        </span>
                    </div>
                </div>
            }
        </>
    );
}
export default SearchSuggestions