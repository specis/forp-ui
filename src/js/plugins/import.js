(function(forp, $) {

    forp.plugins.import = {
        'nav': {
            'label': 'import',
            'display': true,
            'enabled': function() {
                //return (forp.getController().getStack().inspect == null);
                return false;
            },
            'open': function(e) {
                // Some way to export current data easily
                var controller = forp.getController();
                var $table = $.table(["Import Data"]);
                controller.getConsole().show($table);
            },
            'close': function() {
                return forp.getController().getLayout().reduce;
            }
        }
    };
})(forp, jMicro);