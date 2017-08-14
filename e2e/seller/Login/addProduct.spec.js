describe('Seller:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
	//	browser.baseUrl = browser.baseUrl.replace('www', 'manage');
	});

	describe("Add product -", function(){

		var hasClass = function (element, cls) {
			return element.getAttribute('class').then(function (classes) {
				return classes.split(' ').indexOf(cls) !== -1;
			});
		};

		it('should load login page', function(){
			//Remove cookies
			browser.manage().deleteAllCookies();
			b.get('https://manage.brandboom.us/login');
			expect(b.getTitle()).toEqual("Brandboom | Brand Login");
		});

		it('should be able to login', function(){
			var email = element(by.css('[name="email"]'));
			email.sendKeys('addproduct@fakebrandboom.com');

			var password = element(by.css('[name="password"]'));
			password.sendKeys('Brandboom1');

			var loginButton = element(by.css('[name="submitButton"]'));
			loginButton.click();

			b.sleep(1000);
			expect(b.getTitle()).toEqual("Brandboom | Home");
		});

		it('should go to showroom', function(){
			var ran = Math.floor(Math.random()*1000)

        	b.wait(ExpectedConditions.visibilityOf(element(by.css("#main-header-left"))), 5000);
        	element(by.css("#main-header-left")).click();
         	b.sleep(1000);

					var showroom = element(by.xpath('.//*[@id="showroom_33184"]'));
					showroom.click();

					var addproductButton = element(by.xpath('//*[@id="product-btn-group"]/button[1]'));
					addproductButton.click();

					var styleidBox = element(by.css(".form-control.input-sm.style-number"));
					b.wait(ExpectedConditions.visibilityOf(styleidBox), 5000);
					styleidBox.click();

					var styleidBox = element(by.css(".style-cell.d-cell.cell"));
					b.wait(ExpectedConditions.visibilityOf(styleidBox), 5000);

				var styleidBox = browser.findElement(By.css(".style-cell.d-cell.cell"));
					styleidBox.click();
					styleidBox.sendKeys("SLMTEE" + ran);
b.sleep(1500);

					var optioncodeBox = browser.findElement(By.css(".option-code-cell.d-cell.cell"));
					optioncodeBox.click();
					optioncodeBox.sendKeys('DRKGRY' + ran);
					b.sleep(1500);

					var optionnameBox = browser.findElement(By.css(".opt-name-cell.d-cell.cell"));
					optionnameBox.click();
					optionnameBox.sendKeys('Dark Gray' + ran);

					b.sleep(3000);

					var changesizesButton = element.all(by.partialButtonText('Change Sizes'));
					changesizesButton.click();



					var ussizeBox = element(by.css('.list-group-item'));
					var EC = protractor.ExpectedConditions;
					browser.wait(EC.elementToBeClickable(ussizeBox), 5000);
					ussizeBox.click();



					var closeModal = element(by.css('.modal-close.glyphicons.glyphicons-remove-sign'));
					var EC = protractor.ExpectedConditions;
					browser.wait(EC.elementToBeClickable(closeModal), 5000);
					closeModal.click();
					//var ussizeBox = element(by.css('.list-group-item'));
					//ussizeBox.click();


					b.sleep(8000)
});
});
});
