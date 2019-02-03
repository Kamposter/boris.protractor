var util = require('util');

describe ('New user add', function(){
    var regForm = require('../PO/regForm.js');
    var usersList = require('../PO/usersList.js');
    var pageModal = require('../PO/pageModal.js');
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(5000);

    it('Input valid name, check add button', function(){
        browser.get('http://localhost:8080/TestAppExample/index');
        regForm.nameField.sendKeys('user4');
        expect(regForm.submitBtn.isEnabled()).toBe(false);

    });

    it('Input Address value. Check Add button', function () {
        regForm.addressField.sendKeys('user4');
        expect(regForm.submitBtn.isEnabled()).toBe(false);

    });

    it('Input valid Email. Check Add button', function(){
        regForm.emailField.sendKeys('user4@123.com');
        expect(regForm.submitBtn.isEnabled()).toBe(true);
    });

    it('Press Add button. Check Name form is empty', function(){
        regForm.submitBtn.click();
        //browser.sleep(5000);
        expect(regForm.nameField.getText()).toEqual('');
    });

    it('Check the new user is added to the list', function(){
        expect(usersList.nameValue.getText()).toEqual('user4');
    });

    it('Clear the test data', function(){
        usersList.removeBtn.click();
        pageModal.modalConfirmBtn.click();
        expect(usersList.nameValue.getText()).toEqual('User3');
    });


});