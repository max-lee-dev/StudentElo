import React from 'react';


export const calculateChange = (elo1, elo2, winner) => {
    if (winner === 1) {
        const newElo1 = elo1 + 1;
        const newElo2 = elo2 - 1;
        return [newElo1, newElo2]
    } else {
        const newElo1 = elo1 - 1;
        const newElo2 = elo2 + 1;
        return [newElo1, newElo2]

    }


}
