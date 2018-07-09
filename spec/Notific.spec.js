describe('Testing notification on incorrect domain name for email or password less than 5 characters.', function(){
	var email = element(by.id('email')),
		password = element(by.id('password')),
		btnLogIn = element(by.css('.btn-primary')),
		btnLogInHome = element(by.css('.btn-default--white'));
	
	beforeEach(function(){
		browser.get('https://www.tenantcloud.com/');
		btnLogInHome.click();
	});
		
	it('Notification for invalid data', function(done){	
		email.sendKeys('a@b');
		password.sendKeys('1');
		btnLogIn.click();
				
		browser.sleep(2000);
		browser.ignoreSynchronization = true;
		expect(element(by.css('.message')).getText()).toEqual('The given data was invalid.');
		browser.ignoreSynchronization = false;
				
		browser.waitForAngular();
		done();
	})
})