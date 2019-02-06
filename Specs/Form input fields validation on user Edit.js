
describe('Form input fields validation on User Edit', function () {
    var regForm = require('../PO/regForm.js');
    var usersList = require('../PO/usersList.js');
    var pageModal = require('../PO/pageModal.js');
    
    const fs = require('fs');
    let rawdata = fs.readFileSync('../Fixtures/testData.json');
    let web = JSON.parse(rawdata);
    let userName = web["userName"];
    let userEmail = web["userEmail"];
    let userAddress = web["userAddress"];
    let name1 = web["name1"];
    let name2 = web["name2"];
    let validName = web["validName"];
    
    
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(7000);
    
    it('Add new user to Edit ', function () {
        browser.get('http://localhost:8080/TestAppExample/index');
        regForm.nameField.sendKeys(userName);
        regForm.addressField.sendKeys(userAddress);
        regForm.emailField.sendKeys(userEmail);
        regForm.submitBtn.click();
        usersList.nameValue.getText().then(function (nameValue) {
            expect(nameValue).toBe(userName, 'User is not added to the list');
        
        
        });
    });
    
    it('Press Edit button for the new added user ', function () {
        usersList.editBtn.click();
    
        let EC = ExpectedConditions;
        browser.wait(EC.textToBePresentInElementValue(regForm.nameField, userName), 7000);
        //expect(regForm.nameField.getText()).toEqual(userName);
        
    });
    
    it('Check the Value of Submit button', function () {
        expect(regForm.submitBtn.getAttribute('value')).toEqual('Update');
    });
    
    it('Check Reset button availability', function () {
        expect(regForm.refreshBtn.getAttribute('disabled')).toBe('true');
    });
    
    it('Clear the Name field', function(){
        regForm.nameField.clear();
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 0, 0, 1)');
        //expect(regForm.nameField.getAttribute('ng-dirty')).toBe(null);
    });
    
    it('Check Name form validation for 1 letter on Edit', function(){
        regForm.nameField.sendKeys(name1);
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
    });
    
    it('Update button availability', function () {
        expect(regForm.submitBtn.isEnabled()).toBe(false);
    });
    
    it('Check Name form validation for two letters on Edit', function(){
        regForm.nameField.clear();
        regForm.nameField.sendKeys(name2);
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 255, 0, 1)');
    });
    
    it('Check the Name form validation for correct value on Edit', function(){
        regForm.nameField.clear();
        regForm.nameField.sendKeys(validName);
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(144, 238, 144, 1)');
    });
    
    //No other forms check due to requirements: check validation only for Name field
    
    it('Reset all Forms on Edit', function(){
        regForm.refreshBtn.click();
        expect(regForm.nameField.getCssValue('background-color')).toEqual('rgba(255, 255, 255, 1)');
        
    });
    
    it('Check value of submit button after reset', function () {
        expect(regForm.submitBtn.getAttribute('value')).toEqual('Add');
    });
    
    it('Clear the test data', function(){
        usersList.removeBtn.click();
        pageModal.modalConfirmBtn.click();
        usersList.nameValue.getText().then(function (nameValue) {
            expect(nameValue).toBe('User3', 'User is not deleted from the list');
        })
        
    });
    
});
