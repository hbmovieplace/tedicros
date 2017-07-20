"use strict";

/**************************
 * Import important stuff *
 **************************/

const Logger = require("./Logger");

const settings = require("./settings");

/************************
 * The Application data *
 ************************/

const Application = {
	settings,
	logger: new Logger()
};

/*********************
 * Export the object *
 *********************/

module.exports = Application;