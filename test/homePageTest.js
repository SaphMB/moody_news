const Browser = require('zombie');
const app = require('../app');
const http = require('http');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('User visits home page', function() {

  const browser = new Browser();

  before(function() {
    this.server = http.createServer(app).listen(3000);
    return browser.visit('/');
  });

  it('should see welcome page', function() {
    // browser.visit('/');
    browser.assert.text('title', 'Moody News');
  });

  after(function(){
    this.server.close();
  });

});
