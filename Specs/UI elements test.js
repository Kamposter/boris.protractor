
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