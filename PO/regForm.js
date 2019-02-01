var regForm = function(){

    this.regWindow = element (by.css('.formcontainer'));
    this.regHeadline = element.all(by.css('.lead')).get(0);
    this.nameHeadline = element.all(by.css('.col-md-2')).first();
    this.addressHeadline = element.all(by.css('.col-md-2')).get(1);
    this.emailHeadline =  element.all(by.css('.col-md-2')).get(2);
    this.nameField = element (by.id('uname'));
    this.addressField = element (by.id('address'));
    this.emailField = element (by.id('email'));
    this.submitBtn = element (by.id('submit'));
    this.refreshBtn = element (by.id('reset'));

};
module.exports = new regForm();