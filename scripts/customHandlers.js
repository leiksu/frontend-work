define(["knockout", "jquery"], function (ko, $) {
    
    ko.bindingHandlers.editableRow = {
        init: function (element, valueAccessor) {
            $(element).find(".editRow").hide().end().find(".detailRow").show();
            
            $(element).find(".editBtn").on("click", function () {
                $(element).find(".editRow, .detailRow").toggle();
            });
            
            $(element).find(".updateBtn").on("click", function () {
                $(element).find(".editRow, .detailRow").toggle();
            });
            
            $(element).find(".cancelBtn").on("click", function () {
                $(element).find(".editRow, .detailRow").toggle();
            });
        },
        update: function () {}
    };
});