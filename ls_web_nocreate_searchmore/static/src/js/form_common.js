odoo.define('ls_nocreate_searchmore.form_common', function (require) {
  "use strict";
  // require original module JS
  var form_common = require('web.form_common');
  var Model = require('web.Model');

  // Extend widget
  form_common.SelectCreateDialog.include({
    init: function (parent, options) {
      this._super(parent, options);

      self = this;
      (new Model("ir.config_parameter"))
        .query(["key", "value"]).filter([['key', '=', 'ls_nocreate_searchmore.active']])
        .all().then(function (records) {
        _(records).each(function (record) {
          if (self.is_option_set((record.value))) {
            self.options.no_create = true;
          }
        });
      });
    },

    is_option_set: function (option) {
      if (_.isUndefined(option)) {
        return false
      }
      var is_string = typeof option === 'string';
      var is_bool = typeof option === 'boolean';
      if (is_string) {
        return option === 'true' || option === 'True'
      } else if (is_bool) {
        return option
      }
      return false
    }
  });

});
