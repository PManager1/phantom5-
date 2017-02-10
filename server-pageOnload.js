var page = new WebPage();

page.onLoadStarted = function () {
console.log('Start loading...');
};

page.onLoadFinished = function (status) {
console.log('Loading finished.');
phantom.exit();
};

page.open('http://example.com');