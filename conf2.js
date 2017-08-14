let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  //The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
  browserName: 'firefox'
},

  //directConnect: true,
 //Here we specify the name of the specs files.

//
//  suites: {
//    // working: [
//    // 	'buyer/signup/signup.spec.js'
//    // ],
//    // buyer: [
//    // 	'buyer/**/*.spec.js',
//    // ],
//     seller: [
//     	//'seller/**/*.spec.js',
//    // ],
//    // admin: [
//    // 	'admin/**/*.spec.js'
//    // ],
//    // smoke: [
//    // 	'buyer/**/*.spec.js',
//    // 	'seller/**/*.spec.js'
//    // ],
//
//    ]
// },



  specs: [
      'googleLogin.spec.js'
    //home
  //'connect.js',
  //'infosite.js',
//'accountsettings.js'
  //'settings.js',
    //seller
//   //'forgotpassword.js',
//    'createMastershowroom.spec.js',
//   'createSubshowroom.spec.js',
//   //'addProduct.spec.js',
//   'generate_PDF.spec.js',
//   'create_processingorder.spec.js'
// //buyer

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
