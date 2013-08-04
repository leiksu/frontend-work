define(["knockout"], function (ko) {
    return function () {
        var ori = this;
        ori.firstName = ko.observable("Bert");
        ori.firstNameCaps = ko.computed(function () {
            return ori.firstName().toUpperCase();
        }, ori);
        ori.names = ko.observableArray([]);
        ori.add = function (ko) {
            ori.names.push(ko);
        };
        ori.remove = function () {
            ori.names.remove(this);
        };
        ori.count = ko.computed(function () {
            return ori.names().length;
        }, ori);
    };
});