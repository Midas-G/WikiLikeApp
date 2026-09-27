import { createContext, useEffect, useState } from "react";

export const SearchData = createContext()

function SearchProvider({children}) {
    
    const [searchResults, setSearchResults] = useState([])
    const [isFocused, setisFocused] = useState(false)
    const [query, setQuery] = useState("");
    const [article, setArticle] = useState(null)

    return(
        <>
            <SearchData.Provider value={{ 
                query,
                searchResults, 
                article, 
                isFocused, 
                setQuery, 
                setSearchResults, 
                setArticle,
                setisFocused, }}>

                {children}

            </SearchData.Provider>
        </>
    );
}
export default SearchProvider