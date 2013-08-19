require.config({
	paths: {
		jquery: "lib/jquery",
		knockout: "lib/knockout"
	}
});

require(["knockout", "jquery", "appViewModel", "customHandlers", "domReady!"], function (ko, $, appViewModel) {

	var vm = new appViewModel();

	$(".addBtn").on("click", function () {
		vm.add({ name: ko.observable($("#name").val()) });
	});

	if(true) console.log('leiksu');

	ko.applyBindings(vm);
});

