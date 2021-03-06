(function(forp, $) {

    forp.plugins.export = {
        'nav': {
            'label': 'export',
            'display': true,
            'enabled': function() {
                //return (forp.getController().getStack().inspect == null);
                return false;
            },
            'open': function(e) {
                // Some way to export current data easily
                var controller = forp.getController();
                var $table = $.table(["Export Data"]);
                $table.line([controller.getStack().getRawStack()]);
                controller.getConsole().show($table);
            },
            'close': function() {
                return forp.getController().getLayout().reduce;
            }
        }
    };
})(forp, jMicro);
