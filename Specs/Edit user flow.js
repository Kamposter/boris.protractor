
describe('Edit user flow', function () {
    var regForm = require('../PO/regForm.js');
    var usersList = require('../PO/usersList.js');
    var pageModal = require('../PO/pageModal.js');
    
    const fs = require('fs');
    let rawdata = fs.readFileSync('..\\Fixtures\\testData.json');
    let web = JSON.parse(rawdata);
    let userName = web["userName"];
    let userEmail = web["userEmail"];
    let userAddress = web["userAddress"];
    let name1 = web["name1"];
    let name2 = web["name2"];
    let validName = web["validName"];
    let newName = web["newUserName"];
    let defaultName = web["defaultName"];
    
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
    
    it('Input new valid name, check Update button', function(){
        regForm.nameField.clear();
        regForm.nameField.sendKeys(newName);
        expect(regForm.submitBtn.isEnabled()).toBe(true);
        
    });
    
    it('Check the user was edited in the list', function(){
        regForm.submitBtn.click();
        usersList.nameValue.getText().then(function (nameValue) {
            expect(nameValue).toBe(newName, 'User was not edited');
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
