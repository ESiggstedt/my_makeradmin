import Backbone from 'backbone'

module.exports = Backbone.Model.fullExtend(
{
	idAttribute: "account_number",
	urlRoot: "/webshop/subscription",
	defaults: {
		created_at: "",
		updated_at: "",
		title: "",
		product_id: 0,
		date_start: "",
	},
});