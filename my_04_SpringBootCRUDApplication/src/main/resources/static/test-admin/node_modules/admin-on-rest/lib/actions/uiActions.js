'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var TOGGLE_SIDEBAR = exports.TOGGLE_SIDEBAR = 'AOR/TOGGLE_SIDEBAR';

var toggleSidebar = exports.toggleSidebar = function toggleSidebar() {
    return {
        type: TOGGLE_SIDEBAR
    };
};

var SET_SIDEBAR_VISIBILITY = exports.SET_SIDEBAR_VISIBILITY = 'AOR/SET_SIDEBAR_VISIBILITY';

var setSidebarVisibility = exports.setSidebarVisibility = function setSidebarVisibility(isOpen) {
    return {
        type: SET_SIDEBAR_VISIBILITY,
        payload: isOpen
    };
};

var REFRESH_VIEW = exports.REFRESH_VIEW = 'AOR/REFRESH_VIEW';

var refreshView = exports.refreshView = function refreshView() {
    return {
        type: REFRESH_VIEW
    };
};