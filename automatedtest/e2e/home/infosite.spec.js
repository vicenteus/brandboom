describe('Main:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	});




	describe("Infosite Footer links -", function(){

					it('should navigate to infosite', function(){
								browser.driver.manage().deleteAllCookies();
		            b.get(browser.baseUrl);
		            expect(b.getTitle()).toEqual('Brandboom | Line Sheet Sales Tool, iPad Sales Tool, and Order Management');
		        });


					it('should navigate to build your catalog', function(){
									b.get(browser.baseUrl);
									var brandboomconnect = element(by.xpath('.//*[.="Brandboom Connect"]'));
									brandboomconnect.click();
									expect(b.getTitle()).toEqual('Brandboom Connect | Find and connect with wholesale retail buyers');
								});

								it('should navigate to pricing', function(){
											b.get(browser.baseUrl);
											var pricing = element(by.xpath('.//*[.="Pricing"]'));
											pricing.click();
											expect(b.getTitle()).toEqual('Brandboom | Plans & Pricing');
										});

										it('should navigate to resources', function(){
													b.get(browser.baseUrl);
													var resources = element(by.xpath('.//*[.="Resources"]'));
													resources.click();
													expect(b.getTitle()).toEqual('Line Sheet Resources - Wholesale Resources and Guides');
												});


										it('should navigate to api docs', function(){
													b.get(browser.baseUrl);
													var apidocs = element(by.xpath('.//*[.="API Docs"]'));
													apidocs.click();
													expect(b.getTitle()).toEqual('Brandboom | API Document');
												});


												it('should request a demo popup', function(){
															b.get(browser.baseUrl);
															var requestademo = element(by.xpath('.//*[.="Request a Demo"]'));
															requestademo.click();
															var calendlyPopup2 = element(by.css('.calendly-popup-content'));
															expect(calendlyPopup2.isPresent()).toBeTruthy();
														});


														it('should navigate to support portal', function(){
																	b.get(browser.baseUrl);
																	var supportportal = element(by.xpath('.//*[.="Support Portal"]'));
																	supportportal.click();
																	expect(b.getTitle()).toEqual('Brandboom Help Center');
																});


																it('should display brandboom email and phone', function(){
																	b.get(browser.baseUrl);
																	var email = element(by.xpath('.//*[.="sales@brandboom.com"]'));
																	expect(email.isPresent()).toBeTruthy();
																	var number = element(by.xpath('.//*[.="1.888.988.8483"]'));
																	expect(number.isPresent()).toBeTruthy();
																});


																it('should navigate to terms', function(){
																			b.get(browser.baseUrl);
																			var terms = element(by.xpath('.//*[.="Terms"]'));
																			terms.click();
																			expect(b.getTitle()).toEqual('Brandboom | Terms');
																		});


																it('should navigate to privacy', function(){
																			b.get(browser.baseUrl);
																			var privacy = element(by.xpath('.//*[.="Privacy"]'));
																			privacy.click();
																			expect(b.getTitle()).toEqual('Brandboom | Privacy Policy');
																		});

																		it('should navigate to buyer login', function(){
																					b.get(browser.baseUrl);
																					var loginButton = element(by.xpath('.//*[.="Login"]'));
																					loginButton.click();
																					var buyerLogin = element.all(by.xpath('.//*[.="Buyer Login"]')).first();
																					buyerLogin.click();
																					expect(b.getTitle()).toEqual('Brandboom | Buyer Login');
																				});


																		it('should navigate to seller login', function(){
																					b.get(browser.baseUrl);
																					var loginButton = element(by.xpath('.//*[.="Login"]'));
																					loginButton.click();
																					var sellerButton = element.all(by.xpath('.//*[.="Seller Login"]')).first();
																					sellerButton.click();
																					expect(b.getTitle()).toEqual('Brandboom | Brand Login');
																				});


																		it('should navigate signupfree_1', function(){
																					b.get(browser.baseUrl);
																					var signupfreeButton = element.all(by.xpath('.//*[.="Sign Up Free"]')).first();
																					signupfreeButton.click();
																					expect(b.getTitle()).toEqual('Brandboom | Signup');
																				});


																		it('should open demo_1', function(){
																					b.get(browser.baseUrl);
																					var demoButton = element.all(by.xpath('.//*[.="Demo"]')).first();
																					demoButton.click();

																					var calendlyPopup1 = element(by.css('.calendly-popup-content'));
																					expect(calendlyPopup1.isPresent()).toBeTruthy();
																				});


																		it('should navigate signupfree_2', function(){
																					b.get(browser.baseUrl);
																					var signupfreeButton2 = element.all(by.xpath('.//*[.="Sign Up Free"]')).last();
																					signupfreeButton2.click();
																					expect(b.getTitle()).toEqual('Brandboom | Signup');
																				});

					});
				});
