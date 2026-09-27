import { Maps } from "./Maps";

export const Creatures = [
    {
        id: "rex",

        identity: {
            Cname: "Rex",
            image: "/creatures/rex.png",
            variants: ["Normal", "Tek", "X", "R"],
            tags: ["combat", "boss-mount", "large"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground"],
            category: ["regular", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Powerful combat mount and one of the primary creatures used for boss fights.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["boss fights", "combat", "general travel"]
        }
    },

    {
        id: "raptor",

        identity: {
            Cname: "Raptor",
            image: "/creatures/raptor.png",
            variants: ["Normal", "X", "R"],
            tags: ["early-game", "combat", "pack"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground"],
            category: ["regular", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Fast early-game carnivore that is useful for combat and general exploration.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["early-game combat", "travel", "pack combat"]
        }
    },

    {
        id: "triceratops",

        identity: {
            Cname: "Triceratops",
            image: "/creatures/triceratops.png",
            variants: ["Normal", "R"],
            tags: ["early-game", "harvesting", "defense"]
        },

        classification: {
            aggression: "territorial",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Reliable early-game herbivore with strong defensive capabilities and useful berry harvesting.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["berry harvesting", "early-game combat", "defense"]
        }
    },

    {
        id: "stegosaurus",

        identity: {
            Cname: "Stegosaurus",
            image: "/creatures/stegosaurus.png",
            variants: ["Normal", "Tek"],
            tags: ["harvesting", "defense", "herbivore"]
        },

        classification: {
            aggression: "neutral",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Large defensive herbivore capable of gathering several useful resources.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["resource harvesting", "defense", "travel"]
        }
    },

    {
        id: "brontosaurus",

        identity: {
            Cname: "Brontosaurus",
            image: "/creatures/brontosaurus.png",
            variants: ["Normal", "R"],
            tags: ["large", "harvesting", "transport"]
        },

        classification: {
            aggression: "neutral",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Huge herbivore with excellent harvesting capabilities and a large health pool.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["berry harvesting", "mass harvesting", "transport"]
        }
    },

    {
        id: "parasaur",

        identity: {
            Cname: "Parasaur",
            image: "/creatures/parasaur.png",
            variants: ["Normal", "R"],
            tags: ["early-game", "utility", "detection"]
        },

        classification: {
            aggression: "passive",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Common early-game herbivore useful for transportation and detecting nearby threats.",
            mounting: {
                mountable: true
            },
            abilities: ["threat detection"],
            useCases: ["early-game travel", "threat detection", "transport"]
        }
    },

    {
        id: "pteranodon",

        identity: {
            Cname: "Pteranodon",
            image: "/creatures/pteranodon.png",
            variants: ["Normal", "Tek"],
            tags: ["flying", "early-game", "travel"]
        },

        classification: {
            aggression: "passive",
            movement: ["flying"],
            category: ["regular", "flyer"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "One of the earliest accessible flying mounts and a major upgrade to exploration.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["flight", "exploration", "transport"]
        }
    },

    {
        id: "argentavis",

        identity: {
            Cname: "Argentavis",
            image: "/creatures/argentavis.png",
            variants: ["Normal", "R"],
            tags: ["flying", "transport", "utility"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["flying"],
            category: ["regular", "flyer"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Highly versatile flying mount with strong carrying, combat, and utility capabilities.",
            mounting: {
                mountable: true
            },
            abilities: ["creature carrying", "healing"],
            useCases: ["transport", "creature carrying", "combat", "exploration"]
        }
    },

    {
        id: "quetzal",

        identity: {
            Cname: "Quetzal",
            image: "/creatures/quetzal.png",
            variants: ["Normal", "Tek", "X"],
            tags: ["flying", "platform-saddle", "transport"]
        },

        classification: {
            aggression: "passive",
            movement: ["flying"],
            category: ["rare", "flyer"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Massive flying mount capable of carrying heavy loads and supporting a platform saddle.",
            mounting: {
                mountable: true
            },
            abilities: ["platform saddle"],
            useCases: ["heavy transport", "platform builds", "resource transport"]
        }
    },

    {
        id: "spino",

        identity: {
            Cname: "Spinosaurus",
            image: "/creatures/spino.png",
            variants: ["Normal", "X", "R"],
            tags: ["combat", "water", "land"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground", "swimming"],
            category: ["regular", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Powerful amphibious predator with excellent combat and mobility capabilities.",
            mounting: {
                mountable: true
            },
            abilities: ["hydrated buff"],
            useCases: ["combat", "water exploration", "travel"]
        }
    },

    {
        id: "baryonyx",

        identity: {
            Cname: "Baryonyx",
            image: "/creatures/baryonyx.png",
            variants: ["Normal", "Aberrant"],
            tags: ["water", "cave", "combat"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground", "swimming"],
            category: ["regular", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Versatile amphibious predator especially useful for caves and aquatic exploration.",
            mounting: {
                mountable: true
            },
            abilities: ["tail stun"],
            useCases: ["cave exploration", "water exploration", "combat"]
        }
    },

    {
        id: "ankylosaurus",

        identity: {
            Cname: "Ankylosaurus",
            image: "/creatures/ankylosaurus.png",
            variants: ["Normal", "Tek", "Aberrant"],
            tags: ["mining", "metal", "resource"]
        },

        classification: {
            aggression: "neutral",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Specialized resource-gathering creature known for harvesting metal and other minerals.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["metal harvesting", "mining", "resource gathering"]
        }
    },

    {
        id: "doedicurus",

        identity: {
            Cname: "Doedicurus",
            image: "/creatures/doedicurus.png",
            variants: ["Normal", "R"],
            tags: ["stone", "resource", "harvesting"]
        },

        classification: {
            aggression: "passive",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Specialized stone-gathering creature with a powerful rolling defense.",
            mounting: {
                mountable: true
            },
            abilities: ["rolling"],
            useCases: ["stone harvesting", "resource gathering"]
        }
    },

    {
        id: "therizinosaur",

        identity: {
            Cname: "Therizinosaur",
            image: "/creatures/therizinosaur.png",
            variants: ["Normal", "R"],
            tags: ["harvesting", "combat", "boss"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Extremely versatile herbivore capable of harvesting many resources and serving as a strong combat mount.",
            mounting: {
                mountable: true
            },
            abilities: ["claw harvesting"],
            useCases: ["resource harvesting", "combat", "boss fights"]
        }
    },

    {
        id: "direwolf",

        identity: {
            Cname: "Direwolf",
            image: "/creatures/direwolf.png",
            variants: ["Normal", "X", "R"],
            tags: ["pack", "combat", "cave"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground"],
            category: ["regular", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Fast pack predator that makes an effective combat and exploration mount.",
            mounting: {
                mountable: true
            },
            abilities: ["pack bonus"],
            useCases: ["combat", "cave exploration", "travel"]
        }
    },

    {
        id: "yutyrannus",

        identity: {
            Cname: "Yutyrannus",
            image: "/creatures/yutyrannus.png",
            variants: ["Normal"],
            tags: ["boss", "buff", "combat"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground"],
            category: ["rare", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Large carnivore primarily valued for its powerful courage-roar buff during boss fights.",
            mounting: {
                mountable: true
            },
            abilities: ["courage roar", "fear roar"],
            useCases: ["boss fights", "combat support"]
        }
    },

    {
        id: "daeodon",

        identity: {
            Cname: "Daeodon",
            image: "/creatures/daeodon.png",
            variants: ["Normal"],
            tags: ["healing", "boss", "support"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground"],
            category: ["regular", "omnivore"],
            diet: "omnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Support creature capable of healing nearby allied creatures.",
            mounting: {
                mountable: true
            },
            abilities: ["healing aura"],
            useCases: ["boss fights", "healing", "combat support"]
        }
    },

    {
        id: "megatherium",

        identity: {
            Cname: "Megatherium",
            image: "/creatures/megatherium.png",
            variants: ["Normal", "X"],
            tags: ["boss", "insect", "harvesting"]
        },

        classification: {
            aggression: "neutral",
            movement: ["ground"],
            category: ["regular", "omnivore"],
            diet: "omnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Large sloth that becomes extremely powerful after killing insects.",
            mounting: {
                mountable: true
            },
            abilities: ["insect buff"],
            useCases: ["Broodmother fight", "combat", "chitin harvesting"]
        }
    },

    {
        id: "megalodon",

        identity: {
            Cname: "Megalodon",
            image: "/creatures/megalodon.png",
            variants: ["Normal", "X"],
            tags: ["aquatic", "combat", "ocean"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["swimming"],
            category: ["regular", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Powerful aquatic predator useful for ocean combat and exploration.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["ocean exploration", "aquatic combat"]
        }
    },

    {
        id: "basilosaurus",

        identity: {
            Cname: "Basilosaurus",
            image: "/creatures/basilosaurus.png",
            variants: ["Normal"],
            tags: ["aquatic", "deep-ocean", "utility"]
        },

        classification: {
            aggression: "passive",
            movement: ["swimming"],
            category: ["regular", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "Passive"
        },

        utility: {
            description_utility: "Durable aquatic mount with useful resistance to many deep-ocean hazards.",
            mounting: {
                mountable: true
            },
            abilities: [],
            useCases: ["deep-ocean exploration", "underwater resource gathering"]
        }
    },

    {
        id: "otter",

        identity: {
            Cname: "Otter",
            image: "/creatures/otter.png",
            variants: ["Normal"],
            tags: ["pet", "artifact", "utility"]
        },

        classification: {
            aggression: "passive",
            movement: ["ground", "swimming"],
            category: ["regular", "omnivore"],
            diet: "omnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "Passive"
        },

        utility: {
            description_utility: "Small utility creature valued for carrying artifacts and providing insulation.",
            mounting: {
                mountable: false
            },
            abilities: ["artifact carrying", "insulation"],
            useCases: ["artifact carrying", "insulation", "pet"]
        }
    },

    {
        id: "dodo",

        identity: {
            Cname: "Dodo",
            image: "/creatures/dodo.png",
            variants: ["Normal"],
            tags: ["early-game", "pet", "egg"]
        },

        classification: {
            aggression: "passive",
            movement: ["ground"],
            category: ["regular", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "Passive"
        },

        utility: {
            description_utility: "Common passive creature frequently encountered during the early game.",
            mounting: {
                mountable: false
            },
            abilities: [],
            useCases: ["early-game taming", "egg production", "pet"]
        }
    },

    {
        id: "trilobite",

        identity: {
            Cname: "Trilobite",
            image: "/creatures/trilobite.png",
            variants: ["Normal"],
            tags: ["aquatic", "resource", "passive"]
        },

        classification: {
            aggression: "passive",
            movement: ["swimming"],
            category: ["regular", "arthropod"],
            diet: "scavenger"
        },

        taming: {
            tameable: false,
            tamingProcess: null
        },

        utility: {
            description_utility: "Small aquatic creature that provides useful resources when harvested.",
            mounting: {
                mountable: false
            },
            abilities: [],
            useCases: ["resource harvesting"]
        }
    },

    {
        id: "giganotosaurus",

        identity: {
            Cname: "Giganotosaurus",
            image: "/creatures/giganotosaurus.png",
            variants: ["Normal", "X", "R"],
            tags: ["rare", "large", "combat"]
        },

        classification: {
            aggression: "aggressive",
            movement: ["ground"],
            category: ["rare", "carnivore"],
            diet: "carnivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Extremely powerful apex predator capable of devastating damage.",
            mounting: {
                mountable: true
            },
            abilities: ["rage mechanic"],
            useCases: ["combat", "high-level hunting"]
        }
    },

    {
        id: "titanosaur",

        identity: {
            Cname: "Titanosaur",
            image: "/creatures/titanosaur.png",
            variants: ["Normal"],
            tags: ["titan", "platform-saddle", "massive"]
        },

        classification: {
            aggression: "neutral",
            movement: ["ground"],
            category: ["titan", "herbivore"],
            diet: "herbivore"
        },

        taming: {
            tameable: true,
            tamingProcess: "KO"
        },

        utility: {
            description_utility: "Massive temporary tame capable of carrying a platform and enormous structures.",
            mounting: {
                mountable: true
            },
            abilities: ["platform saddle"],
            useCases: ["mass transport", "platform bases", "siege"]
        }
    }

]