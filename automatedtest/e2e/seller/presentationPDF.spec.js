describe('Seller:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	});

	describe("Download presentation PDF - ", function(){

			var hasClass = function (element, cls) {
				return element.getAttribute('class').then(function (classes) {
					return classes.split(' ').indexOf(cls) !== -1;
				});
			};

						it('should load login page', function(){
								browser.manage().deleteAllCookies();
								b.get('https://manage.brandboom.us/login');
								expect(b.getTitle()).toEqual("Brandboom | Brand Login");
							});

						it('should be able to login', function(){
								var email = element(by.css('[name="email"]'));
								email.sendKeys('generatepdf@fakebrandboom.com');

								var password = element(by.css('[name="password"]'));
								password.sendKeys('Brandboom1');

								var loginButton = element(by.css('[name="submitButton"]'));
								loginButton.click();

								b.wait(ExpectedConditions.visibilityOf(element(by.css('#home-logo.home-logo'))), 10000);
								expect(b.getTitle()).toEqual('Brandboom | Home');
							});

						it('should go to showroom', function(){
			        	b.wait(ExpectedConditions.visibilityOf(element(by.css("#main-header-left"))), 5000);
			        	element(by.css("#main-header-left")).click();



			        	b.wait(ExpectedConditions.visibilityOf(element(by.css('#showroom_33178'))), 5000);
			        	element(by.css("#showroom_33178")).click();
							});


						it('should open presentation', function(){
								var presentation = element.all(by.xpath('.//*[.="presentationPDF"]')).first();
								b.wait(ExpectedConditions.visibilityOf(presentation), 5000);
								presentation.click();
			    		});


			    	it('should download PDF', function(){
								//wait for products to be visible
								var productBlock = element(by.css(".products-block.clearfix.ui-sortable"));
								b.wait(ExpectedConditions.elementToBeClickable(productBlock), 5000);

								var pdfPage = element(by.css("button.pdf-button.btn.btn-xs.btn-primary"));
								b.wait(ExpectedConditions.elementToBeClickable(pdfPage), 5000);
								pdfPage.click();

								var pdfDownload = element(by.css("#download-pdf-bn"));
								b.wait(ExpectedConditions.elementToBeClickable(pdfDownload), 5000);
								pdfDownload.click();
							});


			    	it("should close the first tab and load PDF", function() {
			    			browser.getAllWindowHandles().then(function (handles) {
			        	// switch to PDF
			        	browser.switchTo().window(handles[1]);
								browser.wait(protractor.ExpectedConditions.urlContains("https://ec2.brandboom.us//data/tmp/pdf/33178-presentationPDF-"), 10000);
								browser.driver.close();
			        	// close PDF and switch to main tab
			        	browser.switchTo().window(handles[0]);
			        });
			        });
			});
		});
