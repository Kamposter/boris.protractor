
describe('User Remove flow', function () {
    
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
    
    it('Press Remove button. Verify the Remove modal is opened', function () {
        usersList.removeBtn.click();
        expect(pageModal.deleteModal.isDisplayed()).toBe(true);
    });
    
    it('Compare the name in the modal is the same as the chosen users name', function () {
        let EC = ExpectedConditions;
        browser.wait(EC.textToBePresentInElementValue(pageModal.modalContent, userName), 7000);
    });
    
    it('Press Cancel button', function () {
        pageModal.modalCancelBtn.click();
        expect(pageModal.deleteModal.isDisplayed()).toBe(false);
    });
    
    
    it('Delete the user and verify it was removed from the users list', function(){
        usersList.removeBtn.click();
        pageModal.modalConfirmBtn.click();
        usersList.nameValue.getText().then(function (nameValue) {
            expect(nameValue).toBe(defaultName, 'User is not deleted from the list');
        })
        
    });
});