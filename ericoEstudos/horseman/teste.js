// Find the number of follower for each account. Spawns a new horseman for each user for faster results.
var Horseman = require('node-horseman');

var users = ['EricoTWalker',
    'PhantomJS',
	'ariyahidayat',
	'detronizator',
	'KDABQt',
	'lfranchi',
	'jonleighton',
	'_jamesmgreene',
	'Vitalliumm'];

users.forEach( function( user ){
	var horseman = new Horseman();
	horseman
		.open('https://mobile.twitter.com/' + user)
        .text('table.profile-stats > tbody > tr > td.stat > a[href$="/followers"] > div.statnum')
        .then(function(text){
			console.log( user + ': ' + text );
		})
		.finally(function(){
			return horseman.close();
		});	
});