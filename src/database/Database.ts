import Game from '../objects/Game'
import User from '../objects/User'

interface DataBase {
    users: Array<User>;
    games: Array<Game>;
}

const DB: DataBase = {
    users: [
        {
            id: 1,
            username: "xXx_sephiroth1997_xXx",
            games: [
                {
                    game: { id: 4, title: "FINAL FANTASY XIV Online"},
                    playTime: 400,
                    isDeleted: false
                },
                {
                    game: { id: 1, title: "Mirror's Edge"},
                    playTime: 20,
                    isDeleted: false
                },
                {
                    game: { id: 3, title: "Titanfall 2"},
                    playTime: 10,
                    isDeleted: false
                }
            ]
        },
        {
            id: 2,
            username: 'xXx_sephiroth1997_xXx',
            games: [
                {
                    game: { id: 2, title: "Deus Ex: Game of the Year Edition"},
                    playTime: 230,
                    isDeleted: false
                },
                {
                    game: { id: 3, title: "Titanfall 2"},
                    playTime: 175,
                    isDeleted: false
                }
            ]
        }
    ],

    games: [
        {
            id: 1,
            title: "Mirror's Edge",
            description: "In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, & you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.",
            age_rating: "T",
            images: []
        },
        {
            id: 2,
            title: "Deus Ex: Game of the Year Edition",
            description: "The year is 2052 and the world is a dangerous and chaotic place. Terrorists operate openly - killing thousands; drugs, disease and pollution kill even more. The world's economies are close to collapse and the gap between the insanely wealthy and the desperately poor grows ever wider.",
            age_rating: "M",
            images: []
        },
        {
            id: 3,
            title: "Titanfall 2",
            description: "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",
            age_rating: "M",
            images: []
        },
        {
            id: 4,
            title: "FINAL FANTASY XIV Online",
            description: "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
            age_rating: "T",
            images: []
        }
    ]
}

export default DB;