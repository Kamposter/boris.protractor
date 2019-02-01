var util = require('util');

describe('UI elements layout', function () {
    var regForm = require('../PO/regForm.js');
    var usersList = require('../PO/usersList.js');
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(5000);

    it('Check Registration form presence', function(){
        browser.get('http://localhost:8080/TestAppExample/index');

        expect(regForm.regWindow.isPresent()).toBe(true);
    });

    it('Check Registration form heading',function(){
        expect(regForm.regHeadline.isPresent()).toBe(true);
    });

    it('Check Name form heading presence',function(){
        expect(regForm.nameHeadline.isPresent()).toBe(true);
    });

    it('Check Name form placeholder presence',function(){
        expect(regForm.nameField.getAttribute('placeholder')).toEqual('Enter your name');
    });

    it('Check Address form heading',function(){
        expect(regForm.addressHeadline.isPresent()).toBe(true);
    });

    it('Check Address form placeholder',function(){
        expect(regForm.addressField.getAttribute('placeholder')).toEqual('Enter your Address. [This field is validation free]');
    });

    it('Check Email form heading',function(){
        expect(regForm.emailHeadline.isPresent()).toBe(true);
    });

    it('Check Email form placeholder',function(){
        expect(regForm.emailField.getAttribute('placeholder')).toEqual('Enter your Email');
    });

    it('Check Add button presence',function(){
        expect(regForm.submitBtn.getAttribute('value')).toEqual('Add');
    });

    it('Check Reset forms button presence',function(){
        expect(regForm.refreshBtn.getText()).toEqual('Reset Form');
    });


    it('Check List of Users form presence',function(){
        expect(usersList.userTable.isPresent()).toBe(true);
    });

    it('Check List of Users heading', function () {
        expect(usersList.listHeadline.isPresent()).toBe(true);
    });

    it('Check Name column presence',function(){
        expect(usersList.nameCol.getText()).toEqual('Name');
    });

    it('Check Address column presence',function(){
        expect(usersList.addressCol.getText()).toEqual('Address');
    });

    it('Check Email column presence',function(){
        expect(usersList.emailCol.getText()).toEqual('Email');
    });

    /*it('Check Name input form tooltip',function(){  ??
        expect(regForm.nameField)
    });

    it('Check Email input form tooltip',function(){

    });*/
});

describe ('Form input fields validation', function(){
    var regForm = require('../PO/regForm.js');
    var usersList = require('../PO/usersList.js');
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(5000);

    it('Check Reset Form button availability before input', function () {
        //expect(regForm.refreshBtn.getAttribute('disabled')).toEqual('disabled'); ??
        expect(regForm.submitBtn.isEnabled()).toBe(false);
    });

    it('Check Name form validation for 1 letter', function(){
        regForm.nameField.sendKeys('a');
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
    });

    it('Check Name form validation for empty value', function(){
        regForm.nameField.clear();
        /*regForm.nameField.getCssValue('background-color').then(function(redColor){
            console.log('bg-color is: ' +redColor);
        })*/
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 0, 0, 1)');
    });

    it('Check Reset Form button availability after input', function () {
        expect(regForm.refreshBtn.getAttribute('disabled')).toBe(null);
    });

    it('Check Name form validation for two letters', function(){
        regForm.nameField.sendKeys('ab');
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
    });

    it('Check the Name form validation for correct value', function(){
        regForm.nameField.clear();
        regForm.nameField.sendKeys('abc');
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(144, 238, 144, 1)');
    });

    //email validation !!

    it('Reset all Forms', function(){
        regForm.refreshBtn.click();
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 255, 255, 1)');

    });

});

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