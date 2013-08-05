var paramsToQuery = require('./paramsToQuery')



var data = {
    test : 'Tooo',
    gest : 'uuuu',
    goo : {
        test1 : 1,
        test2 : 2,
        room : [
            'table',
            'bad'
        ]
    },
    zoom : [
        'a',
        'b',
        'c'
    ]
}


console.log(paramsToQuery(data, 'http://ya.ru'));