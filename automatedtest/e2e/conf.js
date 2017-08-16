let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  //The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
  browserName: 'firefox'
},

  //directConnect: true,



suites: {
  // 'seller/*.spec.js',
  // 'home/*.spec.js'
},


 specs: [
 // 'seller/googleLogin.spec.js',
 // 'seller/connectSignup.spec.js',
 // 'seller/changeSettings.spec.js',
 // 'seller/settings.spec.js',
 // 'seller/forgotpassword.spec.js',
 // 'seller/createMastershowroom.spec.js',
 // 'seller/createSubshowroom.spec.js',
 // 'seller/presentationPDF.spec.js',
 // 'seller/create_processingorder.spec.js',

  // 'home/infosite.spec.js',
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
