var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(x => q.val())
    .switchMap((x) => searchWikipedia(x))
    .do((x) => { console.log(x) })
    .map((e, i) => [e, x[2][i], x[3][i]])
    .subscribe((x) => $('#results').text(x))

// $('#myTable').append('<tr><td>my data</td><td>more data</td></tr>');

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}