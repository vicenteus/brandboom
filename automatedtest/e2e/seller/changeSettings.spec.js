
describe('Seller:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	});


	describe("BeforeTests", function(){

					it('should load seller login page', function(){
							browser.driver.manage().deleteAllCookies();
							b.get('https://manage.brandboom.us/login');
							expect(b.getTitle()).toEqual('Brandboom | Brand Login');
						});

						it('should be able to login', function(){
							var email = element(by.css('[name="email"]'));
							email.sendKeys('accountsettings@fakebrandboom.com');

							var password = element(by.css('[name="password"]'));
							password.sendKeys('Brandboom1');

							var loginButton = element(by.css('[name="submitButton"]'));
							loginButton.click();

							b.wait(ExpectedConditions.visibilityOf(element(by.css('.glyphicons-show-lines'))), 10000);
							expect(b.getTitle()).toEqual('Brandboom | Home');
						});

					it('should open account settings', function(){

						var leftpanelButton = element(by.css('.glyphicons-show-lines'));
						leftpanelButton.click();

						var sellerAvatar = element(by.css('.sb-footer'));
						sellerAvatar.click();

						var accountSettings = element.all(by.xpath('.//*[.="Account Settings"]')).first();
						accountSettings.click();
			});
});

				describe("Account Settings - Add User Information", function(){

						it('should change first name', function(){
							var firstName = element(by.name('firstName'));
							firstName.sendKeys('LOL');
});
							it('should change last name', function(){
								var lastName = element(by.name('lastName'));
								lastName.sendKeys('LOL');
});
								it('should change job title', function(){
									var jobTitle = element(by.name('jobTitle'));
									jobTitle.sendKeys('LOL');
});
									it('should change phone', function	(){
										var phone = element.all(by.name('phone')).first();
										phone.sendKeys('LOL');

							var saveButton = element.all(by.partialButtonText('Save'));
							saveButton.click();
				});
			});
});
