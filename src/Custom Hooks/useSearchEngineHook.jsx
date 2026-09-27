import { useEffect } from "react";

export default function useSearchEngineHook({ query, setState, datagiven }) {
    const datas = datagiven.flat();

    useEffect(() => {
        const searchQuery = query.toLowerCase().trim();

        if (!searchQuery) {
            setState([]);
            return;
        }

        const results = datas.filter(page =>
            page.id.toLowerCase().includes(searchQuery)
        ).sort((a, b) => {
            const aId = a.id.toLowerCase()
            const bId = b.id.toLowerCase()

            const aStarts = aId.startsWith(searchQuery)
            const bStarts = bId.startsWith(searchQuery)

            if (aStarts && !bStarts) return -1
            if (!aStarts && bStarts) return 1

            return aId.localeCompare(bId)
        })

        setState(results);
    }, [query]);
}