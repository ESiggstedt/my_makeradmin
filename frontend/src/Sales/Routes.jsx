module.exports = {
	childRoutes: [
		{
			path: "/sales",
			indexRoute: {
				component: require("./Pages/Overview"),
			},
			childRoutes: [
				{
					path: "overview",
					component: require("./Pages/Overview"),
				},
				{
					path: "product",
					component: require("./Pages/Product/List"),
				},
				{
					path: "product/add",
					component: require("./Pages/Product/Add"),
				},
				{
					path: "product/:id",
					component: require("./Pages/Product/Edit"),
				},
				{
					path: "order",
					component: require("./Pages/Order/List"),
				},
				{
					path: "order/:id",
					component: require("./Pages/Order/View"),
				},
				{
					path: "subscription",
					component: require("./Pages/Subscription/List"),
				},
				{
					path: "history",
					component: require("./Pages/History"),
				},
			]
		}
	]
}