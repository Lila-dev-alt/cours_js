import moment from '../node_modules/moment/dist/moment.js';

export default function createLi(tweet) {


    let now = moment();
    let days = now.diff(tweet.created_at, "days");
    const li = document.createElement('li');

    let textDiv = document.createElement('div');
    let autorDiv = document.createElement('div');
    let dateDiv = document.createElement('div');
    li.append(textDiv, autorDiv, dateDiv);
    //  li.textContent = tweet.user.name + ' : ' + tweet.full_text + '  /  ' + days + ' days ago';

    textDiv.textContent = tweet.full_text;
    autorDiv.textContent = tweet.user.name;
    dateDiv.textContent = days + ' days ago';

    return li;
}