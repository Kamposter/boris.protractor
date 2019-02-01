var pageModal = function(){


    this.deleteModal = element(by.css('.modal-content'));
    this.modalContent = element(by.css('.control-lable .ng-binding'));
    this.modalConfirmBtn = element(by.css('#ok'));
    this.modalCancelBtn = element(by.css('#cancel'));

};
module.exports = new pageModal();