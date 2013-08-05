module.exports = function(params, url) {

    var list = [];
    buildTable(params, list);

    for (var i = 0; i < list.length; i++) {
        list[i] = buildQueryItem(list[i]);
    }
    return url + '?' + list.join('&');
}


function buildTable(value, list, parent) {
    if (!parent) {
        parent = [];
    }
    if (typeof value != 'object') {
        var result = parent.concat(value);
        list.push(result);
    } else {
        for (var key in value) {
            var result = parent.concat(key);
            buildTable(value[key], list, result);
        }
    }
}

function buildQueryItem(itemArray) {
    var result = itemArray.shift();
    for (var i = 0; i < itemArray.length - 1; i++) {
        result += ('['+ itemArray[i] +']');
    }
    result += ('=' + itemArray.pop());
    return result;
}






