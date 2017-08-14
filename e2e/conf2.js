let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  //The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
  browserName: 'firefox'
},

  //directConnect: true,
 //Here we specify the name of the specs files.

  specs: [
    'googleLogin.js'
    //home
  //'connect.js',
  //'infosite.js',
//'accountsettings.js'
//  'settings.js',
    //seller
  //'forgotpassword.js',
  // 'createMastershowroom.js',
  //'createSubshowroom.js',
  //// 'addProduct.js',
  //'generate_PDF.spec.js',
//buyer
  //'order_placed.spec.js'
       ],

baseUrl: 'http://www.brandboom.us',



  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
}
