describe('Seller:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	});


	describe("Forgot Password -", function(){

					it('should load seller login page', function(){
							browser.driver.manage().deleteAllCookies();
							b.get('https://manage.brandboom.us/login');
							expect(b.getTitle()).toEqual('Brandboom | Brand Login');
						});

					it('should click "Forgot your password" link', function(){
							var forgotpw = element(by.cssContainingText('[href*="https://manage.brandboom.us/account/forgotPassword.php"]', 'Click here.'));
							forgotpw.click();
							expect(b.getTitle()).toEqual('Brandboom | Forgot Password');
						});

					it('should enter valid email', function(){
						var email = element(by.css('[name="email"]'));
						email.sendKeys('vicente@brandboom.com');
						});

					it('should click submitButton', function(){
						var submitButton = element(by.xpath('.//*[.="SUBMIT"]'));
						submitButton.click();
						});

					it('should display check email message', function(){
						expect(element(by.css('.form-group.error.text-center')).getText()).toContain('A new password has');
						});
});
						});
