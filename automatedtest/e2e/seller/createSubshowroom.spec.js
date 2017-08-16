describe('Seller:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	});


	describe("Create Sub showroom -", function(){

					it('should load seller login page', function(){
							browser.driver.manage().deleteAllCookies();
							b.get('https://manage.brandboom.us/login');
							expect(b.getTitle()).toEqual('Brandboom | Brand Login');
						});

						it('should be able to login', function(){
							var email = element(by.css('[name="email"]'));
							email.sendKeys('createmastershowroom@fakebrandboom.com');

							var password = element(by.css('[name="password"]'));
							password.sendKeys('Brandboom1');

							var loginButton = element(by.css('[name="submitButton"]'));
							loginButton.click();

							b.wait(ExpectedConditions.visibilityOf(element(by.css('#home-logo.home-logo'))), 10000);
							expect(b.getTitle()).toEqual('Brandboom | Home');
						});

						it('should open showroom modal', function(){
							var leftpanelButton = element(by.css('.glyphicons-show-lines'));
							leftpanelButton.click();


							var plusButton = element(by.css('.glyphicons-plus'));
							b.wait(ExpectedConditions.visibilityOf(plusButton), 10000);
							plusButton.click();

							var showroomModal = element(by.css('.modal-content'));
							b.wait(ExpectedConditions.visibilityOf(showroomModal), 10000);
						});

						it('should fill out info and create showroom', function(){
							var ran = Math.floor(Math.random()*100)

							var createsubButton = element.all(by.partialButtonText('Create Sub'));
							createsubButton.click();

							var nameBox = element(by.css('[name="name"]'));
							b.wait(ExpectedConditions.visibilityOf(nameBox), 10000);
							nameBox.sendKeys('BrandA' + ran + 'X' + ran);

							var urlBox = element(by.css('[name="urlAlias"]'));
							urlBox.sendKeys(protractor.Key.TAB);

							var languageBox = element(by.css('[name="languageCode"]'));
							expect(languageBox.isPresent()).toBeTruthy();

							var numberFormatBox = element(by.css('[name="numberFormat"]'));
							expect(numberFormatBox.isPresent()).toBeTruthy();

							var dateBox = element(by.css('[name="dateFormat"]'));
							expect(dateBox.isPresent()).toBeTruthy();

							var defaultpriceBox = element(by.css('.list-group-item'));
							expect(defaultpriceBox.isPresent()).toBeTruthy();

							var currencyBox = element(by.css('.pt-currency.form-control'));
							expect(currencyBox.isPresent()).toBeFalsy();

							var currencycodeBox = element(by.css('.pt-code.form-control'));
							expect(currencycodeBox.isPresent()).toBeFalsy();


							var createshowroomButton = element.all(by.partialButtonText('Create Showroom'));
							createshowroomButton.click();
							});

						it('should load homepage and showroom', function(){
//showroom is present
							var elm = element(by.css('.modal-body.clearfix'));
							var EC = protractor.ExpectedConditions;
							browser.wait(EC.presenceOf(elm), 5000);


							var EC = protractor.ExpectedConditions;
							browser.wait(EC.urlContains("https://manage.brandboom.us/home"), 5000);
						});
});
});
