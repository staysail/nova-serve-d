//
// Copyright 2022 Staysail Systems, Inc.
//
// Distributed under the terms of the MIT license.

const Messages = require("./messages.js");
const Catalog = require("./catalog.js");
const ServeD = require("./served.js");
const Config = require("./config.js");
const Commands = require("./commands.js");
const Navigate = require("./navigate.js");
const Edits = require("./edits.js");
const Format = require("./format.js");
const GitHub = require("./github.js");
const Update = require("./update.js");
const Dub = require("./dub.js");
const Weka = require("./weka.js");
const Rename = require("./rename.js");
const Imports = require("./imports.js");
const Prefs = require("./prefs.js");
const State = require("./state.js");

exports.activate = function () {
  Prefs.register();
  Weka.register();
  Format.register();
  Imports.register();
  Navigate.register();
  Rename.register();
  Dub.register();
  Update.register();
  ServeD.register();

  // kick off signal to get everything running
  State.emitter.emit(State.events.onActivate);
};

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
  ServeD.deactivate();
  State.disposal.dispose();
};
