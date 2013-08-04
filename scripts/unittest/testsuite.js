(function () {

    // Defer Qunit so RequireJS can work its magic and resolve all modules.
    QUnit.config.autostart = false;

    // Configure RequireJS so it resolves relative module paths from the 'lib'
	// folder.
    require.config({
        baseUrl: "../lib",
    });


	var testModules = [
		"appViewModelTests.js"
	];

    // Resolve all testModules and then start the Counter Test.
	require(testModules, QUnit.start);
}());