import React from 'react';


export const calculateChange = (elo1, elo2, winner) => {
    const expected1 = 1 / (1 + Math.pow(10, (elo2 - elo1) / 400));
    const expected2 = 1 - expected1; // Since expected1 + expected2 should be 1
    const k = 32; // The K-factor could be adjusted based on the level of the players


    let ratingChange1 = k * (1 - expected1);
    let ratingChange2 = k * (0 - expected2);


    if (winner === 1) {
        // If player 1 wins, player 1's rating increases and player 2's rating decreases
        elo1 = elo1 + ratingChange1;
        elo2 = elo2 + ratingChange2; // Subtract the change for the losing player
    } else {
        // If player 2 wins, reverse the changes
        elo1 = elo1 - ratingChange1; // Subtract the change for the losing player
        elo2 = elo2 - ratingChange2;
    }


    // Ensure ratings do not become negative
    elo1 = Math.max(elo1, 0);
    elo2 = Math.max(elo2, 0);


    return [Math.round(elo1), Math.round(elo2)];
}


