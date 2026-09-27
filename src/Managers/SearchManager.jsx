import { useContext, useEffect, useMemo } from "react";

import { Maps } from "../data/Maps.js"
import { Creatures } from "../data/Creatures.js";
import { SearchData } from "../Providers/SearchProvider";
import useSearchEngineHook from "../Custom Hooks/useSearchEngineHook.jsx";

function SearchManager() {

    const { query, setSearchResults } = useContext(SearchData);
    

    useSearchEngineHook({ query: query, setState: setSearchResults, datagiven: [Maps, Creatures]})
}
export default SearchManager