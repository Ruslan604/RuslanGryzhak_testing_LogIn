describe('Log in with password less than 5 characters.', function(){
	var email = element(by.id('email')),
		password = element(by.id('password')),
		btnLogIn = element(by.css('.btn-primary')),
		btnLogInHome = element(by.css('.btn-default--white'));
		
	beforeEach(function(){
		browser.get('https://www.tenantcloud.com/');
		btnLogInHome.click();
	});
	
	it('Error for field password', function(done){
		email.sendKeys('aaabbb@g.c');
		password.sendKeys('1');
		btnLogIn.click();
		browser.sleep(2000);
		
		expect(element(by.css('.error')).getText()).toEqual('The password must be at least 5 characters.');
		done();
	})
})