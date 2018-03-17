let url = 'https://jsonplaceholder.typicode.com/users';
let names = [];
fetch(url)
    .then(blob => blob.json())
    .then(data => names.push(...data))
console.log(names);
checkMatches = (word, names) => {
    let regex = new RegExp(word, 'gi');
    return names.filter(x => {
        return x.name.match(regex);
    })
};
displayMatches = (e) => {
    let matchedArray = checkMatches(e.target.value, names);
    let html = matchedArray.map(name => {
        return `
            <li>
                <span>${name.name}, ${name.email}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
};
let searchInput = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
