var usersList = function(){


    this.userTable = element(by.css('.tablecontainer'));
    this.listHeadline = element.all(by.css('.lead')).last();
    this.nameCol = element.all(by.css('tr>th')).get(0);
    this.addressCol = element.all(by.css('tr>th')).get(1);
    this.emailCol = element.all(by.css('tr>th')).get(2);
    this.nameValue = element.all(by.css('.user-name-td')).last();
    this.editBtn = element.all(by.id('edit')).last();
    this.removeBtn = element.all(by.id('remove')).last();


};
module.exports = new usersList();