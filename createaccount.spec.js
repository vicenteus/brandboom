describe('Home:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
		var ran = Math.floor(Math.random()*100)
	});


	describe("Account Creation - ", function(){

					it('should load signup#1', function(){
							browser.driver.manage().deleteAllCookies();
							b.get(browser.baseUrl + '/signup#1');
							expect(b.getTitle()).toEqual('Brandboom | Signup');
						});


						it('should complete signup#1 info', function(){
							var firstname = element(by.css('[name="firstName"]'));
							firstname.sendKeys('Brandboom');

							var lastname = element(by.css('[name="lastName"]'));
							lastname.sendKeys('Tester');

							var phonenumber = element(by.css('[name="phoneNumber"]'));
							phonenumber.sendKeys('0001112222');

							var ran = Math.floor(Math.random()*100)
							var email = element(by.css('[name="email"]'));
							email.sendKeys('test' + ran + ran +'@fakebrandboom.com');

							var password1 = element(by.css('[name="newPassword"]'));
							password1.sendKeys('Brandboom1');

							var password2 = element(by.css('[name="confirmPassword"]'));
							password2.sendKeys('Brandboom1');

							//wait for green confirms on confirm pw boxes
							b.wait(ExpectedConditions.visibilityOf(element(by.xpath("//*[@id='create-account-form']/div[8]/div/i"))), 5000);
							var nextButton = element.all(by.xpath('.//*[.="Create Account"]')).first();
							nextButton.click();

							b.wait(ExpectedConditions.visibilityOf(element(by.xpath('.//*[.="Complete your account profile."]'))), 5000);

							});


						it('should complete signup2#2', function(){
							var ran = Math.floor(Math.random()*100)
							var businesstype = element(by.css('[name="businessType"]'));
							businesstype.sendKeys('b');

							var brandname = element(by.css('[name="showroomName"]'));
							brandname.sendKeys('TestBrand' + ran);

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

							var finish = element.all(by.xpath('.//*[.="Finish"]')).first();
							finish.click();
						});

							it('should land on homepage', function(){

							b.wait(ExpectedConditions.visibilityOf(element(by.css('#home-logo.home-logo'))), 10000);
							expect(b.getTitle()).toEqual('Brandboom | Home');
					});
				});
			});
