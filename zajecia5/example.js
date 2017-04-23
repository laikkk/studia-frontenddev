var Rx = require('@reactivex/rxjs');

var source = Rx.Observable.range(0, 3);

var observer = {
    next: (value) => console.log(`Next ${value}`),
    error: (exception) => console.log(''),
    complete: () => { console.log('completed') }
}

var subscription = source.subscribe(observer);


var source2 = Rx.Observable.create(observer => {
    console.log('Rozpoczynam nadawanie');
    observer.next(' Hello ')
    observer.next(' World ')
    observer.next(' on Sunday! ')
    // observer.onCompleted();
}).subscribe({ next: x => console.log(x) });