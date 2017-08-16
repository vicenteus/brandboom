describe('Seller:', function() {
	var b;

	beforeEach(function (){
		browser.ignoreSynchronization = true;
		b = browser.driver;
		browser.baseUrl = browser.baseUrl.replace('www', 'manage');
	});

	describe("Products/Showroom Page -", function(){

		var hasClass = function (element, cls) {
			return element.getAttribute('class').then(function (classes) {
				return classes.split(' ').indexOf(cls) !== -1;
			});
		};

		it('should load login page', function(){
			//Remove cookies
			browser.manage().deleteAllCookies();
			browser.driver.manage().window().maximize();
			b.get(browser.baseUrl + '/login');
			expect(b.getTitle()).toEqual("Brandboom | Brand Login");
		});

		it('should be able to login', function(){
			var email = element(by.css('[name="email"]'));
			email.sendKeys('seleniumbrandboom@gmail.com');

			var password = element(by.css('[name="password"]'));
			password.sendKeys('Brandboom1');

			var loginButton = element(by.css('[name="submitButton"]'));
			loginButton.click();

			b.sleep(1000);
			expect(b.getTitle()).toEqual("Brandboom | Home");
		});

		it('should go to showroom products', function(){
        	b.wait(ExpectedConditions.visibilityOf(element(by.css("#main-header-left > a"))), 5000);
        	element(by.css("#main-header-left > a")).click();
        	b.wait(ExpectedConditions.visibilityOf(element(by.css("#showroom_29651 > div.sb-title > div"))), 5000);
        	element(by.css("#showroom_29651 > div.sb-title > div")).click();
        	//b.wait(ExpectedConditions.visibilityOf(element(by.css("#showroom_29651"))), 5000);
        	//element(by.css("#showroom_29651")).click();
        	b.sleep(1000);



		});

//Verify Presentation Sidebar
		it("should verify presentation dropdown", function() {
			b.wait(ExpectedConditions.visibilityOf(element(by.css("#presentations-button"))), 5000);
			element(by.css("#presentations-button")).click();
			b.wait(ExpectedConditions.invisibilityOf(element(by.css("#all-groups"))), 5000);
			b.sleep(1000);
			element(by.css("#presentations-button")).click();
			b.sleep(1000);
        });

        it("should verify newest presentations", function() {
        	b.wait(ExpectedConditions.visibilityOf(element(by.css("#recent-groups > div.folder-section-header.folder > span.folder-name.bold"))), 5000);
			element(by.css("#recent-groups > div.folder-section-header.folder > span.folder-name.bold")).click();
			b.wait(ExpectedConditions.invisibilityOf(element(by.css("#group_218697_recent > div.grp-info.dojoDndHandle"))), 5000);
			b.sleep(1000);
        	b.wait(ExpectedConditions.visibilityOf(element(by.css("#recent-groups > div.folder-section-header.folder > span.folder-name.bold"))), 5000);
			element(by.css("#recent-groups > div.folder-section-header.folder > span.folder-name.bold")).click();
			b.sleep(1000);
		});


        it("should verify all presentations", function() {
        	b.wait(ExpectedConditions.visibilityOf(element(by.css("#all-groups"))), 5000);
        	element(by.css("#all-groups")).click();
        	b.sleep(4000);
		});


//Verify Sub-header
		it("should select all checkbox", function() {
			b.wait(ExpectedConditions.visibilityOf(element(by.css("#product-toolbar > div:nth-child(1)"))), 5000);
			element(by.css("#product-toolbar > div:nth-child(1)")).click();
			b.sleep(1000);
			b.wait(ExpectedConditions.visibilityOf(element(by.css("#product-toolbar > div:nth-child(1)"))), 5000);
			element(by.css("#product-toolbar > div:nth-child(1)")).click();
			b.sleep(3000);
		});


		it("should change status dropdown", function() {
			b.wait(ExpectedConditions.visibilityOf(element(by.css("#product-toolbar > div:nth-child(1) > button"))), 5000);
			element(by.css("#product-toolbar > div:nth-child(1) > button")).click();
			b.sleep(1000);
			b.wait(ExpectedConditions.visibilityOf(element(by.css("#product-toolbar > div:nth-child(1) > button"))), 5000);
			element(by.css("#product-toolbar > div:nth-child(1) > button")).click();
			b.sleep(3000);
		});


		it("should save-button", function() {
			b.wait(ExpectedConditions.visibilityOf(element(by.css("#save-button"))), 5000);
			element(by.css("#save-button")).click();
			b.sleep(1500);
		});


		it("should more dropdown", function() {
			element(by.css("#product-btn-group > button.btn.btn-default.btn-sm.navbar-btn.btn-caret.dropdown-toggle")).click();
			expect(element(by.css("#product-btn-group > ul")).isPresent()).toBe(true); //dropdown opens
			b.sleep(500);
			element(by.css("#product-btn-group > button.btn.btn-default.btn-sm.navbar-btn.btn-caret.dropdown-toggle")).click();
			b.sleep(2000);
		});


//Verify Product and Product Info on Product page
				//Product1

		it("should have product_01 image", function() {
			expect(element(by.css("#obj_2696824 > div > div.product-image-box > div > div > div > img")).isPresent()).toBe(true);
		});


		it("should have product_01 name", function() {
			expect(element(by.css("#obj_2696824 > div > div.obj-info > div > div.obj-name")).getText()).toContain("White Boom Sweater");
		});


		it("should have product_01 Style ID and Option", function() {
			expect(element(by.css("#obj_2696824 > div > div.obj-info > div > div.obj-num")).getText()).toContain("BOOM1705");
		});


		it("should have product_01 Price", function() {
			expect(element(by.css("#obj_2696824 > div > div.product-numbers > div > span")).getText()).toContain("85.00");
		});

	//			it("should have product_01 Inventory", function() {
//expect(element(by.css("#obj_2696824 > div > div.product-numbers > span > span:nth-child(1)")).getText()).toContain("o0o09i");

//b.sleep(6000);

//});
});


		});
