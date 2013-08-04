
define(function (require) {
	
	// Import depdendencies.
 	var vm = require("../appViewModel.js");
 	
 	QUnit.module("appViewModel");

	var vmObj = new vm();
	
	var dataGroup1 = ['leiksu0', 'leiksu1'];
	
	var dataGroup2 = ['leiksu2', 'leiksu3', 'leiksu4'];
	
	QUnit.test( "appViewModel counter test", function() {
	 	
		for (var i = 0; i < dataGroup1.length ; i++) {
			vmObj.add({ name: dataGroup1[i] });
		}
			
		QUnit.equal(vmObj.count(), 2); 	
		
		for (var i = 0; i < dataGroup2.length ; i++) {
			vmObj.add({ name: dataGroup2[i] });
		}
		
		QUnit.equal(vmObj.count(), 5); 		
	});
});
