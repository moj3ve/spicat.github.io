const VERSION_CHECK_SUPPORTED = "Your iOS version is compatible";
const VERSION_CHECK_NEEDS_UPGRADE = "You need to be at least on iOS %s";
const VERSION_CHECK_UNCONFIRMED = "Tweak is untested on iOS %s";
const VERSION_CHECK_UNSUPPORTED = "Tweak is only for iOS %s to %s";

// Carbon copy PoomSmart.github.io
(function(document) {
	"use strict";

	function toNum(bits) {
		return (10000 * parseInt(bits[0])) + parseInt((100 * (bits[1] ? bits[1] : 0))) + parseInt(bits[2] ? bits[2] : 0);
	}

	function parseVersionString(version) {
		var bits = version.split(".");
		return toNum(bits);
	}

	function compareVersions(one, two) {
		var two_ = toNum(two);
		return one != two_ ? (one > two_ ? 1 : -1) : 0;
	}

	var prerequisite = document.querySelector(".prerequisite"),
		version = navigator.appVersion.match(/CPU( iPhone)? OS (\d+)_(\d+)(_(\d+))? like/i);

	if (!prerequisite || !version) {
		return;
	}

	var osVersion = [ version[2], version[3], version[4] ? version[5] : 0 ],

		osString = osVersion[0] + "." + osVersion[1] + (osVersion[2] && osVersion[2] != 0 ? "." + osVersion[2] : ""),

		minString = prerequisite.dataset.minIos,
		maxString = prerequisite.dataset.maxIos,

		minVersion = parseVersionString(minString),
		maxVersion = maxString ? parseVersionString(maxString) : null,

		message = VERSION_CHECK_SUPPORTED,
		isBad = false;

	if (compareVersions(minVersion, osVersion) == 1) {
		message = VERSION_CHECK_NEEDS_UPGRADE.replace("%s", minString);
		isBad = true;
	} else if (maxVersion && compareVersions(maxVersion, osVersion) == -1) {
		if ("unsupported" in prerequisite.dataset) {
			message = VERSION_CHECK_UNSUPPORTED.replace("%s", minString).replace("%s", maxString);
		} else {
			message = VERSION_CHECK_UNCONFIRMED.replace("%s", osString);
		}

		isBad = true;
	}

    prerequisite.querySelector("p").innerHTML = message;

	if (isBad) {
		prerequisite.classList.add("info");
	}
})(document);
