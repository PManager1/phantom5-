var page = require('webpage').create();
// page.viewportSize = { width: 1024, height: 768 };   // this works but the pags size isn't good. Cuts off at PURCHSAE PRICE 2.a 

// page.viewportSize = { width: 600, height: 800 };
page.viewportSize = { width: 1024, height: 1400 };   // this works but the pags size isn't good. Cuts off at PURCHSAE PRICE 2.a 


page.onLoadStarted = function () {
console.log('Start loading...');
};


page.onLoadFinished = function (status) {
console.log('Loading finished.');

page.render('/Users/jay/Dropbox/Life Changing Mentoring Program/CODE/phantomjs/sizes/1024-1400.pdf');  
console.log ( ' working.... exiting')
phantom.exit();
};



page.open('http://localhost:1313/contract.html', function() {

});


// 51:30 