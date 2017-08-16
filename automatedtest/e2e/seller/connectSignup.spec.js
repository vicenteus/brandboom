describe('Connect:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	});


	describe("Signup and waitlisted -", function(){

				it('should navigate to home page', function(){
						browser.driver.manage().deleteAllCookies();
						b.get(browser.baseUrl);
						expect(b.getTitle()).toEqual('Brandboom | Line Sheet Sales Tool, iPad Sales Tool, and Order Management');
					});


				it('should open brandboom connect page from banner', function(){
						var brandboomconnect = element(by.css('.connect-link.btn'));
						brandboomconnect.click();
						expect(b.getTitle()).toEqual('Brandboom Connect | Find and connect with wholesale retail buyers');
					});

				it('should open brandboom connect signup from sign up free button', function(){
						var signupfree = element.all(by.xpath('.//*[.="Sign Up Free"]')).first();
						signupfree.click();
						expect(b.getTitle()).toEqual('Brandboom | Signup');
					});


				it('should open brandboom connect signup from sign up for beta button', function(){
						b.get(browser.baseUrl +'/connect');
						var signupforbeta = element.all(by.xpath('.//*[.="Sign Up for Beta"]')).first();
						signupforbeta.click();
						expect(b.getTitle()).toEqual('Brandboom | Signup');
					});


				it('should enter valid email', function(){
						b.get(browser.baseUrl +'/connect');
						var email = element(by.css('#signupform-email-input'));
						var ran = Math.floor(Math.random()*1000)
						//var email = element(by.css('[name="email"]'));
						email.sendKeys('test' + ran + ran +'@fakebrandboom.com');
					});


				it('should submit email and go to connect signup', function(){
						var getmyfreeaccountButton = element(by.css('#signupform-input'));
						getmyfreeaccountButton.click();
						b.wait(ExpectedConditions.visibilityOf(element(by.css("button.btn.btn-lg.btn-info.create-account-btn"))), 5000);
					});


				it('should contain entered email on connect signup page', function(){
						expect(b.getTitle()).toEqual('Brandboom | Signup');
						expect(element(by.css('[name="email"]')).getAttribute('value')).toContain('@fakebrandboom');
					});


				it('should complete connect signup#1', function(){
						var firstname = element(by.css('[name="firstName"]'));
						firstname.sendKeys('Brandboom');

						var lastname = element(by.css('[name="lastName"]'));
						lastname.sendKeys('Tester');

						var email = element(by.css('[name="email"]'));
						email.sendKeys(protractor.Key.TAB);

						var password1 = element(by.css('[name="newPassword"]'));
						password1.sendKeys('Brandboom1');

						b.wait(ExpectedConditions.visibilityOf(element(by.css('div.form-group:nth-child(7) > div:nth-child(2) > i:nth-child(2)'))), 5000);

						//wait for green confirms on confirm pw boxes
						var createAccountbutton = element(by.css('.btn.btn-lg.btn-info.create-account-btn'));
						createAccountbutton.click();

						b.wait(ExpectedConditions.visibilityOf(element(by.cssContainingText('.btn.btn-lg.btn-primary', 'Finish'))), 5000);
					});

				it('should complete connect signup#2', function(){
						var ran = Math.floor(Math.random()*100)
						var businesstype = element(by.css('[name="businessType"]'));
						businesstype.sendKeys('b');

						var brandname = element(by.css('[name="showroomName"]'));
						brandname.sendKeys('TestBrand' + ran);

						var phonenumber = element(by.css('[name="phoneNumber"]'));
						phonenumber.sendKeys('0001112222');

						var website = element(by.css('[name="website"]'));
						website.sendKeys('www.BBTest' + ran + '.com');

						var currency = element(by.css('[name="currency"]'));
							expect(currency.isPresent()).toBeTruthy();

						var currencyformat = element(by.css('[name="numberFormat"]'));
							expect(currencyformat.isPresent()).toBeTruthy();

						var dateformat = element(by.css('[name="dateFormat"]'));
							expect(dateformat.isPresent()).toBeTruthy();

						var dateformat = element(by.css('[name="dateFormat"]'));
						dateformat.sendKeys(protractor.Key.TAB);

						var finishbutton = element(by.cssContainingText('.btn.btn-lg.btn-primary', 'Finish'));
						finishbutton.click();
					});

				it('should verify new account lands on homepage', function(){
						b.wait(ExpectedConditions.visibilityOf(element(by.css('#home-logo.home-logo'))), 15000);
						//b.wait(ExpectedConditions.visibilityOf(element(by.css('.waitlist'))), 15000);
						expect(b.getTitle()).toEqual('Brandboom | Home');
						//expect(element(by.css('#connect-ribbon')).getAttribute('value')).toContain('Waitlist #');
					});
				});
			});
