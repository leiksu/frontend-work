define(["knockout"], function (ko) {
    return function () {
        this.firstName = ko.observable("Bert");
        this.firstNameCaps = ko.computed(function () {
            return this.firstName().toUpperCase()
        }, this);
        this.names = ko.observableArray([]);
        this.add = function (ko) {
            this.names.push(ko);
        };
        this.remove = function () {
            this.names.remove(this);
        };
        this.count = ko.computed(function () {
            return this.names().length;
        }, this);
    }
});