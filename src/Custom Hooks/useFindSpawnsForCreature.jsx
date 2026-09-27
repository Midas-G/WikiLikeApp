import { useMemo } from "react"
import { Biomes } from "../data/Biomes"

export default function useFindSpawnsForCreatures(CreatureID) {
    return useMemo(() => {
        if (!CreatureID) return []
        
        return Biomes.filter(biome => biome.creatures.excluded.some(creature => creature !== CreatureID))
    }, [CreatureID])
}