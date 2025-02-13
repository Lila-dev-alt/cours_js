'use strict';

function getJson(url) {
    return fetch(url)
        .then(function(resp) {
            return resp.json();
        })
        .catch(function(err) {
            console.error(err);
        });
}

function checkFr(tweet) {
    return tweet.lang === 'fr';
}

function createLi(tweet) {
    const li = document.createElement('li');
    li.textContent = tweet.full_text;

    return li;
}

function createOl(tweets) {
    const ol = document.createElement('ol');

    tweets.forEach(tweet => {
        const li = createLi(tweet);
        ol.append(li);
    });

    return ol;
}

let isFr = false;

function createFilterButton(twts, target) {
    const button = document.createElement('button');
    button.textContent = 'Fr';

    button.addEventListener('click', () => {
        isFr = !isFr;

        button.textContent = isFr ? 'Tous' : 'Fr';

        let tweetsToDisplay = twts;

        if (isFr) {
            tweetsToDisplay = twts.filter(checkFr);
        }

        const newOl = createOl(tweetsToDisplay);
        target.replaceWith(newOl);
        target = newOl;
    });

    return button;
}

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