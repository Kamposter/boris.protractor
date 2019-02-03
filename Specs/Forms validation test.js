var util = require('util');

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