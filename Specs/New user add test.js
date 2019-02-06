
describe ('New user add', function(){
    var regForm = require('../PO/regForm.js');
    var usersList = require('../PO/usersList.js');
    var pageModal = require('../PO/pageModal.js');
    
    const fs = require('fs');
    let rawdata = fs.readFileSync('..\\boris.protractor\\Fixtures\\testData.json');
    let web = JSON.parse(rawdata);
    let userName = web["userName"];
    let userEmail = web["userEmail"];
    let userAddress = web["userAddress"];
    let defaultName = web["defaultName"];
    
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(5000);

    it('Input valid name, check add button', function(){
        browser.get('http://localhost:8080/TestAppExample/index');
        regForm.nameField.sendKeys(userName);
        expect(regForm.submitBtn.isEnabled()).toBe(false);

    });

    it('Input Address value. Check Add button', function () {
        regForm.addressField.sendKeys(userAddress);
        expect(regForm.submitBtn.isEnabled()).toBe(false);

    });

    it('Input valid Email. Check Add button', function(){
        regForm.emailField.sendKeys(userEmail);
        expect(regForm.submitBtn.isEnabled()).toBe(true);
    });

    it('Press Add button. Check Name form is empty', function(){
        regForm.submitBtn.click();
        expect(regForm.nameField.getText()).toEqual('');
    });

    it('Check the new user is added to the list', function(){
        
        usersList.nameValue.getText().then(function (nameValue) {
            expect(nameValue).toBe(userName, 'User is not added to the list');
        })
       
    });

    it('Clear the test data', function(){
        usersList.removeBtn.click();
        pageModal.modalConfirmBtn.click();
        
        usersList.nameValue.getText().then(function (nameValue) {
            expect(nameValue).toBe(defaultName, 'User is not deleted from the list');
        })
      
    });


});