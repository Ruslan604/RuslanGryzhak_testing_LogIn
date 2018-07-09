describe('Log in by unregistered users', function(){
	var email = element(by.id('email')),
		password = element(by.id('password')),
		btnLogIn = element(by.css('.btn-primary')),
		btnLogInHome = element(by.css('.btn-default--white'));
		
	beforeEach(function(){
		browser.get('https://www.tenantcloud.com/');
		btnLogInHome.click();
	});
	
	it('Unregistered users', function(done){
		email.sendKeys('aaabbb@gmail.com');
		password.sendKeys('12345');
		btnLogIn.click();
		
		browser.sleep(2000);
		browser.ignoreSynchronization = true;
		expect(element(by.css('.message')).getText()).toEqual('Sorry, wrong email address or password. Please try again');
		browser.ignoreSynchronization = false;
		
		browser.waitForAngular();
		done();
	})
})