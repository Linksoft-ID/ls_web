odoo.define('ls_web_show_dbname.UserMenu', function (require) {
"use strict";

	var session = require('web.session');
	var UserMenu = require('web.UserMenu');

	UserMenu.include({
	    do_update: function () {
	        this._super();
	        window.$toggleMenu = this.$('.dropdown-toggle');
	        $toggleMenu.attr('title', session.db);
	    }
	})

});