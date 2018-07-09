exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  capabilities: {
    'browserName': 'chrome'
  },
  
specs: ['spec/unReg.spec.js', 'spec/errLenght.spec.js', 'spec/Notific.spec.js', 'spec/errEmail.spec.js', 'spec/forgotPass.spec.js'],
  
};