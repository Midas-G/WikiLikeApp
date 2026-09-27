import { useContext } from "react";


import { SearchData } from "../Providers/SearchProvider";
import MapArticle from "../Components/Articles/MapArticle";

function ArticleManager() {
    const { article } = useContext(SearchData)

    return(
        <>
            {article &&
                <MapArticle article={article} />
            }
            {!article &&
                <div className="flex w-screen h-[90vh] ">
                    <div className="flex flex-col w-screen h-[70vh] mt-10 items-center">
                        <span className="text-2xl text-[var(--border)] select-none">nothing Here</span>
                    </div>
                </div>
            }
        </>
    );
}
export default ArticleManager