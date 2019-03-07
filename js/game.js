// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Its a sunny afternoon and you come acros Porky the Pig at the pigs' den",
            choices: [
                {
                    text: "Pet him",
                    nextLevel: "porky",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        porky: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "After weeks of taking care of Porky, the farmer comes up to you and tells you Porky is transferring to the Slaughterhouse"
            choices: [
                {
                    text: "You Strongly Say No beacuse you grew an attachment to Porky",
                    nextLevel: "piglets",
                },
                {
                    text: "You let the Farmer take Porky away",
                    nextLevel:"slaughterHouse101",
                    
                },
            ]
        },

        field: {
            message:"The U.S. raises some 100 millio pigs for food each year (including Porky). Without a kind human interaction, Porky would never see mankind as good.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
