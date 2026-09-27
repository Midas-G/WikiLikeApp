import { useState, useContext } from "react";
import ListDecor from "../Decor.jsx/ListDecor";
import { WidthContext } from "../../Providers/WidthProvider";
import useFindSpawnsForCreatures from "../../Custom Hooks/useFindSpawnsForCreature";

function MapArticle({ article }) {

    const [Hovered, setHovered] = useState(false)
    const { isLarge } = useContext(WidthContext)
    
    const CreatureID = article.title ? null : article.id

    const spawnLocations = useFindSpawnsForCreatures(CreatureID)
    
    const availableMaps = [...new Set(spawnLocations.flatMap(biome => biome.maps))].join(", ")
    const availableBiomes = spawnLocations.map(biome => biome.title).join(", ")
    const classifications = Object.entries(article.classification ?? {})


    

    return(
        <>
            <div className="flex items-center justify-center w-screen ">
                <div onMouseEnter={() => setHovered(h => true)} onMouseLeave={() => setHovered(h => false)} className={`mt-20 ${isLarge ? "px-4 w-[70vw]" : "pr-4 w-[80vw]"} ${Hovered ? "border-[var(--accent)]" : "border-[var(--shadow)]"} MapArticle z-0 relative flex flex-col min-h-[70vh] border-[2px] max-h-[300rem] pb-4 rounded-[2rem] bg-[var(--main)] `}>
                    
                    <div className={`${Hovered ? "border-[var(--accent)]" : "border-[var(--shadow)]"} ${isLarge ? "w-[30%] left-[50%] translate-x-[-50%] rounded-bl-[12px]" : "w-[70%] left-[-2px] rounded-bl-none border-l-0"} border-[2px] border-t-0 z-1 Article_wrapper items-center p-4 gap-10`}>
                        <span className={`${Hovered ? "border-[var(--accent)]" : "border-[var(--shadow)]"} ${isLarge? "rounded-bl-[12px] w-[calc(100%-20px)] " : "rounded-bl-none left-[0] w-[calc(100%-10px)]"} Article_title border-[2px] text-[clamp(1.25rem,1.75vw,4rem)] text-[var(--border)] group-hover:text-[var(--accent)] active:text-[var(--accent)] hover:text-[var(--accent)] `}>{article.id}</span>    
                    </div>

                    <div className="relative flex flex-col items-center p-4 gap-10">
                        <span className="mt-35 text-[clamp(1.5rem,1.25vw,4rem)] text-[var(--border)] active:text-[var(--accent)] hover:text-[var(--accent)] w-[clamp(50vw,25vw,20vw)]">{article.notes || article.utility.description_utility}</span>
                    </div>

                    {article.title &&
                        <ul className="flex flex-col w-fit items-start p-10 rounded-[.25rem]">
                        <li className="group text-[clamp(1rem,1vw,3rem)] text-[var(--border)] active:text-[var(--accent)] hover:text-[var(--accent)] ">
                            <ListDecor shape="diamond" size="md" />
                            Map's Difficulty: {article.difficulty}
                        </li>
                        <li className="group text-[clamp(1rem,1vw,3rem)] text-[var(--border)] active:text-[var(--accent)] hover:text-[var(--accent)] ">
                            <ListDecor shape="diamond" size="md" />
                            Related To Lore?: {article.mainstory ? "Yes" : "No"}
                        </li>
                        </ul>
                    }
                    {!article.title &&
                        <ul className="flex flex-col w-fit items-start p-10 gap-5 rounded-[.25rem]">
                            
                        <li className="group text-[clamp(1rem,1vw,3rem)] text-[var(--border)] active:text-[var(--accent)] hover:text-[var(--accent)] ">
                            <ListDecor shape="diamond" size="md" />
                            Available In These Maps: {availableMaps}
                        </li>
                        <li className="group text-[clamp(1rem,1vw,3rem)] text-[var(--border)] active:text-[var(--accent)] hover:text-[var(--accent)] ">
                            <ListDecor shape="diamond" size="md" />
                            Available In These Biomes: {availableBiomes}
                        </li>
                        <li className="group text-[clamp(1rem,1vw,3rem)] text-[var(--border)] active:text-[var(--accent)] hover:text-[var(--accent)]">
                            <ListDecor shape="diamond" size="md" />
                            Behavior:
                        </li>
                            <ul className="flex flex-col w-fit items-start pl-10 rounded-[.25rem] ">
                                {classifications.map(item => 
                                <li key={item[0]} className="group text-[clamp(1rem,1vw,3rem)] text-[var(--border)] active:text-[var(--accent)] hover:text-[var(--accent)] ">
                                    <ListDecor shape="square" size="md" />
                                    {item[0]}: {
                                        Array.isArray(item[1]) ? 
                                        item[1].join(", ") :
                                        item[1]
                                    }
                                </li>
                                )}
                            </ul>
                        </ul>
                    }

                    
                </div>
            </div>
        </>
    );
}
export default MapArticle