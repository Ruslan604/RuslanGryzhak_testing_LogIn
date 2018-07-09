describe('Check forgot password link', function(){
	var email = element(by.id('email')),
		btnLogInHome = element(by.css('.btn-default--white')),
		btnForgotPass = element(by.css('[ui-sref="auth.forgotPassword({email: $ctrl.item.email})"]'));
		
	beforeEach(function(){
		browser.get('https://www.tenantcloud.com/');
		btnLogInHome.click();
	});
	
	it('Check URL for "forgot password" link', function(done){
		email.sendKeys('ruslangryzhak@gmail.com');
		btnForgotPass.click();
		
		browser.sleep(2000);

		expect(browser.getCurrentUrl()).toEqual('https://home.tenantcloud.com/forgot-password?email=ruslangryzhak@gmail.com');
		
		done();
	})
})