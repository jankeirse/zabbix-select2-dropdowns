// ==UserScript==
// @name         replace zabbix dropdowns with select2 dropdowns
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  make zabbix useable in large deployments
// @author       Jan Keirse <jan.keirse@tvh.com>
// @grant        GM_getResourceText
// @include       https://zabbix*
// @resource select2.js https://cdn.jsdelivr.net/npm/select2@4.0.8/dist/js/select2.full.min.js
// @resource select2.css https://cdn.jsdelivr.net/npm/select2@4.0.8/dist/css/select2.min.css
// @run-at document-end
// ==/UserScript==

(function() {
//    'use strict';

    var head = document.getElementsByTagName("head")[0];
    var body = document.getElementsByTagName("body")[0];

    function requireCSS(resourceName) {
        addCSS(GM_getResourceText(resourceName));
    }

    function addCSS(css) {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML=css;
        head.appendChild(style);
    }

    function addJS(js){
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.innerHTML = js;
        body.appendChild(script);
    }

    requireCSS("select2.css");

    addCSS(".select2-results__option { color: #000; background-color: #eee} }");
    addJS(GM_getResourceText('select2.js') + "\n" + "jQuery(document).ready(function() { jQuery('select').select2({width: 'element'});}) ;");


})();
