jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TICKETSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"OpenTickets/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"OpenTickets/test/integration/pages/App",
	"OpenTickets/test/integration/pages/Browser",
	"OpenTickets/test/integration/pages/Master",
	"OpenTickets/test/integration/pages/Detail",
	"OpenTickets/test/integration/pages/Create",
	"OpenTickets/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "OpenTickets.view."
	});

	sap.ui.require([
		"OpenTickets/test/integration/MasterJourney",
		"OpenTickets/test/integration/NavigationJourney",
		"OpenTickets/test/integration/NotFoundJourney",
		"OpenTickets/test/integration/BusyJourney",
		"OpenTickets/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});