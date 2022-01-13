'use strict';
import getJson from "./getJson.js";
import createFilterButton from "./createFilterButton.js";
import createOl from "./createOl.js";


document.addEventListener(
    'DOMContentLoaded',
    async function() {
        const p1 = getJson(
            'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
        );
        const p2 = getJson(
            'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
        );
        const twopromises = await Promise.all([p1, p2]);
        const tweets = twopromises.flat();
        console.log('Le tableau de tweet', tweets);

        const displayedOl = createOl(tweets);
        const filter = createFilterButton(tweets, displayedOl);

        document.body.append(filter);
        document.body.append(displayedOl);

        /* [14] Utiliser Promise.all() pour charger également les tweets de cette url :
              'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
            */




        // ### BONUS: LOCALSTORAGE ###
        // [1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
          + et stocker l'ensemble des id_str fav dans le localStorage */

        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
    }, { once: true },
);