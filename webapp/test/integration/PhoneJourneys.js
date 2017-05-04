jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"OpenTickets/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"OpenTickets/test/integration/pages/App",
	"OpenTickets/test/integration/pages/Browser",
	"OpenTickets/test/integration/pages/Master",
	"OpenTickets/test/integration/pages/Detail",
	"OpenTickets/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "OpenTickets.view."
	});

	sap.ui.require([
		"OpenTickets/test/integration/NavigationJourneyPhone",
		"OpenTickets/test/integration/NotFoundJourneyPhone",
		"OpenTickets/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});