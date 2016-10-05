describe('ViewModal', function() {
	this.timeout(3000);
	var data = [{name:"qtk"}];
	var viewModal = qtk.CollectionViewModal.create(data);
	viewModal.current = 0;

    it('get/set', viewModalTestGetSet.bind(viewModal));
    it('change', viewModalTestOnChange.bind(viewModal));
    it('remove', viewModalTestRemove.bind(viewModal));
    it('command', viewModalTestCommand.bind(viewModal));
    it('converter', viewModalTestConverter.bind(viewModal));
    it('validation', viewModalTestValidationRule.bind(viewModal));
})
