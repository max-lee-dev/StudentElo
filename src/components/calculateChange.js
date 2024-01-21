import React from 'react';


export const calculateChange = (elo1, elo2, winner, raterAccuracy) => {
    const expected1 = 1 / (1 + Math.pow(10, (elo2 - elo1) / 400));
    const expected2 = 1 / (1 + Math.pow(10, (elo1 - elo2) / 400));
    const k = 32;


    // use rater accuracy in calculation
    if (winner === 1) {
        elo1 = elo1 + (k * (1 - expected1) * raterAccuracy);
        elo2 = elo2 + (k * (0 - expected2) * raterAccuracy);
    } else {
        elo1 = elo1 + (k * (0 - expected1) * raterAccuracy);
        elo2 = elo2 + (k * (1 - expected2) * raterAccuracy);
    }
    return [elo1, elo2];

}
