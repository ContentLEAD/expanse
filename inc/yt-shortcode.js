(function() {
    tinymce.create('tinymce.plugins.expanse', {
        init : function(ed, url) {
            ed.addButton('Shortcodes', {
                text: 'Shortcodes',
            type: 'listbox',
            icon: false,
            menu: [
                {
                    text: 'Row',
                    value: '[row]content[/row]',
                    onclick: function() {
                        ed.insertContent(this.value());
                    }
                },
                {
                    text: 'Full Width',
                    value: '[full]content[/full]',
                    onclick: function() {
                        ed.insertContent(this.value());
                    }
                },
                {
                    text: 'Half',
                    value: '[half]content[/half]',
                    onclick: function() {
                        ed.insertContent(this.value());
                    }
                },
                {
                    text: 'Third',
                    value: '[third]content[/third]',
                    onclick: function() {
                        ed.insertContent(this.value());
                    }
                },
                {
                    text: 'Fourth',
                    value: '[fourth]content[/fourth]',
                    onclick: function() {
                        ed.insertContent(this.value());
                    }
                }
            ]
            });
        },
        // ... Hidden code
    });
    // Register plugin
    tinymce.PluginManager.add( 'expanse', tinymce.plugins.expanse );
})();