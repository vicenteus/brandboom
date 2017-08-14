describe('Seller:', function() {
	var b;
	var EC = ExpectedConditions;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
		browser.baseUrl = browser.baseUrl.replace('www', 'manage');
	});

			describe("BeforeTests - ", function(){

					// var hasClass = function (element, cls) {
					// 	return element.getAttribute('class').then(function (classes) {
					// 		return classes.split(' ').indexOf(cls) !== -1;
					// 	});
					// };

							it('should load login page', function(){
									browser.manage().deleteAllCookies();
									b.get(browser.baseUrl + '/login');
									expect(b.getTitle()).toEqual('Brandboom | Brand Login');
								});

							it('should be able to login', function(){
									var email = element(by.css('[name="email"]'));
									email.sendKeys('sellerorder@fakebrandboom.com');

									var password = element(by.css('[name="password"]'));
									password.sendKeys('Brandboom1');

									var loginButton = element(by.css('[name="submitButton"]'));
									loginButton.click();

									b.wait(EC.visibilityOf(element(by.css('#home-logo.home-logo'))), 10000);
									expect(b.getTitle()).toEqual('Brandboom | Home');
								});


							it('should go to showroom', function(){
									b.wait(EC.visibilityOf(element(by.css("#main-header-left"))), 5000);
									element(by.css("#main-header-left")).click();

									b.wait(EC.visibilityOf(element(by.css('#showroom_33187'))), 5000);
									element(by.css("#showroom_33187")).click();
								});
							});

			describe("Create Processing Order - ", function(){

							it("should add product to Open Order", function(){
									var product = element(by.css('#obj_3024037'));
									b.wait(EC.elementToBeClickable(product), 5000);
									product.click();

									var orderButton = element(by.css('#order-btn-group > button:nth-child(1) > em:nth-child(2)'));
									orderButton.click();
								});


							it("should switch to Open Order tab", function() {
					    		browser.getAllWindowHandles().then(function (handles) {
					        // close the first tab and switch to open order tab
				        	browser.switchTo().window(handles[1]);
									b.wait(EC.visibilityOf(element(by.css('.product-row-3024037.product-row.style-BOOM1705.empty'))), 20000);
				        });
									expect(b.getTitle()).toEqual('seller order | Open Order');
					    	});

							it("should add brand information", function(){

									var brandInfo =	element(by.css("#order-form > div.info-section > div > div:nth-child(1) > div.info-block.info-block-brand.edit-node > textarea"));
									brandInfo.sendKeys("This is Brand information text");
								});

							it("should add buyer information", function(){
									var firstName =	element(by.css("#order-form > div.info-section > div > div:nth-child(2) > div.info-block.compact > div.form-horizontal > div:nth-child(1) > div > input"));
									firstName.sendKeys("Firstname Lastname");

									var email = element(by.css("#order-form > div.info-section > div > div:nth-child(2) > div.info-block.compact > div.form-horizontal > div:nth-child(2) > div > input"));
									email.sendKeys("vicente@brandboom.com");

									var phone =	element(by.css("#order-form > div.info-section > div > div:nth-child(2) > div.info-block.compact > div.form-horizontal > div:nth-child(3) > div > input"));
									phone.sendKeys("1234567890");

									var fax =	element(by.css("#order-form > div.info-section > div > div:nth-child(2) > div.info-block.compact > div.form-horizontal > div.form-group.form-group-sm.edit-node.last-row > div > input"));
									fax.sendKeys("0987654321");
								});


							it("should add billing and shipping address", function(){

									var editBilling = element(by.css("#order-form > div.info-section > div > div:nth-child(2) > div:nth-child(2) > div.header > a"));
									editBilling.click();
					       	b.wait(ExpectedConditions.visibilityOf(element(by.css("#location-edit > div > div > div.modal-body.clearfix > form > div > div:nth-child(1) > div > input"))), 5000);

									var companyName = element(by.css("#location-edit > div > div > div.modal-body.clearfix > form > div > div:nth-child(1) > div > input"));
									companyName.sendKeys("This is Company Name");

									var address1 = element(by.css("#location-edit > div > div > div.modal-body.clearfix > form > div > div:nth-child(2) > div > input"));
									address1.sendKeys("Address 1 Box");

									var address2 = element(by.css("#location-edit > div > div > div.modal-body.clearfix > form > div > div:nth-child(3) > div > input"));
									address2.sendKeys("Address 2 Box");

									var city = element(by.css("#location-edit > div > div > div.modal-body.clearfix > form > div > div:nth-child(4) > div > input"));
									city.sendKeys("City Box");

								  var state = element(by.css("div.form-group:nth-child(5) > div:nth-child(2) > input:nth-child(1)"));
									state.sendKeys("ca");

									var postalCode = element(by.css("#location-edit > div > div > div.modal-body.clearfix > form > div > div:nth-child(6) > div > input"));
									postalCode.click();
									postalCode.sendKeys("90734");

									var country = element(by.css('div.form-group:nth-child(7) > div:nth-child(2) > input:nth-child(1)'));
									country.sendKeys('United States');

									var changeButton = element(by.cssContainingText('.btn.btn-sm.btn-primary', 'Change'));
									changeButton.sendKeys(protractor.Key.ENTER);
								});


							it("should add shipping information", function(){
									var shipDate = element(by.css("#order-form > div.info-section > div > div:nth-child(3) > div.info-block.info-block-shipping > div.form-horizontal > div:nth-child(1) > div > input"));
		        			b.wait(ExpectedConditions.visibilityOf(shipDate), 5000);
		        			shipDate.sendKeys("05/01/2017");

									var cancelDate = element(by.css(".cancel-date-field"));
									cancelDate.sendKeys("05/01/2017");

									var method = element(by.css("#order-form > div.info-section > div > div:nth-child(3) > div.info-block.info-block-shipping > div.form-horizontal > div:nth-child(3) > div > input"));
									method.sendKeys("FEDEX");

									var instructions = element(by.css("#order-form > div.info-section > div > div:nth-child(3) > div.info-block.info-block-shipping > div.form-group.form-group-sm.edit-node.last-row > div > textarea"));
									instructions.sendKeys("This is the instructions box under Shipping Information");
								});


							it("should add terms information", function(){
									var terms = element(by.css("select.form-control:nth-child(1)"));
									terms.sendKeys("c");

									var poBox =	element(by.css("#order-form > div.info-section > div > div:nth-child(3) > div.info-block.info-block-terms > div > div.form-group.form-group-sm.edit-node.last-row > div > input"));
									poBox.sendKeys("This is PO # 000111222");
								});


							it("should add custom information", function(){
									var customField =	element(by.css("#order-form > div.info-section > div > div:nth-child(4) > div > div > div > textarea"));
									customField.sendKeys("This is the comment box. The quick brown fox jumped over the white picket fence.");
								});

							it("should add product - all sizes", function(){
									var cell1 = element(by.css("div.xcell:nth-child(1)"));
									cell1.click();
									cell1.sendKeys("5");

									var cell2 = element(by.css("div.tabable:nth-child(2)"));
									cell2.click();
									cell2.sendKeys("5");

									var cell3 = element(by.css("div.tabable:nth-child(3)"));
									cell3.click();
									cell3.sendKeys("5");

									var cell4 = element(by.css("div.tabable:nth-child(4)"));
									cell4.click();
									cell4.sendKeys("5");

								// browser.findElement(By.css("div.xcell:nth-child(1) > div:nth-child(1) > div:nth-child(3)")).click();
								// browser.actions().sendKeys("5").perform();
								//
								// browser.findElement(By.css("div.tabable:nth-child(2) > div:nth-child(1) > div:nth-child(3)")).click();
								// browser.actions().sendKeys("5").perform();
								//
								// browser.findElement(By.css("div.tabable:nth-child(3) > div:nth-child(1) > div:nth-child(3)")).click();
								// browser.actions().sendKeys("5").perform();
								//
								// browser.findElement(By.css("div.tabable:nth-child(4) > div:nth-child(1) > div:nth-child(3)")).click();
								// browser.actions().sendKeys("5").perform();
							});


							it("should add terms of sale", function(){
									var terms = element(by.css("#order-form > div.order-content > div > div.order-end.clearfix.row > div.order-terms-col.col-sm-7 > div > div.ot-body.edit-node > textarea"));
									terms.click();
									terms.sendKeys("This is the terms of sale box. A lot of stuff should be entered in this box");
								});

							it("should place order", function(){
									var placeOrder = browser.findElement(by.css("#place-btn"));
									placeOrder.click();

									var confirm = element(by.css("#cms-order > div.modal.fade.in > div > div > div.modal-footer.clearfix > button.btn.btn-primary.btn-sm"));
									b.wait(ExpectedConditions.visibilityOf(confirm), 15000);
									confirm.click();

									var ordersPage = element(by.css("#cms-orders > div.col-xs-11.col-sm-4.alert.alert-brandboom-warning > span:nth-child(4)"));
									b.wait(ExpectedConditions.visibilityOf(ordersPage), 15000);
									expect(b.getTitle()).toEqual("seller order | Orders");
								});
							});
						});
