describe('Log in with incorrect domain name for email', function(){
	var email = element(by.id('email')),
		password = element(by.id('password')),
		btnLogIn = element(by.css('.btn-primary')),
		btnLogInHome = element(by.css('.btn-default--white'));
		
	beforeEach(function(){
		browser.get('https://www.tenantcloud.com/');
		btnLogInHome.click();
	});
	
	it('Incorrect domain name for email', function(done){
		email.sendKeys('b@c');
		password.sendKeys('12345');
		btnLogIn.click();
		browser.sleep(2000);
		
		expect(element(by.css('.error')).getText()).toEqual('Must be a valid email address.');
		done();
	})
})