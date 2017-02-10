var page = require('webpage').create();
// page.viewportSize = { width: 1024, height: 768 };   // this works but the pags size isn't good. Cuts off at PURCHSAE PRICE 2.a 

// page.viewportSize = { width: 600, height: 800 };
page.viewportSize = { width: 1024, height: 1400 };   // this works but the pags size isn't good. Cuts off at PURCHSAE PRICE 2.a 


// page.viewportSize = {
//   width: 480,
//   height: 800
// };


page.open('http://localhost:1313/contract.html', function() {
  // page.render('server-zoom2-480-800.pdf');





window.setTimeout(function () {
		  page.render('/Users/jay/Dropbox/Life Changing Mentoring Program/CODE/phantomjs/sizes/1024-1400.pdf');  
		  console.log ( ' working.... exiting')
		  phantom.exit();
        }, 6000);
});


