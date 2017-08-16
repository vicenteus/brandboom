describe('Seller:', function() {
	var b;


	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
		browser.baseUrl = browser.baseUrl.replace('www', 'manage');
	});

	describe('Google Login:', function() {

				it('should open brandboom login', function(){
							b.get(browser.baseUrl + '/login');
						expect(b.getTitle()).toEqual('Brandboom | Brand Login');
					});


				it('should open sign in with google', function(){
						var googleButton = element(by.css('.google-login-btn.login-btn.btn.btn-primary'));
						googleButton.click();

						b.wait(ExpectedConditions.visibilityOf(element(by.css('#identifierId'))), 10000);
					});


				it('should enter email and password', function(){
						var email = element(by.css('#identifierId'));
						email.sendKeys('vicente@brandboom.com');

						var emailNext = element(by.css('#identifierNext'));
						emailNext.click();

						//wait for password input box to be visible
						b.wait(ExpectedConditions.visibilityOf(element(by.css('#password.rFrNMe.P7gl3b.sdJrJc.Tyc9J'))), 10000);
						var password = element(by.id('password'));
						password.click();
						password.sendKeys('Brandboom1')

						var passwordNext = element(by.id('passwordNext'));
						passwordNext.click();
					});


				it('should land on homepage', function(){
						b.wait(ExpectedConditions.visibilityOf(element(by.css('#home-logo.home-logo'))), 10000);
						expect(b.getTitle()).toEqual('Brandboom | Home');
					});
			});
			});
