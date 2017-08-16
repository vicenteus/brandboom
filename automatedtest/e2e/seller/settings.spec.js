
describe('Seller:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	});


	describe("BeforeTests - ", function(){
	it('should load seller login page', function(){
			browser.driver.manage().deleteAllCookies();
			b.get('https://manage.brandboom.com/login');
			expect(b.getTitle()).toEqual('Brandboom | Brand Login');
		});

					it('should be able to login', function(){
						var email = element(by.css('[name="email"]'));
						email.sendKeys('vicente@brandboom.com');

						var password = element(by.css('[name="password"]'));
						password.sendKeys('Brandboom1');

						var loginButton = element(by.css('[name="submitButton"]'));
						loginButton.click();

						b.wait(ExpectedConditions.visibilityOf(element(by.css('.glyphicons-show-lines'))), 10000);
						expect(b.getTitle()).toEqual('Brandboom | Home');
					});
			});

	describe("Account Settings Header - ", function(){

					it('should navigate to account profile ', function(){
						var leftpanelButton = element(by.css('.glyphicons-show-lines'));
						leftpanelButton.click();

						var sellerAvatar = element(by.css('.sb-footer'));
						sellerAvatar.click();

						var accountSettings = element.all(by.xpath('.//*[.="Account Settings"]')).first();
						accountSettings.click();
					});

					it('should navigate to account settings', function(){
						var accountSettings = element(by.id('nav-settings'));
						accountSettings.click();
					});

					it('should navigate to account subscription', function(){
						var accountSubscription = element(by.id('nav-subscription'));
						accountSubscription.click();
					});

					it('should navigate to account billing', function	(){
						var accountBilling = element(by.id('nav-billing'));
						accountBilling.click();
					});
});

	describe("Account Settings List - ", function(){

					it('should navigate to account settings ', function(){
						var leftpanelButton = element(by.css('.glyphicons-show-lines'));
						leftpanelButton.click();

						var sellerAvatar = element(by.css('.sb-footer'));
						sellerAvatar.click();

						var accountSettings = element.all(by.xpath('.//*[.="Account Settings"]')).first();
						accountSettings.click();
					});


					it('should navigate to account subscription', function(){
						var accountSubscription = element.all(by.css('.glyphicons.glyphicons-refresh')).first();
						accountSubscription.click();
					});

					it('should navigate to account billing', function	(){
						var accountBilling = element.all(by.xpath('.//*[.="Billing"]')).first();
						accountBilling.click();
					});
				});
			});
