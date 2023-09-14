const getTheTitles = function(books) {

    let titles = [];

    books.forEach(object => {
        titles.push(object.title)
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
