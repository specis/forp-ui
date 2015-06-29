(function(forp, $) {

    forp.plugins.metrics = {
        'nav': {
            'label': 'export',
            'display': true,
            'enabled': function() {
                return (forp.getController().getStack().inspect == null);
            },
            'open': function(e) {
                // Some way to export current data easily
                var controller = forp.getController();

                controller.getConsole().show();
            },
            'close': function() {
                return forp.getController().getLayout().reduce;
            }
        }
    };
})(forp, jMicro);
