// Copyright (c) 2019, Hardik gadesha and contributors
// For license information, please see license.txt

frappe.ui.form.on('Barcode Print', {
	refresh: function(frm) {

	}
});

cur_frm.add_fetch("item_code","barcode","barcode")
cur_frm.add_fetch("item_code","item_name","item_name")
cur_frm.add_fetch("item_code","standard_rate","item_price")
