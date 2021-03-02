(function(vbset, vbTracker){

window._vbTracker 			= vbTracker || {};
window._vbset 				= vbset || [];//{};
var _vbsetData = {
	account: '',
	domain: '',
	ecommerce: '',
	type: '',
	amount: ''
};

if(is_array(_vbset)) {
	var k;
	_vbset.forEach(function(vbvar) {
		k = trim(vbvar[0], '_');
		if(k in _vbsetData) {
			_vbsetData[k] = vbvar[1];
		}
	});
};

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+Base64._keyStr.charAt(s)+Base64._keyStr.charAt(o)+Base64._keyStr.charAt(u)+Base64._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=Base64._keyStr.indexOf(e.charAt(f++));o=Base64._keyStr.indexOf(e.charAt(f++));u=Base64._keyStr.indexOf(e.charAt(f++));a=Base64._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
function serialize(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=form.elements.length-1;i>=0;i=i-1){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"text":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=form.elements[i].options.length-1;j>=0;j=j-1){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
var isValidJSON=function(r){if(0===String(r).length)return!1;try{var t=JSON.parse(r);if(t&&"object"==typeof t&&!(t instanceof Array))return!0}catch(r){return!1}return!1};
function tryParseJSON(jsonString){try{var o=JSON.parse(jsonString);if(o&&typeof o==="object"&&o!==null){return o}}catch(e){}return false};
var vbt_IsMobileDevice=function(){return/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())};
function vbt_GetParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}
function vbt_removeFromURL(url, parm){return url.replace(new RegExp('([?&])('+parm+')=([^&]*)','gi'),function(m,s){return s=='?'?'?':'';});}
function nowYSMnowYDT(t){"none"===window.getComputedStyle(t).display?setTimeout(nowYSMnowYDT,1e3,t):t.setAttribute("src",t.getAttribute("src").replace(/[?&]rel=0/, '').replace(/[?&]autoplay=true/, ''))}
function vbt_IsEmptyObject(t){return 0===Object.keys(t).length}
function vbt_PopulateSubscriberInfo(){var e=new RegExp("[; ]__ssInfo=([^\\s;]*)"),o=(" "+document.cookie).match(e),t={};if(o&&(t=JSON.parse(Base64.decode(o[1]))),vbt_IsEmptyObject(t))console.log("Information not exists, trying to get it..."),vbt_GetSubscriberInfo(!1);else for(var l in console.log("Information exists, trying to populate it..."),t)"email"==l?((document.querySelectorAll(".form-control.email")||{}).value=t[l],(document.querySelectorAll("[type=email]")||{}).value=t[l]):(document.querySelector("#custom-"+l)||{}).value=t[l]}
function vbt_GetSubscriberInfo(e){var t=new RegExp("[; ]__ssId=([^\\s;]*)"),n=(" "+document.cookie).match(t),o=0,a=[];if(n&&(o=unescape(n[1])),t=new RegExp("[; ]__ssInfo=([^\\s;]*)"),(n=(" "+document.cookie).match(t))&&(a=unescape(n[1])),parseInt(o)>0&&(0==a.length||e)){var s;s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var c=vbt_baseURL + "tracker/subscriber/info/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,i="userId="+o;s.open("POST",c,!0),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){data=JSON.parse(s.responseText);var e=new Date((new Date).getTime()+6048e5);document.cookie="__ssInfo="+Base64.encode(JSON.stringify(data.info))+"; expires="+e.toUTCString()+";domain="+_cookieDomain+";path="+_cookiePath,vbt_PopulateSubscriberInfo()}},s.send(i)}}
function vbt_setCookie(name, value, hours) {if(isNaN(hours) || hours < 0) return vbt_deleteCookie(name); var expires = (new Date(new Date().getTime() + (hours * 3600*1000))).toUTCString();document.cookie = name + "="+escape(value || '') + "; expires=" + expires + ";domain="+_cookieDomain+";path="+_cookiePath; }
function vbt_deleteCookie(name) {document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+_cookieDomain+";path="+_cookiePath; }
function vbt_getCookie(e){var o=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return o?decodeURIComponent(o[1]):void 0}
function vbt_createElement(e,t,n,r){var a=document.createElement(e);if(r)for(var i in r)a.setAttribute(i,r[i]);return n&&(a.innerHTML=n),t&&t.appendChild(a),a}
function vbt_getRandomInt(n,t){return Math.floor(Math.random()*(t-n+1))+n}
function vbt_getValueFromURL(e,n){var o=new RegExp("[\\?&]"+n+"=([^&#]*)").exec(e);return o?decodeURIComponent(o[1]):""}
function closestTag(e,r){if(!r)return null;for(r=r.toUpperCase(r);!e.parentNode||e.parentNode.tagName!=r;)if(!(e=e.parentNode))return null;return e.parentNode}
function vbt_matchUrl(e,t,p){if(""!=t)if(e=e.toLowerCase().replace(/\/?$/,"/"),"1"==p){if(t==e||t==e.replace("https://","https://www.")||t==e.replace("http://","http://www."))return!0}else if("2"==p){if(e.indexOf("http://www.")||e.indexOf("https://www.")){if(-1!=e.indexOf(t.replace(/\/?$/,""))||-1!=e.replace("http://www.","http://").indexOf(t.replace(/\/?$/,""))||-1!=e.replace("https://www.","https://").indexOf(t.replace(/\/?$/,"")))return!0}else if(-1!=e.indexOf(t.replace(/\/?$/,""))||-1!=e.replace("http://","http://www.").indexOf(t.replace(/\/?$/,""))||-1!=e.replace("https://","https://www.").indexOf(t.replace(/\/?$/,"")))return!0}else if("3"==p){if(0==e.indexOf(t)||0==e.replace("http://","http://www.").indexOf(t)||0==e.replace("https://","https://www.").indexOf(t))return!0}else if(t==e.slice(-t.length)||t==e.replace("http://","http://www.").slice(-t.length)||t==e.replace("https://","https://www.").slice(-t.length))return!0;return!1}
function vbt_matchUrls___XX(page, urls, allowEmpty){
	if(is_array(urls)) {
		// We will match the URL excluding the domain
		var match, pagePath, urlPath, pageAnchor = document.createElement('a'), urlAnchor = document.createElement('a');
		pageAnchor.href = page;
		pagePath = (pageAnchor.pathname+''+pageAnchor.search).toLowerCase();

		for (var i=0, len=urls.length; i < len; i++) {
			if( allowEmpty && empty(urls[i].url) ) {
				return urls[i];
			}

			if(urls[i].url.indexOf(pageAnchor.host)===0) {
				urlAnchor.href = urls[i].url.substring(pageAnchor.host.length);
				urlPath = ltrim(urlAnchor.pathname+''+urlAnchor.search, '/').toLowerCase();
			} else if(urls[i].url.indexOf('http://')===0 || urls[i].url.indexOf('https://')===0 || urls[i].url.indexOf('//')===0) {
				urlAnchor.href = urls[i].url;
				urlPath = ltrim(urlAnchor.pathname+''+urlAnchor.search, '/').toLowerCase();
            } else {
				urlPath = urls[i].url.toLowerCase();
			}

			switch(String(urls[i].regex)) {
				case '1': // Matches Exactly
					match = (trim(pagePath, '/') == trim(urlPath, '/'));
					break;
				case '2': // Contains
					match = (pagePath.indexOf(urlPath) !== -1);
					break;
				case '3': // Starts With
					match = (ltrim(pagePath, '/').indexOf(ltrim(urlPath, '/')) === 0);
					break;
				case '4': // Ends With
					match = (pagePath.indexOf(page.url, pagePath.length - urlPath.length) !== -1);
					break;
			}

			if( match ) {
				return urls[i];
			}
		}
	}
	return false;
}
function fireEvent(element, event) {
	if ("createEvent" in document) {
	    var evt = document.createEvent("HTMLEvents");
	    evt.initEvent(event, false, true);
	    element.dispatchEvent(evt);
	}
	else {
	    element.fireEvent('on' + event);
	}
}

function vbt_getAjax(url, callback){
	// Make a variable for a new ajax request.
	var xmlhttp;		
	if (window.XMLHttpRequest){ //If it's a decent browser...
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();		//Open a new ajax request.
	} else { //If it's a bad browser...
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if(callback) {
		xmlhttp.onreadystatechange = callback;
	}

	//The false at the end tells ajax to use a synchronous call which wont be severed by the user leaving.
	xmlhttp.open("GET", url, true);
	xmlhttp.send(null);
}
	

function ajaxRequest(method, url, data, callback, errorCallback) {
	var xhr;
	try {
		xhr = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
		if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
		xhr.open(method, url, 1);
		//xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		if(data instanceof FormData) {
			
		} else {
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		}
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4) {
				if(xhr.status == "200") {
					if(typeof callback == 'function') {
						try {
							var json = JSON.parse(xhr.responseText);
							callback(json);
						} catch(e) {
							callback({});
						}
					}
				} else {
					typeof errorCallback == 'function' && errorCallback(xhr);
				}
			}
		};
		xhr.send(data ? data : null)
	} catch(e) {
		window.console && console.log(e);
	}
	return xhr;
}
function ajaxGet(url, data, callback, errorCallback) {
	url += (url.indexOf('?')>-1) ? '&' : '?';
	return ajaxRequest('GET', url+formatParams(data), {}, callback, errorCallback);
}
function ajaxPost(url, data, callback, errorCallback) {
	return ajaxRequest('POST', url, formatParams(data), callback, errorCallback);
}
function ajaxPostFormData(url, form, callback, errorCallback) {
	var data = new FormData(form);
	return ajaxRequest('POST', url, data, callback, errorCallback);
}
function formatParams(params) {
	if (typeof params != 'object') {
		params = {};
	}
	return Object.keys(params).map(function (key) {
		if (typeof params[key] == 'object') {
			var q = [];
			for(var i in params[key]) {
				q.push(key + "[" + i + "]=" + params[key][i]);
			}
			return q.join("&");
		}
		return key + "=" + params[key]
	}).join("&");
}

function param(object) {
	if(typeof object == 'string') return object;
	var encodedString = [];
	for(var prop in object) {
		if(object.hasOwnProperty(prop)) {
			if(typeof object[prop] == 'object') {
				for(var i in object[prop]) {
					q.push(prop + '[' + i + ']=' + encodeURI(object[prop][i]));
				}
			} else {
				encodedString.push(prop + '=' + encodeURI(object[prop]));
			}
		}
	}
	return encodedString.join('&');
}

function vbt_matchUrls(page, urls, allowEmpty){
	if(is_array(urls)) {
		// We will match the URL excluding the domain
		var match, pagePath, urlPath, pageAnchor = document.createElement('a'), urlAnchor = document.createElement('a');
//console.log('page', page);
		// Get page URL
		pagePath = page.toLowerCase();
		// Remove tracking codes
		pagePath = pagePath.replace(/\&?\_\_vbtrk\=[a-zA-Z0-9\=]+/, '');
		pagePath = pagePath.replace(/\&?\_uax\=[a-zA-Z0-9\=]+/, '');

		// Remove http
		if (pagePath.indexOf('http://') === 0) {
			pagePath = pagePath.substring(7);
		}
		else if (pagePath.indexOf('https://') === 0) {
			pagePath = pagePath.substring(8);
		}

		// Check if pagePath start with www.
		if(pagePath.indexOf('www.')===0) {
			pagePath = pagePath.substring(4);
		}

		pageAnchor.href = 'http://'+pagePath;

		for (var i=0, len=urls.length; i < len; i++) {
			if( allowEmpty && empty(urls[i].url) ) {
				return urls[i];
			}

			urlPath = urls[i].url.toLowerCase();

			// Remove http
			if (urlPath.indexOf('http://') === 0) {
				urlPath = urlPath.substring(7);
			}
			else if (urlPath.indexOf('https://') === 0) {
				urlPath = urlPath.substring(8);
			}
	
			// Check if urlPath start with www.
			if(urlPath.indexOf('www.')===0) {
				urlPath = urlPath.substring(4);
			}

			switch(String(urls[i].regex)) {
				case '1': // Matches Exactly
					match = (trim(pagePath, '/') == trim(urlPath, '/'));
					if(!match) {
						// Check if we should add the domain to it
						match = (trim(pagePath, '/') == pageAnchor.host +'/'+ trim(urlPath, '/'));
					}
					break;
				case '2': // Contains
					match = (pagePath.indexOf(urlPath) !== -1);
					break;
				case '3': // Starts With
					match = (ltrim(pagePath, '/').indexOf(ltrim(urlPath, '/')) === 0);
					if(!match) {
						// Check if we should add the domain to it
						match = (ltrim(pagePath, '/').indexOf(pageAnchor.host +'/'+ ltrim(urlPath, '/')) === 0);
					}
					break;
				case '4': // Ends With
					match = (pagePath.indexOf(page.url, pagePath.length - urlPath.length) !== -1);
					break;
			}

			if( match ) {
				return urls[i];
			}
		}
	}
	return false;
}

function empty(r){var n,t,e,f=[void 0,null,!1,0,"","0"];for(t=0,e=f.length;e>t;t++)if(r===f[t])return!0;if("object"==typeof r){for(n in r)if(r.hasOwnProperty(n))return!1;return!0}return!1}
function trim(r,n){var t,e=0,f=0;for(r+="",t=n?(n+="").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" \n\r\t\f\v            ​\u2028\u2029　",e=r.length,f=0;f<e;f++)if(-1===t.indexOf(r.charAt(f))){r=r.substring(f);break}for(f=(e=r.length)-1;f>=0;f--)if(-1===t.indexOf(r.charAt(f))){r=r.substring(0,f+1);break}return-1===t.indexOf(r.charAt(0))?r:""}
function ltrim(e,r){r=r?(r+"").replace(/([[\]().?/*{}+$^:])/g,"$1"):" \\s ";var n=new RegExp("^["+r+"]+","g");return(e+"").replace(n,"")}
function is_array(e){var t,n;if(!e||"object"!=typeof e)return!1;if(function(e){if(!e||"object"!=typeof e||"number"!=typeof e.length)return!1;var t=e.length;return e[e.length]="bogus",t!==e.length?(e.length-=1,!0):(delete e[e.length],!1)}(e))return!0;if("on"===(("undefined"!=typeof require?require("../info/ini_get")("locutus.objectsAsArrays"):void 0)||"on")){var r=Object.prototype.toString.call(e),o=(t=e.constructor,(n=/\W*function\s+([\w$]+)\s*\(/.exec(t))?n[1]:"(Anonymous)");if("[object Object]"===r&&"Object"===o)return!0}return!1}
function in_array(r,n){var i="";for(i in n)if(n[i]==r)return!0;return!1}
	
function vbt_attachEvent(dom, event, callback, useCapture) {
	if(dom.attachEvent) return dom.attachEvent('on'+event, callback, useCapture || false);
	return dom.addEventListener(event, callback);
}
function vbt_loadJs(file, callback) {
	var script = document.createElement('script');
	script.loaded = false;
	script.setAttribute('src', file);
	script.setAttribute('type', 'text/javascript');
	var loadFunction = function () {
		if (script.loaded) return;
		script.loaded = true;
		typeof callback == 'function' && callback(script);
	};
	script.onload = function () {
		if (script.loaded) return;
		script.loaded = true;
		typeof callback == 'function' && callback(script);
	};
	script.onreadystatechange = function () {
		if (this.readyState == 'complete' || this.readyState == 'loaded') {
			if (script.loaded) return;
			script.loaded = true;
			typeof callback == 'function' && callback(script);
		}
	};
	(document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
}
function vbt_loadStyle(file, callback) {
	var style = document.createElement('link');
	style.loaded = false;
	style.setAttribute('href', file);
	style.setAttribute('type', 'text/css');
	style.setAttribute('rel', 'stylesheet');
	var loadFunction = function () {
		if (style.loaded) return;
		style.loaded = true;
		typeof callback == 'function' && callback(style);
	};
	style.onload = function () {
		if (style.loaded) return;
		style.loaded = true;
		typeof callback == 'function' && callback(style);
	};
	style.onreadystatechange = function () {
		if (this.readyState == 'complete' || this.readyState == 'loaded') {
			if (style.loaded) return;
			style.loaded = true;
			typeof callback == 'function' && callback(style);
		}
	};
	(document.getElementsByTagName('head')[0] || document.documentElement).appendChild(style);
}

var vbt_baseURL = 'https://www.vbt.io/';
var $vbtJQ;
var visitor 			= {};
var visitorTrackInfo 	= {};
var intlTelLib, intlTelQueue = [];

// TODO webhook 
var actionAlreadySent = false;

_vbset.setVal=function(e){var a=e||[];if((void 0!==a||null!==a)&&a instanceof Array){var o=new Date((new Date).getTime()+6048e5);document.cookie="__vbvar__"+a[0]+"="+escape(a[1])+"; expires="+o.toUTCString()+";domain="+_cookieDomain+";path="+_cookiePath}};

var __vbtpEmail = "";
var __vbtpName 	= "";

var _vbTrackDomain 	= 'https://practicewithpros.app';
var _vbSessionId 	= '1587496359::1618173608';
var _uniqueTime 	= '1587496359';
var _jqueryAlreadyLoaded = false;
var _jqueryCurrentVersion = '0.0';

var _uniquePagesTracking = [];

var regUrlDomain = /:\/\/(.[^/]+)/;
var regUrlPath = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;

var _cookieDomain = _vbTrackDomain.match(regUrlDomain)[1];
	_cookieDomain = _cookieDomain.replace(new RegExp(/^www\./i), "");
	_cookieDomain = "."+_cookieDomain;

var _cookiePath = "/";

var _forceCustomViewPage = false;
var _customViewPage = document.URL;
try {
	_cookiePath = _vbTrackDomain.match(regUrlPath)[1];
} catch(err) {
	//	do nothing
}
//	**************************************************************
// TODO webhook 
//	**************************************************************
var _actionsQueue = [];
var _actionInProgress = false;
var _actionExitExec = [];


//	**************************************************************
// TODO goals 
//	**************************************************************

var __funnelAddActionTimer = null;
var __GLOBAL__TIMER = null;
var __GLOBAL__TIMER_FLAG = 0;



var filterDevice = 0; //desktop

//=========================================================
//check if __ssId already exists force put it in the cookie
var forceSSID = true;

try { __ssId; }
catch(e) { if(e.name == "ReferenceError") { forceSSID = false; } }

if (forceSSID) {
	if(__ssId !== undefined && __ssId !== null) { 
		//inject the __ssId into cookie
		vbt_setCookie('__ssId', __ssId, 7 * 24);
		
		console.log('Subscriber Founded.');
	}
}
//=========================================================

//******************************************************************************************************************************
//CHECK FOR HEAT/CLICK MAP TRACK FLAG

var heat_data = [];
var scrollheat_data = [];
var scrollTimeout = null;
var scrollheatSending = false;

var heatDrawingTimer = null;
var scrollheatDrawingTimer = null;
var heat = null;


var clickmap_active = false;
var heatmap_active = false;
var scrollmap_active = false;

var clickmap_loading = false;
var heatmap_loading = false;
var scrollmap_loading = false;

var isMappingFlagEnabled = false;
var mapping = vbt_getValueFromURL(location.href, 'mapping');
if (mapping) {
	try {
		var mapString = Base64.decode(mapping);

		mapString = JSON.parse(mapString.replace(/}.*/,'')+'}');
		
		if (mapString._account == _vbsetData.account) {
			isMappingFlagEnabled = true;
			
			if (__checkIfMobileDevice()) {
				filterDevice = 1;
			} else {
				filterDevice = mapString._device;
			}
			
			//now all links should be added this querystring
			for (var tAnchors = document.getElementsByTagName("a"), numAnchors = tAnchors.length, i=0; i<numAnchors; i++){
				var href = tAnchors[i].getAttribute('href');

				if(href) {
					href += (href.match(/\?/) ? '&' : '?') + 'mapping=' + mapping;
					tAnchors[i].setAttribute('href', href);
				}
			}

			console.log('filter: activated');
		} else {
			console.log('filter: not activated ... prb: domain mistmatch!');
		}
	} catch(e) {
		console.log('filter: not activated ... prb: code error!');
		console.log(e);
		console.log(vbt_GetParameterByName('mapping'));
		console.log(Base64.decode(vbt_GetParameterByName('mapping')));
		console.log(mapString);
	}
}

_vbset.forEach(function(e){if("__vbvar__"==e[0])if("_listID"==e[1][0]){var i=new Date((new Date).getTime()+6048e5);document.cookie="__vbset__list="+escape(e[1][1])+"; expires="+i.toUTCString()+";domain="+_cookieDomain+";path="+_cookiePath}else if("_email"==e[1][0]){i=new Date((new Date).getTime()+6048e5);document.cookie="__vbset__email="+escape(e[1][1])+"; expires="+i.toUTCString()+";domain="+_cookieDomain+";path="+_cookiePath}});

_vbTracker.visitorInfo = {
	//== DEFAULT PAGE
	start_time: null,
	page: null,
	pageWTparams: null,
	ip: null,
	appCodeName: null,
	appName: null,
	appVersion: null,
	language: null,
	platform: null,
	userAgent: null,
	screenWith: null,
	screenHeight: null,
	
	_ecommerceEnabled: null,
	_cmsType: null,
	_goalAmount: null,
	
	_account: null,
	_domain: null,
	_action: null,
	__ukey: null,
	_sessionId: null,
	_uniqueTime: null,
	
	_referrerUrl: null,
	
	subscriberId: null,
	ssId: null,
	
	//new to see
	vbtEmail: null,
	vbtListId: null,
	
	subscriberInfo: null,
	goalsEnabled: 1,
	webhooksEnabled: 1,
	
	_actionsGoals: [],
	_actionsEntry: [],
	_actionsExit: [],
	_goals: {"_":[]},

	_vbtFlags: {},
	
	initialize: function() {
		this._account = _vbsetData.account;
		this._domain = _vbsetData.domain;
		this._action = 'pageview';
		
		if ( !empty(_vbsetData.ecommerce) ) {
			this._ecommerceEnabled = _vbsetData.ecommerce;
		} else {
			this._ecommerceEnabled = 'disabled';
		}
	
		if ( !empty(_vbsetData.type) ) {
			this._cmsType = _vbsetData.type;
		}
	
		if ( !empty(_vbsetData.amount) ) {
			this._goalAmount = _vbsetData.amount;
		}
	
		this.page 	= window.location.href; //'';
		this.pageWTparams = window.location.href.split('?')[0]; //'';
		this.ip 	= '199.68.249.238';
		
		//	CHECK IF EMAIL EXISTS IN COOKIES
		var vbtEmail = vbt_getCookie('__vbset__email');
		if (vbtEmail) {
			//	CHECK IF ITS AN EMAIL
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if (regex.test(this.vbtEmail)) {
				this.vbtEmail = vbtEmail;
			}
			//check if email id or name exists then trigger the signup to list
			else if(/^([a-zA-Z0-9_-]+)$/.test(vbtEmail)) {
				if ($vbtJQ('#'+vbtEmail).length > 0 ) {
					console.log('_executeRegisterToThisList by ID triggered!');
					_executeRegisterToThisList(vbtEmail, 'id');
				} else if ($vbtJQ('[name='+vbtEmail+']').length > 0) {
					console.log('_executeRegisterToThisList by NAME triggered!');
					_executeRegisterToThisList(vbtEmail, 'name');
				}
			}
		}
		
		//	CHECK IF LIST EXISTS IN COOKIES
		this.vbtListId = vbt_getCookie('__vbset__list') || null;
		
		this.subscriberInfo = '';
		var arrOfObjects = [];
		
		_vbset.forEach(function(vbvar) {
			if (vbvar[0] == '__vbvar__') {
				if (vbvar[1][0] != '_listID' && vbvar[1][0] != '_email') {
					arrOfObjects.push('SubscriberForm['+vbvar[1][0]+']='+vbvar[1][1]);
				}
			}
		});
		
		this.subscriberInfo = arrOfObjects.join('&');
		
		this.start_time = new Date();
		

		this.country 		= 'united states';
		this.state 			= 'florida';
		this.city 			= 'fort myers';

		this.isp 			= 'summit broadband';
		this.organization 	= 'summit broadband';

		this.appCodeName 	= navigator.appCodeName;
		this.appName 		= navigator.appName;
		this.appVersion 	= navigator.appVersion;
		
		if (navigator.userLanguage == "string") {
			this.language 	= navigator.userLanguage;
		} else if (navigator.language == "string") {
			this.language 	= navigator.language;
		} else {
			this.language 	= "(Not supported)";
		}
		
		this._referrerUrl = document.referrer;
		
		this.platform 		= navigator.platform; 
		this.userAgent 		= navigator.userAgent;
		
		if (window.screen) {
			this.screenWith 	= screen.width;
			this.screenHeight 	= screen.height;
		} else {
			this.screenWith 	= 0;
			this.screenHeight 	= 0;
		}
		
		this._uniqueTime = _uniqueTime;
		
			
		//	SPECIAL BEHAVIOR IF A SUBSCRIBER EXISTS FORM VBOUT
		var trk, trkCookie;
		trk = vbt_getValueFromURL(location.href, '__vbtrk');
		if(trk) {
			trk = trk.replace(/\+/g, " ");
			vbt_setCookie('__vbtrk', trk, 7 * 24);
		} else {
			trk = vbt_getValueFromURL(location.href, '_uax');
			if(trk) {
				trk = trk.replace(/\+/g, " ");
				vbt_setCookie('_uax', trk, 7 * 24);
			} else {
				trkCookie = true;
				trk = vbt_getCookie('__vbtrk');// || vbt_getCookie('_uax');
			}
		}

		this.subscriberId = trk || 0;

		var __ssId = vbt_getCookie('__ssId');
		if(__ssId) {
			this.ssId = __ssId;
			vbt_GetSubscriberInfo( trkCookie ? false : true );
			
			console.log("Subscriber ID Y:" + __ssId);
		} else {
			this.ssId = 0;
			if(this.subscriberId != 0 ) {
				var extractSubscriberId = Base64.decode(this.subscriberId);
					extractSubscriberId = extractSubscriberId.split(':')[1];
					
				this.ssId = extractSubscriberId;
				
				vbt_setCookie('__ssId', this.ssId, 7 * 24);
				
				//get the subscriber information
				vbt_GetSubscriberInfo(true);
			} else {
				//inject
							}
			
			console.log("Subscriber ID N:" + __ssId);
		}

		this._sessionId = vbt_getCookie('__vbsess');
		if(!this._sessionId) {
			this._sessionId = _vbSessionId;
			vbt_setCookie('__vbsess', this._sessionId, 7 * 24);
		}
		
		//	TRACK UNIQUE PAGE VISITS
		var vbupage = vbt_getCookie('__vbupage')||'';
		_uniquePagesTracking = empty(vbupage) ? [] : vbupage.split(',');
		
		this.__ukey = this.getUniqueKey();

		if (isMappingFlagEnabled) {
			vbt_showMappingTools();
			// When mapping is enables, we should stop track all events (same for goals and webhook)
			return;
		}

		vbt_loadStyle('https://www.vbout.com/css/vbtracker.min.css?v=1.0.5');
		vbt_loadStyle('https://www.vbout.com/trackerjs/tracker-compressed-nofancybox.css');

			vbt_execHeatmap(this.ip, this.country);
		this._buildWebhooks();
		this._buildGoals();
	},

	process: function(page, source) {
		if (isMappingFlagEnabled) {
			return;
		}

		//	CATCH THE FREAKN DESTINATION URL / PAGE VISITS
		if(page) {
			this.page = page;
			this.pageWTparams = page.split('?')[0];
		}
		if (typeof page !== "undefined" || page !== null) {
			this.__ukey = this.getUniqueKey();
		}
			
		if (typeof source !== "undefined" && source !== null) {
			this._referrerUrl = source;
		}

		//var trkPage = this.pageWTparams.toLowerCase();
		var trkPage = this.page.toLowerCase();
		// remove tracking code
		trkPage = trkPage.replace(/\&?\_\_vbtrk\=[a-zA-Z0-9\=]+/, '');
		trkPage = trkPage.replace(/\&?\_uax\=[a-zA-Z0-9\=]+/, '');

		// CHECK IF __vbupage HAS MORE THAN 5 pages CLEAR IT THEN REPOPULATE IT
		if (_uniquePagesTracking.length > 5) {
			vbt_deleteCookie('__vbupage');
			_uniquePagesTracking = [];
		}
		//*********************************************************************

		//	SAVE UNIQUE PAGES TO ARRAY
		if (_uniquePagesTracking.indexOf(trkPage) == -1) {
			_uniquePagesTracking.push(trkPage);

			//	UPDATE COOKIE			
			vbt_setCookie('__vbupage', _uniquePagesTracking.join(','), 7 * 24);
		}
		
		this.visitorProcessTracker();
	},
	
	execTracker: function() {
				this._execPageWebhooks();
		
			this._execGoalsPPC();
		this._execGoalsDestination();
		this._execGoalsDuration();
		this._execGoalsPageVisits();
		
		this._execGoalsFunnels();
				this._attachGoalEventsLinkClicks();
				this._attachGoalEventsVideoPlays();
				this._attachGoalEventsFormSubmitted();
		},
	
	getUniqueKey: function() {
		var obj = this;
		var parts = [];
		
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				if (i != "__ukey") {
					parts.push(encodeURIComponent(obj[i]));
				}
			}
		}
		
		return Base64.encode(parts.join("&"));
	},
	
	toQueryString: function() {
		var obj = this;
		var parts = [];
		
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
			}
		}
		
		return parts.join("&");
	},
	
	
	
	_buildWebhooks: function(){
		if(this._vbtFlags._buildWebhooks) return;
		this._vbtFlags._buildWebhooks = true;
		
		var cssFiles = [];
		
		var _loadCssFile = function(popStyle, popTheme, messageId) {
			var path;
			if (popStyle == 0) {
				if (messageId.substring(0, 15) == 'MyPopup_action_') {
					if (messageId.replace(/[^_]/g, '').length > 2) {
						var messageId2 = messageId.substring(0, 15) + messageId.split('MyPopup_action_')[1].split('_')[0] + messageId.split('MyPopup_action_')[1].split('_')[1];
			
						path = vbt_baseURL + 'tracker/themes/popup/'+popTheme+'/'+messageId2.split('MyPopup_action_')[1].split('_')[0]+'/';
					} else {
						path = vbt_baseURL + 'tracker/themes/popup/'+popTheme+'/'+messageId.split('MyPopup_action_')[1]+'/';
					}
				} else {
					path = vbt_baseURL + 'tracker/goal/themes/popup/'+popTheme+'/'+messageId.split('MyPopup_')[1]+'/';
				}
			} else if (popStyle == 2) {
				if (messageId.substring(0, 15) == 'MyPopup_action_') {
					if (messageId.replace(/[^_]/g, '').length > 2) {
						path = vbt_baseURL + 'tracker/themes/optinbars/'+popTheme+'/'+messageId.split('MyPopup_action_')[1].split('_')[0]+messageId.split('MyPopup_action_')[1].split('_')[1]+'/';
					} else {
						path = vbt_baseURL + 'tracker/themes/optinbars/'+popTheme+'/'+messageId.split('MyPopup_action_')[1]+'/';
					}
				} else {
					path = vbt_baseURL + 'tracker/goal/themes/optinbars/'+popTheme+'/'+messageId.split('MyPopup_')[1]+'/';
				}
			}

			// Load CSS file
			if(path) {
				// Load webhook main css file
				var webhookPopup = vbt_baseURL + 'trackerjs/webhook/popup.css';
				if( cssFiles.indexOf(webhookPopup) === -1) {
					cssFiles.push(webhookPopup);
					vbt_loadStyle(webhookPopup);
				}
			
				if( cssFiles.indexOf(path) === -1) {
					cssFiles.push(path);
					vbt_loadStyle(path + '?_account='+_vbsetData.account+'&_domain='+_vbsetData.domain+'&v='+_uniqueTime);
				}
			}
		}
		
		var _buildWebhook = function(webhooks){
			var attr, popup;
			
			if (webhooks === undefined || webhooks.length == 0)
				return;
			
			for (var i in webhooks) {
				attrs = webhooks[i].attrs;
				popup = null;
				
				if(attrs.type == 1) { // HTML Message
					popup = vbt_createElement('div', document.body, attrs.messageHTML, {
						'id': 'vb_message_action_'+attrs.objId,
						'data-goalid': attrs.goalId,
						'data-actionid': attrs.actionId,
						'style': 'display: none;'
					});
					$vbtJQ(popup).find('.essb_item a').each(function() {
						this.href = this.href.replace('[PAGE_URL]', encodeURIComponent(document.URL));
						this.href = this.href.replace('[PAGE_TITLE]', encodeURIComponent(document.title));
					});
					
					_loadCssFile(attrs.popStyle, attrs.popTheme, attrs.messageId);
					
					for(var x in attrs.variations) {
						var popup = vbt_createElement('div', document.body, attrs.variations[x].messageHTML, {
							'id': 'vb_message_action_'+attrs.objId+'_'+attrs.variations[x].objId,
							'data-varid': attrs.variations[x].objId,
							'data-goalid': attrs.goalId,
							'data-actionid': attrs.actionId,
							'style': 'display: none;'
						});
						$vbtJQ(popup).find('.essb_item a').each(function() {
							this.href = this.href.replace('[PAGE_URL]', encodeURIComponent(document.URL));
							this.href = this.href.replace('[PAGE_TITLE]', encodeURIComponent(document.title));
						});

						_loadCssFile(attrs.variations[x].popStyle, attrs.variations[x].popTheme, attrs.variations[x].messageId);
					}
				} else if(attrs.type == 2) { // Subscription Form
					popup = vbt_createElement('div', document.body, attrs.messageHTML, {
						'id': 'vb_newsletter_action_'+attrs.objId,
						'data-goalid': attrs.goalId,
						'data-actionid': attrs.actionId,
						'style': 'display: none;'
					});
					var form = popup.getElementsByTagName('form')[0];

					$vbtJQ('#'+attrs.messageId).addClass('vbtFormToCatch');
							
					$vbtJQ(form).append('<input type="hidden" name="SubscriptionForm[appid]" value="ACTION_TRACKER" />');
					$vbtJQ(form).append('<input type="hidden" name="SubscriptionForm[time]" value="'+_uniqueTime+'" />');
					$vbtJQ(form).append('<input type="hidden" name="SubscriptionForm[sessionId]" value="" />');

                    if(typeof form !== "undefined"){
                        if(form.getElementsByTagName('div').length !== 0)
                            var middleForm = form.getElementsByTagName('div')[0];
                        else
                            var middleForm = form;
                        var middleField = document.createElement("input");
                        middleField.dataset.vboutpopup = "modal-field";
                        middleField.dataset.placeholder = "Middle Name";
                        middleField.type = "hidden";
                        middleField.name = "SubscriptionForm[field][0]";
                        middleField.id = "custom-0";
                        middleField.className = "vbf-text";
                        middleField.tabIndex = -1;
                        middleForm.appendChild(middleField);
                        var embeddedFields = middleForm.querySelectorAll('input');
                        var embeddedFieldsCount = embeddedFields.length - 1;
                        setTimeout(function() {
                            middleForm.insertBefore(middleField, embeddedFields[Math.floor(Math.random() * embeddedFieldsCount)]);
                        }, 1000);
                    }

					$vbtJQ('label', form).each(function() { $vbtJQ(this).attr('for', $vbtJQ(this).prev().attr('id')); });

					$vbtJQ(popup).find('.essb_item a').each(function() {
						this.href = this.href.replace('[PAGE_URL]', encodeURIComponent(document.URL));
						this.href = this.href.replace('[PAGE_TITLE]', encodeURIComponent(document.title));
					});
					
					_loadCssFile(attrs.popStyle, attrs.popTheme, attrs.messageId);
					
					for(var x in attrs.variations) {
						var popup = vbt_createElement('div', document.body, attrs.variations[x].messageHTML, {
							'id': 'vb_newsletter_action_'+attrs.objId+'_'+attrs.variations[x].objId, // 'vb_message_action_'+attrs.objId+'_'+attrs.variations[x].objId
							'data-varid': attrs.variations[x].objId,
							'data-goalid': attrs.goalId,
							'data-actionid': attrs.actionId,
							'style': 'display: none;'
						});
						var form = popup.getElementsByTagName('form')[0];

						$vbtJQ(form).append('<input type="hidden" name="SubscriptionForm[appid]" value="ACTION_TRACKER" />');
						$vbtJQ(form).append('<input type="hidden" name="SubscriptionForm[time]" value="'+_uniqueTime+'" />');
						$vbtJQ(form).append('<input type="hidden" name="SubscriptionForm[sessionId]" value="" />');
						$vbtJQ('label', form).each(function() { $vbtJQ(this).attr('for', $vbtJQ(this).prev().attr('id')); });
	
						$vbtJQ(popup).find('.essb_item a').each(function() {
							this.href = this.href.replace('[PAGE_URL]', encodeURIComponent(document.URL));
							this.href = this.href.replace('[PAGE_TITLE]', encodeURIComponent(document.title));
						});

						_loadCssFile(attrs.variations[x].popStyle, attrs.variations[x].popTheme, attrs.variations[x].messageId);
					}
				} else if(attrs.type == 3) { // Poll
					popup = vbt_createElement('div', document.body, attrs.messageHTML, {
						'id': 'vb_poll_action_'+attrs.objId,
						'data-goalid': attrs.goalId,
						'data-actionid': attrs.actionId,
						'style': 'display: none;'
					});
					var form = popup.getElementsByTagName('form')[0];

					$vbtJQ(form).append('<input type="hidden" name="PollForm[appid]" value="ACTION_TRACKER" />');
					$vbtJQ(form).append('<input type="hidden" name="PollForm[time]" value="'+_uniqueTime+'" />');
					$vbtJQ(form).append('<input type="hidden" name="PollForm[sessionId]" value="" />');
					$vbtJQ('label', form).each(function() { $vbtJQ(this).attr('for', $vbtJQ(this).prev().attr('id')); });
					$vbtJQ(popup).find('.essb_item a').each(function() {
						this.href = this.href.replace('[PAGE_URL]', encodeURIComponent(document.URL));
						this.href = this.href.replace('[PAGE_TITLE]', encodeURIComponent(document.title));
					});
					
					_loadCssFile(attrs.popStyle, attrs.popTheme, attrs.messageId);
				}
				
				// Remove messageHTML from the object (no need for it later)
				delete attrs.messageHTML;
			}
		};

		// Build webhooks for Page Entry and Page Exit
		_buildWebhook(this._actionsEntry);
		_buildWebhook(this._actionsExit);

		// Build webhooks for Goals
		_buildWebhook(this._actionsGoals);
		
	},
	_execPageWebhooks: function(){
		if(this._vbtFlags._execPageWebhooks) return;
		this._vbtFlags._execPageWebhooks = true;
		//	************************************************************************************
		//	ACTION PAGE ENTRY TRIGGER IF IT MATCH THE DESTINATION URL
		//	ALSO CHECK IF THERE ARE EMPTY URLS TO TRIGGER ANYWAY
		//	************************************************************************************
		//var page = this.pageWTparams;
		var page = this.page;
		var _execWebhook = function(webhooks, callback){
			var url, webhook;
	
			for (var i in webhooks) {
			
				webhook = webhooks[i];
				
				if(vbt_matchUrls(page, webhook.urls, true)) {
					// THE LINK FOUND IN MATCHED URLS SO PREPARE THE CORRECT BEHAVIOR
					var attrs = webhook.attrs;

					// UPDATE ACTION PAGE ENTRY TRIGGER COUNTER
					var cookie = '__vbAction_'+attrs.actionId+'_'+visitor._sessionId;

					var triggerCounter = vbt_getCookie(cookie);
					if(isNaN(triggerCounter)) {
						triggerCounter = 0;
					}

					triggerCounter++;
					
					vbt_setCookie(cookie, triggerCounter, 7 * 24);
					
					callback(attrs);
				}
			}
		};
		
		_execWebhook(this._actionsEntry, function(attrs){
			if (__checkForValidPersona(attrs)) {
				// set flag on
				actionAlreadySent = true;

				//	REGISTER PAGE EVENTS
				visitorTrackInfo.trackPageEntryAction(attrs.objId);
				_execActionToObject(attrs, '');
				
				// set flag off
				actionAlreadySent = false;
			}
		});
		
		_execWebhook(this._actionsExit, function(attrs){
			if (__checkForValidPersona(attrs)) {

				// set flag on
				actionAlreadySent = true;
				
				//	REGISTER PAGE EVENTS
				vbt_attachEvent(window, 'mouseout', function(evt) {
					 if (evt.pageY - $vbtJQ(window).scrollTop() <= 1) {

					 	if( _actionExitExec.indexOf(attrs.actionId)===-1) {
					 		_actionExitExec.push(attrs.actionId);

							console.log('exec...');
							_execActionToObject(attrs, '');
							visitorTrackInfo.trackPageExitAction(attrs.objId);
						}
					 	/*var popup = document.getElementById('MyPopup_action_'+attrs.objId);
					 	if(popup) {
					 		if(popup.getAttribute('data-popupactive')) {
								console.log('load now');

								if (!popup.getAttribute('data-popupexec')) {
									popup.setAttribute('data-popupexec', 'active');
									console.log('exec...');
									_execActionToObject(attrs, '');
									visitorTrackInfo.trackPageExitAction(attrs.objId);
								}
					 		} else {
					 			popup.setAttribute('data-popupactive', 'active');
								console.log('wait till next load');
								//_execActionToObject(attrs, '');
								//visitorTrackInfo.trackPageExitAction(attrs.objId);
					 		}
					 	}*/
					}
				}, false);

				// set flag off
				actionAlreadySent = false;
			}
		});
	},
	_getFunnelWebhook: function(funnelId){
		if( this.webhooksEnabled && 'funnel'+funnelId in this._actionsGoals) {
			return this._actionsGoals['funnel'+funnelId].attrs;
		}
		return false;
	},
	_buildGoals: function(){
	
		// Build for Funnels
		
		var goals = this._goals.funnel;
		if(goals) {
			for (var i in goals) {
				for (var x in goals[i].pages) {
					$vbtJQ('body').append('<div id="vb_funnel_message_'+goals[i].pages[x].funnelId+'" class="vbMessage" data-funnelid="'+goals[i].pages[x].funnelId+'" style="display: none;"></div>');
				}
			}
		}
	},
	_execGoalWebhook: function(goal, opts){

		if(typeof opts != 'object') {
			opts = {};
		}

		// UPDATE GOAL TRIGGER COUNTER
		var cookie = '__vbGoal_'+goal.id;

		var triggerCounter = vbt_getCookie(cookie);
		if(isNaN(triggerCounter)) {
			triggerCounter = 0;
		}

		triggerCounter++;
		
		vbt_setCookie(cookie, triggerCounter, 7 * 24);

		if(this.webhooksEnabled && 'goal'+goal.id in this._actionsGoals) {
			// THE LINK FOUND IN MATCHED URLS SO PREPARE THE CORRECT BEHAVIOR
			var attrs = this._actionsGoals['goal'+goal.id].attrs;
			attrs._target = opts.target || null;

			if (__checkForValidPersona(attrs)) {
				_execActionToObject(attrs, opts.callback || '');
				return true;
			}
		}
	},

	_execGoalsDestination: function(){
		// Check if we have goals related to page destination first
		var goals = this._goals.destination;
		if(goals) {
			//var page = this.pageWTparams;
			var page = this.page;
			for (var i in goals) {
				var goal = goals[i];

				if(vbt_matchUrls(page, goal.urls, true)) {
					this._execGoalWebhook(goal);
				}
			}
		}
	},
	_execGoalsPPC: function(){
		// Check if we have goals related to PPC first
		var goals = this._goals.PPC;
		if(goals) {
			// Get utm_source (or gclid) from URL
			var attrs, utm_source = vbt_getValueFromURL(location.href, 'utm_source');
			if(!utm_source && vbt_getValueFromURL(location.href, 'gclid')) {
				utm_source = 'google';
			}
			if(utm_source) {
				for(var i=0,len=goals.length;i< len;i++) {
					if(goals[i].PPC.indexOf(utm_source) != -1) {
						this._execGoalWebhook(goals[i]);
					}
				}
			}
		}
	},
	_execGoalsDuration: function(){
		// Check if we have goals related to duration first
		var goals = this._goals.duration;
		if(goals) {
			var that = this;
			for(var i=0,len=goals.length;i< len;i++) {
				var goal = goals[i];

				setTimeout(function() {
					that._execGoalWebhook(goal);
				}, goal.duration * 1000);
			}
		}
	},
	_execGoalsPageVisits: function(){
		// Check if we have goals related to page visits first
		var goals = this._goals.pages;
		if(goals) {
			// Get page visits
			var pages = _uniquePagesTracking.length;

			for(var i=0,len=goals.length;i< len;i++) {
				var goal = goals[i];
				
				triggerCounter = vbt_getCookie('__vbGoal_'+goal.id) || 0;

				if(goal.pages == pages && !triggerCounter) {
					this._execGoalWebhook(goal);
				}
			}
		}
	},
	_execGoalsFunnels: function(page){
		// Check if we have goals related to funnel first
		var goals = this._goals.funnel;
		if(goals) {
		/* // TODO Why we need saving those IDs in the cookie?
			var FunnelingObjects = (vbt_getCookie('__vbFunneling')||'').split(',');
			if (FunnelingObjects.length > 0) {
				console.log('Funneling has been founded, '+FunnelingObjects.length+' goals');
			}

			var newFunnel = false;
			for(var i=0,len=goals.length;i< len;i++) {
				var goal = goals[i];
				// Push new funnels
				if (!in_array( goal.id, FunnelingObjects )) {
					FunnelingObjects.push(goal.id);
					newFunnel = true;
					console.log('New Funnel Goal added to list: '+goal.id);
				} else {
					console.log('Funnel Goal already existed: '+goal.id);
				}
			}

			if(newFunnel) {
				vbt_setCookie('__vbFunneling', FunnelingObjects.join(','), 5);
			}
		*/
			for(var i=0,len=goals.length;i< len;i++) {
				console.log('FunnelID '+goals[i].id+' has been started...');
				this._trackFunnelGoal(goals[i], page);
			}
		}
	},
	_trackFunnelGoal: function(goal, page) {

		var vbCurrentFunnel = goal;

		var vbFunnel = vbt_getCookie('__vbFunnel_'+goal.id)||'';
		var vbFunnelObj = empty(vbFunnel) ? [] : vbFunnel.split(',');

		//	CHECK IF CURRENT PAGE IS INSIDE THE FUNNEL TO MARK IT
		//	IF THE WHOLE FUNNEL TRACK IS ACHIEVED THEN TRIGGER THE ACTION

//console.log('vbCurrentFunnel: ', vbCurrentFunnel);

		var match = false;
		var page = page || document.URL;

		/*
		//	CHECK IF THERE IS A FORCE URL THEN PUT THAT FORCE URL INSTEAD OF THE document.URL
		_vbset.forEach(function(action) {
			if (action[0] == 'triggerTracking') {
				// TODO why we need those?
				//_forceCustomViewPage = true;
				//_customViewPage = action[1][0];

				page = action[1][0];
			}
		});
		*/

		var curFunnelPage = vbt_matchUrls(page, vbCurrentFunnel.pages, false);
		if(curFunnelPage) {
			console.log('Funnel Step: We have a match');
//console.log('curFunnelPage', curFunnelPage);
			
			var funnelId = curFunnelPage.funnelId;

			// Update funnel
			if (vbFunnelObj.indexOf(page) == -1) { // document.URL // TODO document.URL or page ?
				vbFunnelObj.push(page);
				console.log('Funnel Step: Add page to funnel list');
				vbt_setCookie('__vbFunnel_'+goal.id, vbFunnelObj.join(','), 5);
			}

			//	IF FUNNEL HAS AN ADDITIONAL ACTION THEN START HERE
			if (curFunnelPage.hasAddAction == '1') {
				// CHECK IF THERE ARE ANY OTHER ADDITIONAL ACTIONS WHOS ORDER BELOW IT THEN REMOVE THEM (ONLY ONE MUST BE)
				
				var exists = false;
				var execute = true;
				//var addActionObj = vbt_getCookie('__vbFunnelAddAction_'+funnelId)||'';
				var addActionObj = vbt_getCookie('__vbFunnelAddAction')||'';
				if(empty(addActionObj)) {
					addActionObj = this._getFunnelWebhook(funnelId) || {};
				} else {
					addActionObj = JSON.parse(addActionObj);

					if ($vbtJQ.isEmptyObject(addActionObj)) {
						addActionObj = this._getFunnelWebhook(funnelId) || {};
					} else {
						exists = true;
						execute = (parseInt(addActionObj.order) < parseInt(curFunnelPage.order));
					}
				}

				if (execute) {
					if (curFunnelPage.hasWebhookAction == "1") {
						if(typeof _execActionToObject == 'function') {
							_execActionToObject(addActionObj, '');
						}
					}
					if (curFunnelPage.hasEmailAction == "1") {
						console.log('send email too if subscriber');
						_execSendEmailToSubscriber(curFunnelPage);
					}							
					if (curFunnelPage.hasAnonymousAction == "1") {
						console.log('send email too if anonymous');
						_execSendEmailToAnonymous(curFunnelPage);
					}

					var reset = vbt_getCookie('__reset');
					if(reset) {
						var ssId = vbt_getCookie('__ssId');

						_execResetAnyAnonymousEmail(funnelId, ssId);
					}

					/*if(exists) {
						clearInterval(__funnelAddActionTimer);
						__funnelAddActionTimer = setInterval(function(){ __checkAddActionTimerTrigger(addActionObj.objId); }, 1000);
					} else {
						vbt_setCookie('__vbFunnelAddAction_'+funnelId, JSON.stringify(addActionObj), 5);
					}*/
				}
			}

			//	CHECK THE WHOLE FUNNEL PAGES
			var triggerAction = (vbFunnelObj.length == vbCurrentFunnel.pages.length); // TODO do we have optional pages to count?
		
			if (triggerAction) {
				this._execGoalWebhook(goal, {});
			}
		}
	},
	_closestVbtTrack: function(el, data) {
	    if (el.tagName == 'A' || el.getAttribute(data) !== null) {
	        return el;
	    }

	    while (!(el.parentNode && el.parentNode.getAttribute && (el.parentNode.tagName == 'A' || el.parentNode.getAttribute(data) !== null))) {
	        el = el.parentNode;
	        if (!el) {
	            return null;
	        }
	    }
	    return el.parentNode;
	},
	_attachGoalEventsLinkClicks: function() {
		var that = this;
		vbt_attachEvent(document, 'click', function(evt) {
			var vbtTrack = 'data-vbtTrack';
			var redirect = true, link = that._closestVbtTrack(evt.target, vbtTrack);
			if(link) {
				if(link.tagName == 'A') {
					var href = (link.getAttribute('href')||'').toLowerCase();
				} else {
					var href = (link.getAttribute(vbtTrack)||'').toLowerCase();
					redirect = false;
				}
				if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0 || href.indexOf('/') === 0) {
					var isImage = (['jpg', 'jpeg', 'png', 'gif']).indexOf(href.split('?')[0].split('.').pop().toLowerCase()) != -1;
					if (!(link.classList.contains('fancybox') || isImage)) {
						visitorTrackInfo.trackLinkClick(link, evt, href, redirect);
						if(redirect) {
							return false;
						}
					}
				}
			}
		}, false);
	},
	_attachGoalEventsVideoPlays: function() {
		// Common function to build Videos
		var _buildVideoBox = function(iframe, opts){
		
			// Get iframe dimensions
			var iframeWidth = parseInt(iframe.offsetWidth), iframeHeight = parseInt(iframe.offsetHeight), iframeTop, ifromLeft;
			iframeTop = parseInt(iframe.offsetTop)+'px';
			ifromLeft = parseInt(iframe.offsetLeft)+'px';
			iframeWidth = iframeWidth ? iframeWidth+'px' : '100%';
			iframeHeight = iframeHeight ? iframeHeight+'px' : '100%';
//console.log('Top: '+iframeTop+', Left: '+ifromLeft+', Width: '+iframeWidth+', Height:'+iframeHeight);

			var overlay = document.createElement('div');
			var play = document.createElement('div');
		
			overlay.setAttribute('style', "width: "+iframeWidth+"; height: "+iframeHeight+";"+opts.overlay);
			overlay.setAttribute('class', "default");
			if(typeof opts.screenshot === 'function') {
				opts.screenshot(overlay);
			} else {
				overlay.style.backgroundImage = "url('"+opts.screenshot+"') ";
			}
		
			play.setAttribute('style', opts.play);
			play.onmouseover = function() { this.style.opacity = "1"; }
			play.onmouseout = function() { this.style.opacity = "0.7"; }
			overlay.appendChild(play);
			
			overlay.onmouseover = function() { this.setAttribute('class', 'fadeIn'); }
			overlay.onmouseout = function() { this.setAttribute('class', 'default'); }
			
			var videoUrl = iframe.getAttribute('src');

			var eStyle = iframe.currentStyle || window.getComputedStyle(iframe);
			overlay.style.margin = eStyle.margin;
			//overlay.style.position = eStyle.position;
			overlay.style.top = eStyle.top;
			overlay.style.left = eStyle.left;
			overlay.style.right = eStyle.right;
			overlay.style.bottom = eStyle.bottom;
			if(eStyle.display != 'inline') {
				overlay.style.display = eStyle.display;
			}
	  
			if (!$vbtJQ(iframe).parents('.et_pb_video_box').length) {
				if ($vbtJQ(overlay).parent('.fluid-width-video-wrapper').length) {
					//console.log('inside youtube... found the parent()');
					overlay.setAttribute('data-oldpadding', $vbtJQ(overlay).parent('.fluid-width-video-wrapper').css('paddingTop'));
					$vbtJQ(overlay).parent('.fluid-width-video-wrapper').css('padding', 0);
				}
				
				var iframeClone = iframe.cloneNode(true);
				iframe.parentNode.replaceChild(overlay, iframe);
				
				overlay.onclick = function() {
					var overlay = this;
					visitorTrackInfo.trackVideoClick(videoUrl, opts.videoId, function() {
						if ($vbtJQ(overlay).parent('.fluid-width-video-wrapper').length) {
							//console.log('inside youtube... found the parent()');
							$vbtJQ(overlay).parent('.fluid-width-video-wrapper').css('paddingTop', overlay.getAttribute('data-oldpadding'));
						}
						
						//videoUrl = videoUrl.replace(/([?&])rel=0/, function(matches){ console.log(matches); });
						videoUrl = vbt_removeFromURL(videoUrl, 'rel|autoplay');
						
						iframeClone.setAttribute("src", videoUrl+ (videoUrl.indexOf('?')>0?'&':'?') +"rel=0&autoplay=true");
						overlay.parentNode.replaceChild(iframeClone, overlay); 
						$vbtJQ('body').css('overflow', 'auto'); 

						//check if this is somewhat hidden
						if ($vbtJQ('body').find('.fancybox-overlay').length) {
							setTimeout(function(){
								nowYSMnowYDT(iframeClone);
							}, 1000);
						}
					});
				}
			}
		}

		// Match src for Videos
		// var ytUrlOLD = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        // var vmUrlOLD = /(http:|https:|)\/\/(player.)?(vimeo\.com)\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/;

        var ytUrl = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([\w-]+)/;
		var vmUrl = /^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:video\/)?(\d+)($|\/)/;

		// Find all videos
		for (var iframes = document.getElementsByTagName("iframe"), len = iframes.length, i=len-1; i>=0; i--){
			var iframe = iframes[i];
			var src = iframe.getAttribute('src')||'';
			if(src) {
				if(ytUrl.test(src)) { // Check if this Youtube video
					var video = src.match(ytUrl);

                    video[1] = video[1].replace(/\//g, '');

					var screenshot = '//img.youtube.com/vi/'+video[1]+'/0.jpg';
					
					_buildVideoBox(iframe, {
						videoId: video[1],
						videoType: 'youtube',
						overlay: "display:block;cursor: pointer; position: relative; background: #000 no-repeat center center;background-size:cover;",
						play: "width: 64px; height: 64px; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background:rgba(0, 0, 0, 0) url(\"https://www.vbout.com/images/youtubethumb.png\") no-repeat scroll 0 0;opacity:0.7;",
						screenshot: screenshot
					});
				} else if(vmUrl.test(src)) { // Check if this Vimeo video
					var video = src.match(vmUrl);

					_buildVideoBox(iframe, {
						videoId: video[1],
						videoType: 'vimeo',
						overlay: "display:block;cursor: pointer; position: relative; background: #000 no-repeat center center;background-size:cover;",
						play: "width: 64px; height: 64px; margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background:rgba(86, 84, 84, 0.44) url(\"https://www.vbout.com/images/play-video.png\") no-repeat scroll 0 0;opacity:0.7; border-radius: 50%;",
						screenshot: function(overlay){
							var data_file = "https://vimeo.com/api/v2/video/"+video[1]+".json";
							vbt_getAjax(data_file, function(){
								if (this.readyState == 4) {									
									// Javascript function JSON.parse to parse JSON data

									var vimeoParsedResponse = tryParseJSON(this.responseText);
									if (vimeoParsedResponse) {
										var screenshot = vimeoParsedResponse[0].thumbnail_large;
										overlay.style.display = 'block';
										overlay.style.backgroundImage = "url('"+screenshot+"') ";
									} else {
										//add default image
										var screenshot = 'https://www.vbout.com/public-ups/vimeo-default-empy.jpg';
										overlay.style.display = 'block';
										overlay.style.backgroundImage = "url('"+screenshot+"') ";
									}
								}
							});
						}
					});
				}
			}
		}
	},
	_attachGoalEventsFormSubmitted: function() {

		var goalForms = [];
		var trackFormSubmit = {name:[], id:[]};

		// Check if we have goals related to "Event Triggered"
		var goals = this._goals.events;
		if(goals) {
			// Check if we have goals related to "Submitted Form(s)"
			for(var i=0,len=goals.length;i< len;i++) {
				if(goals[i].eventsType == 'submit-forms') {
					goalForms.push(goals[i]);
					if(goals[i].formid == 1 ){
						trackFormSubmit.name.push(goals[i].formidentity.toLowerCase());
					} else {
						trackFormSubmit.id.push(goals[i].formidentity.toLowerCase());
					}
				}
			}
		}

		// Attach "Submit" event
		vbt_attachEvent(document, 'submit', function(evt) {
			var form = evt.target;
			if(form.tagName == 'FORM') {
				var id = (form.getAttribute('id')||'~~').toLowerCase();
				var name = (form.getAttribute('name')||'~~').toLowerCase();

				if (!(id.indexOf('vboutembedform') === 0 || name.indexOf('vboutembedform') === 0)) {
					if(trackFormSubmit.id.indexOf(id) >-1 || trackFormSubmit.name.indexOf(name) >-1) {
						visitorTrackInfo.trackFormSubmit(id, name, Base64.encode(serialize(form)), form);
						return false; 
					}
				}
			}
		}, true);
		
		// Find all forms to attach _execSendFormEmailToAnonymous events (using setInterval to catch dynamically added forms)
		var formsInterval = setInterval(function(){
			// Find all forms
			for (var forms = document.getElementsByTagName("form"), flen = forms.length, f=0; f< flen; f++){
				// Check if we handled this form before
				if(forms[f]._vbTGEFS) continue;
	
				var form = forms[f];
				form._vbTGEFS = true;

				var id = (form.getAttribute('id')||'~~').toLowerCase();
				var name = (form.getAttribute('name')||'~~').toLowerCase();

				if (!(id.indexOf('vboutembedform') === 0 || name.indexOf('vboutembedform') === 0)) {
					// Loop goals
					for(var i=0, len=goalForms.length; i< len; i++) {
						var goal = goalForms[i];
						if((goal.formid != 1 && id == goal.formidentity ) || (goal.formid == 1 && name == goal.formidentity)) {
							// Form matched the goal
							
							if(goal.formidentitylist > 0 ) {
								_execSendFormEmailToAnonymous(id, name, form, goal.formidentitylist, goal.id);

								break; // Break when we find first goal
							}
						}
					}
				}
			}
		}, 3000);
	},
	visitorProcessTracker: function(_action, opts){
		//this._action = _action;
		
		var asyncArg = opts && opts.asyncArg === false ? false : true;
		var query = opts && opts.query ? opts.query : this.toQueryString();

		// Make a variable for a new ajax request.
		var xmlhttp;		
		if (window.XMLHttpRequest){ //If it's a decent browser...
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();		//Open a new ajax request.
		} else { //If it's a bad browser...
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		//Send the time on the page to a php script of your choosing.
		var url = vbt_baseURL + "tracker/process?"+ query;

		//The false at the end tells ajax to use a synchronous call which wont be severed by the user leaving.
		xmlhttp.open("GET",url, asyncArg);
		xmlhttp.send(null);
	}
};

_vbTracker.triggerTracking = function(page, source) {
	
	//check if the visitor object doesnt exists then wait 1000 and trigger the function again
	if ((typeof visitor === "undefined" || visitor === null)) {
		setTimeout( function() { _vbTracker.triggerTracking(page, source); } , 1000);
		return;
	}
	
	var pageX = _vbsetData.domain.replace(/\/?$/, '/') + page.replace(/^\/?/, '').replace(/\/?$/, '/');

	//console.log(page);
	//_vbset.push(['triggerTracking', [page, source]]);
	
	if (typeof source !== "undefined") {
		var sourceX = _vbsetData.domain.replace(/\/?$/, '/') + source.replace(/^\/?/, '').replace(/\/?$/, '/');
		visitor.process(pageX, sourceX);
	} else {
		visitor.process(pageX);
	}	
	
		//force trigger actions
	visitor._execGoalsFunnels(pageX);
	};



_vbTracker.trackEventsInfo = {
	start_time: null,
	end_time: null,
	timeSpent: null,
	linkClicked: null,
	linkClickedId: null,
	linkUniqueId: null,
	linkFormId: null,
	linkFormName: null,
	linkFormInput: null,
	
	_ecommerceEnabled: null,
	_cmsType: null,
	_goalAmount: null,
	
	subscriberId: null,
	ssId: null,
	
	actionId: null,
	variationId: null,
	
	_account: null,
	_domain: null,
	_action: null,
	__ukey: null,
	_sessionId: null,
	_uniqueTime: null,
	
	_referrerUrl: null,
	
	ip: null,
	
	//new to see
	vbtEmail: null,
	vbtListId: null,
	
	initialize: function(__ukey) {
		this._account 	= _vbsetData.account;
		this._domain 	= _vbsetData.domain;
		this._action 	= 'tracktime';
		
		this.actionId 		= 0;
		this.variationId 	= 0;
		
		this.ip 			= '199.68.249.238';
		
		if ( !empty(_vbsetData.ecommerce) ) {
			this._ecommerceEnabled = _vbsetData.ecommerce;
		} else {
			this._ecommerceEnabled = 'disabled';
		}
	
		if ( !empty(_vbsetData.type) ) {
			this._cmsType = _vbsetData.type;
		}
	
		if ( !empty(_vbsetData.amount) ) {
			this._goalAmount = _vbsetData.amount;
		}
		
		
		
		//	CHECK IF EMAIL EXISTS IN COOKIES
		var vbtEmail = vbt_getCookie('__vbset__email');
		if (vbtEmail) {
			//	CHECK IF ITS AN EMAIL
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if (regex.test(this.vbtEmail)) {
				this.vbtEmail = vbtEmail;
			}
		}
		
		//	CHECK IF LIST EXISTS IN COOKIES
		this.vbtListId = vbt_getCookie('__vbset__list') || null;
		
		this.start_time = new Date();
		
		this.__ukey = __ukey;
		
		this._uniqueTime = _uniqueTime;
		
		this._referrerUrl = document.referrer;

		//	SPECIAL BEHAVIOR IF A SUBSCRIBER EXISTS FORM VBOUT
		var trk, trkCookie;
		trk = vbt_getValueFromURL(location.href, '__vbtrk');
		if(trk) {
			trk = trk.replace(/\+/g, " ");
			vbt_setCookie('__vbtrk', trk, 7 * 24);
		} else {
			//trk = vbt_getValueFromURL(location.href, '_uax');
			if(trk) {
				trk = trk.replace(/\+/g, " ");
				vbt_setCookie('_uax', trk, 7 * 24);
			} else {
				trkCookie = true;
				trk = vbt_getCookie('__vbtrk');// || vbt_getCookie('_uax');
			}
		}

		this.subscriberId = trk || 0;

		var __ssId = vbt_getCookie('__ssId');
		if(__ssId) {
			this.ssId = __ssId;
			vbt_GetSubscriberInfo( trkCookie ? false : true );
		} else {
			this.ssId = 0;
			if(this.subscriberId != 0 && !trkCookie) { // in 'trackEventsInfo' we dont't decode this.subscriberId ?
				var extractSubscriberId = Base64.decode(this.subscriberId);
					extractSubscriberId = extractSubscriberId.split(':')[1];
					
				this.ssId = extractSubscriberId;
				
				vbt_setCookie('__ssId', this.ssId, 7 * 24);
				
				//get the subscriber information
				vbt_GetSubscriberInfo(true);
			}
		}

		// SPECIAL BEHAVIOR FOR SESSION ID
		this._sessionId = vbt_getCookie('__vbsess');
		if(!this._sessionId) {
			this._sessionId = _vbSessionId;
			vbt_setCookie('__vbsess', this._sessionId, 7 * 24);
		}
	},
	
	trackLinkClick: function(link, evt, href, redirect) {

		this.linkClicked = href || '';
		this.linkClickedId = link.getAttribute('id') || '';
		
		this.trackEventsProcessTracker('tracklink');
		
		var callbackfunc, triggered = false;

		if(redirect !== false) {
			callbackfunc = link.onclick;
			link.onclick = null;
		}

		var openURL = function(){
			if(redirect === false) return;
			var target = evt.ctrlKey ? '_blank' : (link.getAttribute('target') || '');
			var url = link.getAttribute('data-href') || link.getAttribute('href') || '';

			if(url) {
				evt.preventDefault();
				evt.stopPropagation();

				target ? window.open(url, target) : window.location = url;
			}
		};

		var isPDF = (function(link) {
			var url = link.getAttribute('data-href') || link.getAttribute('href') || '';

			var ext = url.toLowerCase().split(".").pop(); //Split target at all periods, then select the last section, which should be the extension
			if (ext=="pdf" || ext=="com/vista-projects_digital-project-execution" || ext=="com/vista-projects_digital-project-execution/") { //If the extension is "pdf" (case insensitive)...
				return true;
			}
			return false;
		})(link);
		
		//	************************************************************************************
		//	GOAL ACTION TRIGGER IF IT MATCH ONE OF THE URLs GOAL
		//	************************************************************************************
		
		// Check if we have goals related to "Event Triggered" first
		var goals = visitor._goals.events;
		if(goals) {
			//var href = (link.getAttribute('href')||'~~').toLowerCase();
			var href = (href||'~~').toLowerCase();
			var id = (link.getAttribute('id')||'~~').toLowerCase();

			// Check if we have goals related to "Clicked Link(s)"
			for(var i=0,len=goals.length;i< len;i++) {
				if(goals[i].eventsType == 'click-links') {
					if (goals[i].links.indexOf(href) != -1 || goals[i].links.indexOf(id) != -1) {
						var goal = goals[i];

						var matched = goal.linkrule === 0;
						if(!matched) {

							//	CHECK ALL LINKS TRIGGERED
							var validUniquePages = 0;
							
							if (goals[i].links.indexOf(href) != -1) {
								validUniquePages++;
							}
							
							for (var x=0, xlen=_uniquePagesTracking.length; x< xlen;x++) {
								if (href != _uniquePagesTracking[x].toLowerCase()) {
									if (goals[i].links.indexOf(_uniquePagesTracking[x].toLowerCase()) != -1) {
										validUniquePages++;
									}
								}
							}
							if (validUniquePages == goals[i].links.length) {
								matched = true;
							}
						}

						if(matched && !isPDF) {
							triggered = visitor._execGoalWebhook(goal, {
								target: link,
								callback: function(){
									try{
										typeof callbackFunc == 'function' && callbackFunc();
									} catch(e){}
	
									openURL();
									$vbtJQ('body').css('overflow', 'auto');
								}
							});
						}

						break; // Break when we find first goal
					}
				}
			}
		}
		
		if(triggered !== true) {
			try{
				typeof callbackFunc == 'function' && callbackFunc();
			} catch(e){}
			openURL();
		}
		
		//	************************************************************************************
	},
	trackVideoClick: function(url, urlId, callbackFunc) { 
		this.linkClicked = url;
		this.linkUniqueId = urlId;

		this.trackEventsProcessTracker('trackvideo');
		
		var triggered = false;

		//	************************************************************************************
		//	GOAL ACTION TRIGGER IF IT MATCH ONE OF THE VIDEOs GOAL
		//	************************************************************************************
		// Check if we have goals related to "Event Triggered" first
		var goals = visitor._goals.events;
		if(goals) {
			// Check if we have goals related to "Watched Video(s)"
			for(var i=0,len=goals.length;i< len;i++) {
				if(goals[i].eventsType == 'watch-videos') {
					var matched = false;
					if (goals[i].videos.indexOf(url) != -1) {
						matched == true;
					} else {
						// Match src for Videos
						var ytUrl = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
						var vmUrl = /(http:|https:|)\/\/(player.)?(vimeo\.com)\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/;

						// Check each video
						for(var x in goals[i].videos) {
							var video = goals[i].videos[x].match(ytUrl);
							if(video && (video[1]||'').toLowerCase() == urlId.toLowerCase()) {
								matched == true;
								break;
							}
							var video = goals[i].videos[x].match(vmUrl);
							if(video && (video[1]||'').toLowerCase() == urlId.toLowerCase()) {
								matched == true;
								break;
							}
						}
					}
					if(matched) {
						triggered = visitor._execGoalWebhook(goals[i], {
							target: url,
							callback: callbackFunc
						});
						break; // Break when we find first goal
					}
				}
			}
		}

		if(triggered !== true) {
			try{
				if (typeof callbackFunc == "function") callbackFunc();
			} catch(e){}
		}
		//	************************************************************************************
	},
		
	trackFormSubmit: function(formId, formName, formInput, formObj) {
		this._action = 'trackform';
		this.linkFormId = formId;
		this.linkFormName = formName;
		this.linkFormInput = formInput;

		this.trackEventsProcessTracker('trackform');
		
		var triggered = false;

		//	************************************************************************************
		//	GOAL ACTION TRIGGER IF IT MATCH ONE OF THE FORM GOAL
		//	************************************************************************************
		// Check if we have goals related to "Event Triggered" first
		var goals = visitor._goals.events;
		if(goals) {
			var id = (formObj.getAttribute('id')||'~~').toLowerCase();
			var name = (formObj.getAttribute('name')||'~~').toLowerCase();
		
		
			// Check if we have goals related to "Submitted Form(s)"
			for(var i=0,len=goals.length;i< len;i++) {
				if(goals[i].eventsType == 'submit-forms') {
					var goal = goals[i];
					if((goal.formid != 1 && id == goal.formidentity ) || (goal.formid == 1 && name == goal.formidentity)) {
						triggered = visitor._execGoalWebhook(goals[i], {
							target: goal.formidentity,
							callback: function(){
								formObj.submit();
								$vbtJQ('body').css('overflow', 'auto');
							}
						});
						break; // Break when we find first goal
					}
				}
			}
		}

		if(triggered !== true) {
			formObj.submit();
		}
		//	************************************************************************************
		
	},
	
	trackPageExitAction: function(actionId) { 
		this.actionId = actionId;

		this.trackEventsProcessTracker('trackpageexit');
	},
	
	updateActionVariation: function(actionId, variationId) { 
		this._action = 'updateaction';
		this.actionId = actionId;
		
		this.variationId = variationId;

		this.trackEventsProcessTracker('updateaction');
	},
	
	trackAction: function(actionId, variationId) { 
		this._action = 'trackaction';
		this.actionId = actionId;
		
		this.variationId = variationId;

		this.trackEventsProcessTracker('trackaction');
	},
	trackPageEntryAction: function(actionId) { 
		this.actionId = actionId;
		this.trackEventsProcessTracker('trackpageentry');
	},
			
	processTimeSpend: function(send) {
		//	SEND DATA SYNC
		this._action = 'tracktime';
		this.end_time = new Date();

		//Find out how long it's been.
		this.timeSpent = (this.end_time - this.start_time);
		
		var query = this.toQueryString();
		
		if (send) {
			//	CHECK COOKIE
			query = vbt_getCookie('__ts__');
			if(query) {
				this.trackEventsProcessTracker('tracktime', {
					query: query
				});

				//delete cookie
				vbt_deleteCookie('__ts__');
				
				//console.log('mission accomplish...');
			}
		} else {
			vbt_setCookie('__ts__', query, 6);
		}
	},
	
	toQueryString: function() {
		var obj = this;
		var parts = [];
		
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
			}
		}
		
		return parts.join("&");
	},
	
	trackEventsProcessTracker: function(_action, opts){
		this._action = _action;
		
		var asyncArg = opts && opts.asyncArg === false ? false : true;
		var query = opts && opts.query ? opts.query : this.toQueryString();

		// Make a variable for a new ajax request.
		var xmlhttp;		
		if (window.XMLHttpRequest){ //If it's a decent browser...
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();		//Open a new ajax request.
		} else { //If it's a bad browser...
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		//Send the time on the page to a php script of your choosing.
		var url = vbt_baseURL + "tracker/process?"+ query;

		//The false at the end tells ajax to use a synchronous call which wont be severed by the user leaving.
		xmlhttp.open("GET",url, asyncArg);
		xmlhttp.send(null);
	}
};

function _exec_vbout() 
{
	try {
		if((jQuery.fn.jquery+'').indexOf('3')===0) {
			// https://code.jquery.com/jquery-migrate-3.0.1.min.js
			void 0===jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e){"function"==typeof define&&define.amd?define(["jquery"],window,e):"object"==typeof module&&module.exports?module.exports=e(require("jquery"),window):e(jQuery,window)}(function(e,t){"use strict";function r(r){var n=t.console;a[r]||(a[r]=!0,e.migrateWarnings.push(r),n&&n.warn&&!e.migrateMute&&(n.warn("JQMIGRATE: "+r),e.migrateTrace&&n.trace&&n.trace()))}function n(e,t,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return r(o),n},set:function(e){r(o),n=e}})}function o(e,t,n,o){e[t]=function(){return r(o),n.apply(this,arguments)}}e.migrateVersion="3.0.1",t.console&&t.console.log&&(e&&!/^[12]\./.test(e.fn.jquery)||t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion));var a={};e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){a={},e.migrateWarnings.length=0},"BackCompat"===t.document.compatMode&&r("jQuery is not compatible with Quirks Mode");var i,s=e.fn.init,u=e.isNumeric,c=e.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,d=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;e.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(r("jQuery( '#' ) is not a valid selector"),t[0]=[]),s.apply(this,t)},e.fn.init.prototype=e.fn,e.find=function(e){var n=Array.prototype.slice.call(arguments);if("string"==typeof e&&l.test(e))try{t.document.querySelector(e)}catch(o){e=e.replace(d,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{t.document.querySelector(e),r("Attribute selector with '#' must be quoted: "+n[0]),n[0]=e}catch(e){r("Attribute selector with '#' was not fixed: "+n[0])}}return c.apply(this,n)};for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e.find[i]=c[i]);e.fn.size=function(){return r("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},e.parseJSON=function(){return r("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},e.isNumeric=function(t){var n,o,a=u(t),i=(o=(n=t)&&n.toString(),!e.isArray(n)&&o-parseFloat(o)+1>=0);return a!==i&&r("jQuery.isNumeric() should not be called on constructed objects"),i},o(e,"holdReady",e.holdReady,"jQuery.holdReady is deprecated"),o(e,"unique",e.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),n(e.expr,"filters",e.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),n(e.expr,":",e.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");var p=e.ajax;e.ajax=function(){var e=p.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var f=e.fn.removeAttr,y=e.fn.toggleClass,m=/\S+/g;e.fn.removeAttr=function(t){var n=this;return e.each(t.match(m),function(t,o){e.expr.match.bool.test(o)&&(r("jQuery.fn.removeAttr no longer sets boolean properties: "+o),n.prop(o,!1))}),f.apply(this,arguments)},e.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?y.apply(this,arguments):(r("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var r=this.getAttribute&&this.getAttribute("class")||"";r&&e.data(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":e.data(this,"__className__")||"")}))};var h=!1;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,r){var n=e.cssHooks[r]&&e.cssHooks[r].get;n&&(e.cssHooks[r].get=function(){var e;return h=!0,e=n.apply(this,arguments),h=!1,e})}),e.swap=function(e,t,n,o){var a,i,s={};h||r("jQuery.swap() is undocumented and deprecated");for(i in t)s[i]=e.style[i],e.style[i]=t[i];a=n.apply(e,o||[]);for(i in t)e.style[i]=s[i];return a};var g=e.data;e.data=function(t,n,o){var a;if(n&&"object"==typeof n&&2===arguments.length){a=e.hasData(t)&&g.call(this,t);var i={};for(var s in n)s!==e.camelCase(s)?(r("jQuery.data() always sets/gets camelCased names: "+s),a[s]=n[s]):i[s]=n[s];return g.call(this,t,i),n}return n&&"string"==typeof n&&n!==e.camelCase(n)&&(a=e.hasData(t)&&g.call(this,t))&&n in a?(r("jQuery.data() always sets/gets camelCased names: "+n),arguments.length>2&&(a[n]=o),a[n]):g.apply(this,arguments)};var v=e.Tween.prototype.run,j=function(e){return e};e.Tween.prototype.run=function(){e.easing[this.easing].length>1&&(r("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),e.easing[this.easing]=j),v.apply(this,arguments)},e.fx.interval=e.fx.interval||13,t.requestAnimationFrame&&n(e.fx,"interval",e.fx.interval,"jQuery.fx.interval is deprecated");var Q=e.fn.load,b=e.event.add,w=e.event.fix;e.event.props=[],e.event.fixHooks={},n(e.event.props,"concat",e.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),e.event.fix=function(t){var n,o=t.type,a=this.fixHooks[o],i=e.event.props;if(i.length)for(r("jQuery.event.props are deprecated and removed: "+i.join());i.length;)e.event.addProp(i.pop());if(a&&!a._migrated_&&(a._migrated_=!0,r("jQuery.event.fixHooks are deprecated and removed: "+o),(i=a.props)&&i.length))for(;i.length;)e.event.addProp(i.pop());return n=w.call(this,t),a&&a.filter?a.filter(n,t):n},e.event.add=function(e,n){return e===t&&"load"===n&&"complete"===t.document.readyState&&r("jQuery(window).on('load'...) called after load event occurred"),b.apply(this,arguments)},e.each(["load","unload","error"],function(t,n){e.fn[n]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===n&&"string"==typeof e[0]?Q.apply(this,e):(r("jQuery.fn."+n+"() is deprecated"),e.splice(0,0,n),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){e.fn[n]=function(e,t){return r("jQuery.fn."+n+"() event shorthand is deprecated"),arguments.length>0?this.on(n,null,e,t):this.trigger(n)}}),e(function(){e(t.document).triggerHandler("ready")}),e.event.special.ready={setup:function(){this===t.document&&r("'ready' event is deprecated")}},e.fn.extend({bind:function(e,t,n){return r("jQuery.fn.bind() is deprecated"),this.on(e,null,t,n)},unbind:function(e,t){return r("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,n,o){return r("jQuery.fn.delegate() is deprecated"),this.on(t,e,n,o)},undelegate:function(e,t,n){return r("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return r("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var x=e.fn.offset;e.fn.offset=function(){var n,o=this[0],a={top:0,left:0};return o&&o.nodeType?(n=(o.ownerDocument||t.document).documentElement,e.contains(n,o)?x.apply(this,arguments):(r("jQuery.fn.offset() requires an element connected to a document"),a)):(r("jQuery.fn.offset() requires a valid DOM element"),a)};var k=e.param;e.param=function(t,n){var o=e.ajaxSettings&&e.ajaxSettings.traditional;return void 0===n&&o&&(r("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),n=o),k.call(this,t,n)};var A=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),A.apply(this,arguments)};var S=e.Deferred,q=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];return e.Deferred=function(t){var n=S(),o=n.promise();return n.pipe=o.pipe=function(){var t=arguments;return r("deferred.pipe() is deprecated"),e.Deferred(function(r){e.each(q,function(a,i){var s=e.isFunction(t[a])&&t[a];n[i[1]](function(){var t=s&&s.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[i[0]+"With"](this===o?r.promise():this,s?[t]:arguments)})}),t=null}).promise()},t&&t.call(n,n),n},e.Deferred.exceptionHook=S.exceptionHook,e});
		} else {
			/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
			"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
		}
	}catch(e){}
	if (typeof Object.create !== "function") { Object.create = function (o) { function F() {} F.prototype = o; return new F(); }; }

	visitor = Object.create(_vbTracker.visitorInfo);
	visitorTrackInfo = Object.create(_vbTracker.trackEventsInfo);

	if (isMappingFlagEnabled) {
		vbt_deleteCookie('__ts__');
	} else {
		// Check if we should handle TimeSpend now
		if(vbt_getCookie('__ts__')) {
			visitorTrackInfo.processTimeSpend(true);
		}
	}

	visitor.initialize();
	visitorTrackInfo.initialize(visitor.__ukey);
	
	
	if (!isMappingFlagEnabled) {
		//	REGISTER PAGE EVENTS
		vbt_attachEvent(window, 'beforeunload', function(e) {
			visitorTrackInfo.processTimeSpend(false);
			return;
		});
	}
	
	//	TRACK PAGE
	visitor.process();
	
	//	RUN WEBHOOKS AND GOALS
	visitor.execTracker();
	
	console.log('=================================================');
	console.log('vbout Tracker X: ('+_vbsetData.account+') is activated.');
	console.log('=================================================');
	console.log('Page viewed: '+visitor.page);
	console.log('Page IP: '+visitor.ip+' From '+visitor.country+' / '+visitor.state);
	
	if (visitor.subscriberId)
		console.log('SubscriberId: '+visitor.subscriberId);
		
	console.log('jQuery Loaded: '+_jqueryAlreadyLoaded);
	
	if (_jqueryAlreadyLoaded)
		console.log('jQuery Version: '+_jqueryCurrentVersion);
		
	console.log('Cookie Domain: '+_cookieDomain);
	console.log('Cookie Path: '+_cookiePath);
	
	//setTimeout(function() { _handleNotFoundFormLoop(); }, 3000);
	//setTimeout(function() { _handleNotFoundLinkLoop(); }, 3000);
	
	//console.log('Exit Urls:');
	//console.log(_actionsExitUrls);
	//console.log('Entry Urls:');
	//console.log(_actionsEntryUrls);
}


var intlTelQueue = [];
var intlTelLib = false;
function attachIntlTelPlugin(form){
	var tel;
	for(var inputs = form.getElementsByTagName('input'),i=0,len=inputs.length;i<len;i++) {
		if(inputs[i].type == 'tel') {
			tel = true;
			break;
		}
	}

	if(!tel) return ;

	if(window.intlTelInput) {
		applyIntlTelPlugin(form);
	} else {
		intlTelQueue.push(form);

		if(!intlTelLib) {
			intlTelLib = true;
			vbt_loadStyle(vbt_baseURL + 'ext/intl-tel-input/css/intlTelInput.min.css?v=1.1');
			vbt_loadJs(vbt_baseURL + 'ext/intl-tel-input/js/intlTelInput.min.js?v=1.1', function(){
				var element;
				while(element = intlTelQueue.shift()) {
					applyIntlTelPlugin(element);
				}
			});
		}
	}
};
function applyIntlTelPlugin(form) {
	if(!window.intlTelInput) {
		return false;
	}

	var input;
	for(var inputs = form.getElementsByTagName('input'),i=0,len=inputs.length;i<len;i++) {
		input = inputs[i];
		if(input.type == 'tel') {
			(function(){
				if(!(input.getAttribute('data-countrylist') === 'yes' || input.getAttribute('data-countrylist') === null)) {
					return;
				}
				var iti = intlTelInput(input, {
					utilsScript: vbt_baseURL + 'ext/intl-tel-input/js/utils.js',
					initialCountry: "auto",
					geoIpLookup: function(success, failure) {
						ajaxGet('https://ipinfo.io/json', {}, function(resp){
							var countryCode = (resp && resp.country) ? resp.country : '';
							success(countryCode);
						});
					}
				});
				input.addEventListener('countrychange', function(e){
					var dialCode = iti.getSelectedCountryData().dialCode;
					this._iti_country = dialCode ? dialCode : '';
					if(dialCode && this.value[0] != '+'){
						this.value = '+' + dialCode + this.value;
					}
				});
				input.addEventListener('blur', function(e){
					var number = String(this.value[0] == '+' ? this.value.substring(1) : this.value), number = number.indexOf('00')==0 ? number.substring(2) : number;
					if(!number) {
						number = iti.getSelectedCountryData().dialCode;
					}
					this.value = '+' + number;
					fireEvent(this, 'keyup');
				});
			})();
		}
	}
}
function attachRegionsSelectBoxes(form) {
	var countries = form.getElementsByClassName('vfb-select-countries')[0];
	if(countries && countries.tagName == 'SELECT') {
		attachRegionsSelectBox(countries);
		getRegionsList(null, countries, {
			source: 'Countries',
			pleaseSelect: __('-- Please Select --'),
			onChangeMessage: __('Loading Countries. Please wait...')
		});


		var states = form.getElementsByClassName('vfb-select-states')[0];
		if(states && states.tagName == 'SELECT') {
			attachRegionsSelectBox(states);
			attachRegionsSelectBoxesEvent(countries, states, {
				source: 'States',
				pleaseSelect: __('-- Please Select --'),
				onChangeMessage: __('Loading States. Please wait...')
			});

			var cities = form.getElementsByClassName('vfb-select-cities')[0];
			if(cities && cities.tagName == 'SELECT') {
				attachRegionsSelectBox(cities);
				attachRegionsSelectBoxesEvent(states, cities, {
					source: 'Cities',
					pleaseSelect: __('-- Please Select --'),
					onChangeMessage: __('Loading Cities. Please wait...')
				});
			}
		}
	}
}
function attachRegionsSelectBoxesEvent(source, destination, options) {
	$vbtJQ(source).on('change ', function(){
		var id = this.options[this.selectedIndex].getAttribute('data-id') || 0;
		getRegionsList(id, destination, options);
	});
}
function attachRegionsSelectBox(destination) {
	try {if($vbtJQ.fn.chosen) {
		$vbtJQ(destination).chosen();
	}} catch(e){}
}
function getRegionsList(id, destination, options) {

	destination.setAttribute('disabled', 'DISABLED');
	destination.selectedIndex = 0;
	
	if(id === 0) {
		destination.innerHTML = '';
		$vbtJQ(destination).trigger('chosen:updated');
		return;
	}

	destination.innerHTML = '<option value="">'+options.onChangeMessage+'</option>';

	$vbtJQ(destination).trigger('change');
	$vbtJQ(destination).trigger('chosen:updated');

	var action = 'https://www.vbt.io/Regions/' + options.source +'/' + id;

	$vbtJQ.getJSON(action, {}, function(response) {
		if("[object Array]"===Object.prototype.toString.call(response.data)) {
			destination.innerHTML = '<option value="">'+options.pleaseSelect+'</option>';
			var option;
			for(var i=0,len=response.data.length; i<len; i++) {
				option = document.createElement('option');
				option.setAttribute('data-id', response.data[i][0]);
				option.setAttribute('value', response.data[i][1]);
				option.innerHTML = response.data[i][1];

				destination.appendChild(option);
			}
			destination.selectedIndex = 0;
			destination.removeAttribute('disabled');
			$vbtJQ(destination).trigger('chosen:updated');
		}
	});
}

function __(t){return t;}
//	**************************************************************
// TODO webhook 
//	**************************************************************
function __checkForValidPersona(attrs) {
	//	1. CHECK IF THIS ANONYMOUS IS VALID FOR TRIGGERING THE ACTION
	//	1.1. ExecFor All Visitors/Only Subscribers/Only Anonymous
	//	1.2. GeoLoc Filter	[-1 | specific country]
	//	1.3. ExecInterval 	[Always|One time only|Specific x times]
	//	1.4. ExecIntervalNbr
	//	**************************************************************

	var stagePassCount = 0;
	var stagePassMax = 5;

	//	1.1. ExecFor All Visitors/Only Subscribers/Only Anonymous
	if (attrs.execFor == 0 || (attrs.execFor == 1 && visitor.subscriberId) || (attrs.execFor == 2 && !visitor.subscriberId))
		stagePassCount++;
	
	//	1.2. GeoLoc Filter	[-1 | specific country]
	if (attrs.filterGeoloc == '-1' || (attrs.filterGeoloc == visitor.country.toString().toLowerCase()))
		stagePassCount++;
	
	console.log('Geolocation: '+attrs.filterGeoloc);
	console.log('Visitor Location: '+visitor.country.toString().toLowerCase());
	
	if (attrs.filterGeolocstate == '' || attrs.filterGeolocstate.toString().toLowerCase() == 'a:0:{}' || attrs.filterGeolocstate.toString().toLowerCase() == 'n;' || (attrs.filterGeolocstate.toString().toLowerCase() == visitor.state.toString().toLowerCase()))
		stagePassCount++;
	
	//	1.3. ExecInterval 	[Always|One time only|Specific x times]
	var triggerCounter = __checkHowManyTimeActionIsTriggered(attrs);
	if (attrs.execInterval == '0' || (attrs.execInterval == '1' && triggerCounter == 1) || (attrs.execInterval == '2' && triggerCounter == attrs.execIntervalNbr))
		stagePassCount++;
	
	//	1.4. Devices 	[Always|One time only|Specific x times]
	var isMobile = __checkIfMobileDevice();
	if (attrs.filterDevice == '0' || (attrs.filterDevice == '2' && isMobile) || (attrs.filterDevice == '1' && !isMobile))
		stagePassCount++;
	
	//	1.5. PPC Referral 	[Google/Bing/Facebook/twitter/linkedin]
	//	ONLY WHEN UTM_SOURCE EXISTS
	if (attrs.filterPPC != '') {
		stagePassMax += 1;
		
		// Get utm_source (or gclid) from URL
		var utm_source = vbt_getValueFromURL(location.href, 'utm_source');
		if(!utm_source && vbt_getValueFromURL(location.href, 'gclid')) {
			utm_source = 'google';
		}
		
		if (utm_source) {
			utm_source = utm_source.toLowerCase();

			if (utm_source == 'google') {
				if (attrs.filterPPC.indexOf('1') != -1)
					stagePassCount++;
			} else if (utm_source == 'bing') {
				if (attrs.filterPPC.indexOf('2') != -1)
					stagePassCount++;
			} else if (utm_source == 'facebook') {
				if (attrs.filterPPC.indexOf('3') != -1)
					stagePassCount++;
			} else if (utm_source == 'twitter') {
				if (attrs.filterPPC.indexOf('4') != -1)
					stagePassCount++;
			} else if (utm_source == 'linkedin') {
				if (attrs.filterPPC.indexOf('5') != -1)
					stagePassCount++;
			} else if (utm_source == 'pinterest') {
                if (attrs.filterPPC.indexOf('6') != -1)
                    stagePassCount++;
            }
		}
	}
	
	console.log('Goal Action Passed: '+stagePassCount+' FROM '+stagePassMax);
	
	return (stagePassCount == stagePassMax);
}
// execute Webhook
function _execActionToObject(attrs, callbackFunc) {
	console.log('action has delay: '+attrs.delay+' seconds');
	
	if (_actionInProgress) {
		//	THERE IS ALREADY AN ACTION EXEC 
		//	PUT NEW ACTION IN QUEUE
		var queueItem = [];
		
		queueItem.attrs = attrs;
		queueItem.callbackFunc = callbackFunc;
		
		_actionsQueue.push(queueItem);
		
		console.log('A new Action #'+attrs.objId+' has been sent to queue.');
		
		return false;
	}
	
	if (attrs.delay > 0) {
		//	TRACK DELAYED ACTIONS
		//	\_ CHECK IF THE USER HAS COOKIE SAVED FOR THEM
		
		var _delayedArr = (vbt_getCookie('__vbDelayed') || '').split(',');

		//	SAVE IT ONLY ONCE
		if (_delayedArr.indexOf(attrs.objId) == -1) {
			_delayedArr.push(attrs.objId);
			
			vbt_setCookie('__vbDelayed', _delayedArr.join(','), 5);
		}

		__registerDelayAction(attrs);

		if (typeof callbackFunc == "function") callbackFunc();
	} else {
		//	REMOVE DELAY COOKIE IF EXISTS
		__removeDelayedActionFromCookie(attrs);

		//console.log(attrs.type);

		var randomVar = 0;
		var isOriginal = true;
		
		if (attrs.variations !== undefined && attrs.variations.length > 0) {
			randomVar = vbt_getRandomInt(0, attrs.variations.length);

			if (randomVar) {
				randomVar--;
				isOriginal = false;
				console.log("My Variation is " + (randomVar+1) + " of " + (attrs.variations.length + 1));
			} else {
				console.log("My Variation is the original");
			}
		}
		
		var popupStyle = attrs.popStyle;
		if (!isOriginal) {
			popupStyle = attrs.variations[randomVar].popStyle;
		} 
		//console.log(popupStyle);
		switch(attrs.type) {
			case '1':
				//console.log(attrs.popStyle);
				
				if (!isOriginal) {
					_registerActionToTrack(attrs, attrs.variations[randomVar].objId);
				} else {
					_registerActionToTrack(attrs, 0);
				}

				if (popupStyle == 0) {
					if (!isOriginal) {
						_displayPopupWnd(attrs.variations[randomVar].messageId, attrs.delay, attrs.variations[randomVar].popTheme, null, callbackFunc);
					} else {					
						_displayPopupWnd(attrs.messageId, attrs.delay, attrs.popTheme, null, callbackFunc);
					}
				} else if (popupStyle == 1) {
					//not used
					_displayPopoverWnd(attrs.messageId, attrs._target, attrs.delay, attrs.popTheme, callbackFunc);
				} else if (popupStyle == 2) {
					if (!isOriginal) {
						//console.log('notoriginal');
						//console.log(attrs.variations[randomVar]);

						_displayFooterBar(attrs.variations[randomVar].messageId, attrs.delay, attrs.variations[randomVar].popTheme, null, callbackFunc);
					} else {
						//console.log('original');
						//console.log(attrs);
						
						_displayFooterBar(attrs.messageId, attrs.delay, attrs.popTheme, null, callbackFunc);
					}
				}
				break;
			case '2':
				if (!isOriginal) {
					_registerActionToTrack(attrs, attrs.variations[randomVar].objId);
				} else {
					_registerActionToTrack(attrs, 0);
				}
				
				if (!isOriginal) {
					console.log('notoriginal');
					//console.log(attrs.variations[randomVar]);

					var fAttrs = {};
					
					fAttrs.messageId = attrs.variations[randomVar].messageId;
					fAttrs.popStyle = popupStyle;
					fAttrs.formId = attrs.formId;
					fAttrs.objId = attrs.objId;
					
					_displayPopupFormWnd(fAttrs, attrs.delay, attrs.variations[randomVar].popTheme, callbackFunc);
				} else {
					console.log('original');
					//console.log(attrs);
						
					_displayPopupFormWnd(attrs, attrs.delay, attrs.popTheme, callbackFunc);
				}
				break;
			case '3':
				if (!isOriginal) {
					_registerActionToTrack(attrs, attrs.variations[randomVar].objId);
				} else {
					_registerActionToTrack(attrs, 0);
				}
				
				if (!isOriginal) {
					var fAttrs = {};
					
					fAttrs.messageId = attrs.variations[randomVar].messageId;
					fAttrs.popStyle = popupStyle;
					fAttrs.pollId = attrs.pollId;
					fAttrs.objId = attrs.objId;
					
					_displayPopupPollWnd(fAttrs, attrs.delay, attrs.variations[randomVar].popTheme, callbackFunc);
				} else {
					_displayPopupPollWnd(attrs, attrs.delay, attrs.popTheme, callbackFunc);
				}
				break;
			case '4':
				_registerActionToTrack(attrs, 0);
				_forceRedirectUrl(attrs.url, attrs.delay, callbackFunc);
				break;
			case '5':
				_registerActionToTrack(attrs, 0);
				_injectJSCode(attrs.jscode, attrs.delay, callbackFunc);
				break;
		}
	}
}
function _displayPopupWnd(messageId, delay, theme, openCallback, closeCallback) {
	//	LOCK ALL OTHER ACTIONS
	_actionInProgress = true;
	//	**********************
	console.log("popup - MessageID: " + messageId);
	
	// Load MicroModal styles: 
	if(!visitor._vbtFlags.MicroModal) {
		visitor._vbtFlags.MicroModal = true;
		var MicroModalMarkup = '<div id="vbtWebhookBox-overlay" tabindex="-1"><div id="vbtWebhookBox-container" role="dialog" aria-modal="true" ></div></div>'; //data-micromodal-close

		vbt_createElement('div', document.body, MicroModalMarkup, {
			'id': 'vbtWebhookBox',
			'aria-hidden': 'true',
			//'style': 'display: none;'
		});
	}
	
	//var vbtWebhookPopup = document.getElementById('vbtWebhookBox');
	var webhookContainer = document.getElementById('vbtWebhookBox-container');
	
	webhookContainer.innerHTML = '';

	// Find popup
	var popup = document.getElementById(messageId);
	if(!popup) {
		var popup2 = document.getElementById('vb_newsletter_action_'+messageId.split('MyPopup_action_')[1]);
		if(popup2) {
			popup = document.createElement('div');
			popup.id = messageId;
			popup2.parentNode.insertBefore(popup, popup2);
			popup.appendChild(popup);
		}
	}
	
	// No popup? exit?
	if(!popup) return;
	
	webhookContainer.appendChild(popup.cloneNode(true));

	var form = $vbtJQ('form', webhookContainer).get(0);

	if ($vbtJQ('form', webhookContainer).get(0)) {
		var cssStyle = '.vboutLPGDPRErrorMessage, .vboutLPGDPRErrorMessage * { color: red !important; }';
		cssStyle += 'form[data-vboutpopup="modal-form"] .iti {display: block;}';//width:calc(100% - 52px);
		cssStyle += 'form[data-vboutpopup="modal-form"] input[type=tel] {padding-left: 48px!important;}';//width: 100% !important;
		$vbtJQ('form', webhookContainer).append('<style>'+cssStyle+'</style>');
	}

	// TODO setup all datepickers
	$vbtJQ("[data-vboutpopup=modal-field].date-picker").attr('data-lang', 'en');
	$vbtJQ("[data-vboutpopup=modal-field].date-picker").attr('data-years', '1915-2025');
	$vbtJQ("[data-vboutpopup=modal-field].date-picker").attr('data-format', 'MM/DD/YYYY');
	
	$vbtJQ("#VBOUT_FORM_CONTAINER [data-placeholder]").each(function() { 
		$vbtJQ(this).attr('placeholder', $vbtJQ(this).attr('data-placeholder'));
	});
	
	if ($vbtJQ("[data-vboutpopup=modal-field].date-picker").length) {
		$vbtJQ("[data-vboutpopup=modal-field].date-picker").ionDatePicker();
	}
	
	var inputs = webhookContainer.getElementsByClassName('vfb-birthday');
	if( inputs.length ) {
		vbt_loadStyle(vbt_baseURL + '/ext/birthdayinput/birthdayinput.css?v=1.4');
		vbt_loadJs(vbt_baseURL + '/ext/birthdayinput/birthdayinput.js?v=1.4', function(){
			for(var i=0,len=inputs.length;i< len;i++ ) {
				birthdayInput(inputs[i]);
			}
		});
	}

	console.log('messageId to show: ' + messageId);
	
	
	$vbtJQ('body').css('overflow', 'hidden');
	
	// Check if we have "Close" button
	if (!$vbtJQ('[data-vboutpopup=modal-close-link]', webhookContainer).length) {
		if (theme == 1) {
			$vbtJQ('[data-vboutpopup=modal-body]', webhookContainer).append('<div data-vboutpopup="modal-close-link"><a href="#">Close this popup</a></div>');
		} else if (theme == 13) {
			$vbtJQ('[data-vboutpopup=modal-theme]', webhookContainer).prepend('<a href="#" data-vboutpopup="modal-close-link">&nbsp;</a>');
		} else if (theme == 15) {
			$vbtJQ('[data-vboutpopup=modal-theme]', webhookContainer).append('<a href="#" data-vboutpopup="modal-close-link">&nbsp;</a>');
		} else if (theme == 17) {
			$vbtJQ('[data-vboutpopup=modal-theme]', webhookContainer).append('<a href="#" data-vboutpopup="modal-close-link">&nbsp;</a>');
		} else if (theme == 2) {
			$vbtJQ('[data-vboutpopup=modal-body]', webhookContainer).append('<div data-vboutpopup="modal-close-link"><a href="#">Close this popup</a></div>');
		} else if (theme == 3) {
			$vbtJQ('[data-vboutpopup=modal-body]', webhookContainer).append('<a data-vboutpopup="modal-close-link" href="#">x</a>');
		} else if (theme == 4) {
			$vbtJQ('[data-vboutpopup=modal-body]', webhookContainer).append('<a data-vboutpopup="modal-close-link" href="#">x</a>');
		} else if (theme == 5) {
			$vbtJQ('[data-vboutpopup=modal-body]', webhookContainer).append('<a data-vboutpopup="modal-close-link" href="#">x</a>');
		}
	}
	
	// Check if we have empty close button
	var _closeBtn = $vbtJQ('a[data-vboutpopup=modal-close-link]', webhookContainer).get(0);
	if (_closeBtn) {
		if(empty(trim(_closeBtn.innerHTML))) {
			$vbtJQ(_closeBtn).addClass('f-link-empty');
		}
	}

	// Attach "Close" Event
	$vbtJQ('[data-vboutpopup=modal-close-link]', webhookContainer).attr('href', 'javascript://');
	$vbtJQ('[data-vboutpopup=modal-close-link]', webhookContainer).unbind('click').click(function(e) {
		e.preventDefault();
		MicroModal.close('vbtWebhookBox');
		return false;
	});
	
	$vbtJQ('input[type=file]', webhookContainer).each(function(){
		if(this.getAttribute('data-accept') && !this.getAttribute('accept')) {
			this.setAttribute('accept', this.getAttribute('data-accept'))
		}
	});
	
	try{
		typeof openCallback == "function" && openCallback(webhookContainer);
	} catch(e){}
	
	// Show popup
	MicroModal.show('vbtWebhookBox', {
		onClose: function(){
			try {
				_actionInProgress = false; 
				$vbtJQ('body').css('overflow', '');
				try{
					typeof closeCallback == "function" && closeCallback();
				} catch(e){}
				setTimeout(_execNextActionInQueue, 250);
			} catch(e) {}
		}
	});

}

function _displayPopoverWnd(messageId, _target, delay, theme, callbackFunc) {
	$vbtJQ(_target).popover({
		placement : 'bottom',
		html: true,
		title : '',
		content: function() { 
			var div_id = "tmp-id-" + $vbtJQ.now();
			return details_in_popup(div_id, document.getElementById(messageId));
		},
		trigger: 'manual'
	}).off('shown.bs.popover').on('shown.bs.popover', function () {
		var $popup = $vbtJQ(this);

		if (theme == 'dark-theme') {
			$popup.next('.popover').addClass('dark');
		}
			
		$popup.next('.popover').find('button.close').unbind('click').click(function (e) {
			$popup.popover('hide');
			try{
				typeof callbackFunc == "function" && callbackFunc();
			} catch(e){}
		});
	}).popover('show');
}
function _displayFooterBar(messageId, delay, theme, openCallback, closeCallback) {
	//	LOCK ALL OTHER ACTIONS
	_actionInProgress = true;
	//	**********************

	console.log("optin bar: " + messageId);
	
	if ($vbtJQ("[data-vboutbar=modal-field].date-picker").length) {
		$vbtJQ("[data-vboutbar=modal-field].date-picker").ionDatePicker();
	}
	
	if ($vbtJQ('#'+messageId).parents('#vb_newsletter_action_'+messageId.split('MyPopup_action_')[1]).length) {
		$vbtJQ('#'+messageId).parents('#vb_newsletter_action_'+messageId.split('MyPopup_action_')[1]).show();
	} else if ($vbtJQ('#vb_message_action_'+messageId.split('MyPopup_action_')[1]).length) {
		$vbtJQ('#vb_message_action_'+messageId.split('MyPopup_action_')[1]).show();
	} else if ($vbtJQ('#'+messageId).parent().is('body')) {
		$vbtJQ('#'+messageId).show();
	} else {
		$vbtJQ('#'+messageId).parent().show();
	}

	$vbtJQ("[data-vboutbar=modal-theme]").attr('style', '');

	//$vbtJQ('[data-vboutbar=modal-theme]').addClass('showme');

	var webhookContainer = document.getElementById(messageId);

	if (!$vbtJQ('[data-vboutbar=modal-close-link]').length) {
		if (theme == 14) {
			$vbtJQ('[data-vboutbar=modal-header]', webhookContainer).append('<div data-vboutbar="modal-close-link">&nbsp;</div>');
		} else if (theme == 1) {
			$vbtJQ('[data-vboutbar=modal-header] [data-vboutbar=modal-container]', webhookContainer).append('<div data-vboutbar="modal-close-link">&#215;</div>');
		} else if (theme == 10) {
			$vbtJQ('[data-vboutbar=modal-container]', webhookContainer).append('<div data-vboutbar="modal-close-link">&nbsp;</div>');
		} else if (theme == 11) {
			$vbtJQ('[data-vboutbar=modal-container]', webhookContainer).append('<div data-vboutbar="modal-close-link">&#215;</div>');
		} else if (theme == 12) {
			$vbtJQ('[data-vboutbar=modal-header] [data-vboutbar=modal-container]', webhookContainer).prepend('<div data-vboutbar="modal-close-link"><img alt="" style="min-width:16px!important;min-height:16px!important;" src="https://www.vbout.com/trackerjs/behaviors/optinbars/12/images/close.png"></div>');
		} else if (theme == 13) {
			$vbtJQ('[data-vboutbar=modal-header]', webhookContainer).append('<div data-vboutbar="modal-close-link">&#215;</div>');
		} else if (theme == 15) {
			$vbtJQ('[data-vboutbar=modal-header]', webhookContainer).append('<div data-vboutbar="modal-close-link">&nbsp;</div>');
		} else if (theme == 16) {
			$vbtJQ('[data-vboutbar=modal-body]', webhookContainer).prepend('<div data-vboutbar="modal-close-link"><img alt="" src="https://www.vbout.com/trackerjs/behaviors/optinbars/16/images/close.png"></div> ');
		} else if (theme == 2) {
			$vbtJQ('[data-vboutbar=modal-header] [data-vboutbar=modal-container]', webhookContainer).append('<div data-vboutbar="modal-close-link">&#215;</div>');
		} else if (theme == 3) {
			$vbtJQ('[data-vboutbar=modal-header] [data-vboutbar=modal-container]', webhookContainer).append('<div data-vboutbar="modal-close-link">&#215;</div>');
		} else if (theme == 4) {
			if ($vbtJQ('[data-vboutbar=modal-privacy-info]').length) {
				$vbtJQ('[data-vboutbar=modal-privacy-info]', webhookContainer).append('<p data-vboutbar="modal-privacy-negation"><a data-vboutbar="modal-close-link" href="#">No thanks, don\'t show this bar again.</a></p>');
			} else {
				$vbtJQ('[data-vboutbar=modal-container]', webhookContainer).append('<div data-vboutbar="modal-close-link">&#215;</div>');
			}				
		} else if (theme == 7) {
			$vbtJQ('[data-vboutbar=modal-header]', webhookContainer).append('<div data-vboutbar="modal-close-link">&nbsp;</div>');
		} else if (theme == 8) {
			$vbtJQ('[data-vboutbar=modal-container]', webhookContainer).prepend('<div data-vboutbar="modal-close-link">&nbsp;</div>');
		}
	}

	try{
		typeof openCallback == "function" && openCallback(webhookContainer);
	} catch(e){}

	$vbtJQ('[data-vboutbar=modal-close-link]', webhookContainer).unbind('click').click(function(e) { 
		e.preventDefault();
		_actionInProgress = false;
		$vbtJQ(webhookContainer).fadeOut('fast',function(e){
			//e.preventDefault();
			_actionInProgress = false;
			$vbtJQ(this).parent().hide();
			try{
				typeof closeCallback == "function" && closeCallback();
			} catch(e){}
			setTimeout(_execNextActionInQueue, 250);
		});
	});
}

// TODO optimize
function _displayPopupFormWnd(attrs, delay, theme, closeCallback) {
	var messageId;
	if (attrs.messageId.replace(/[^_]/g, "").length > 2) {
		//hack to replace the messageId
		messageId = attrs.messageId.substring(0, 15) + attrs.messageId.split('MyPopup_action_')[1].split('_')[0] + attrs.messageId.split('MyPopup_action_')[1].split('_')[1];
	} else {
		messageId = attrs.messageId;
	}
	
	var formSubmit = (attrs.popStyle == 0) ? '[data-vboutpopup="modal-form-submit"]' : '[data-vboutbar="modal-form-submit"]';
	
	var SubscriptionFormGDPR = function(form){
		$vbtJQ('.vboutLPGDPRErrorMessage', form).removeClass('vboutLPGDPRErrorMessage');
		$vbtJQ('input.vfb-gdpr', form).each(function(){
			if((this.name.indexOf('[gdpr]')>-1 || $vbtJQ(this).hasClass('requiredOption')) && !this.checked) {
				$vbtJQ(this.parentNode).addClass('vboutLPGDPRErrorMessage');
			}
		});
		return $vbtJQ('.vboutLPGDPRErrorMessage', form).get(0) ? 0 : 1;
	};
	var validatePhoneCountryCode = function(form) {
		var valid = true;
		$vbtJQ('input[type=tel]', form).each(function(){
			var field = this;
			if($vbtJQ(field).hasClass('required') && '_iti_country' in field && field._iti_country) {
				var newValue = field.value.replace(/\+/g, '').replace(/\s/g, '').replace(/-/g, '');
				if(newValue == field._iti_country) {
					valid = false;
					var label = $vbtJQ('<label class=\"error\" generated=\"true\" />').html(__('This field is required.'));
					var iti = $vbtJQ(field).closest('.iti--allow-dropdown').get(0);
					if( iti ) {
						label.insertAfter(iti);
					} else {
						label.insertAfter(field);
					}
				}
			}
		});
		
		return valid;
	}
	
	var openCallback = function(popup){
		$vbtJQ(formSubmit, popup).each(function(e) {
			var form = $vbtJQ(this).parents(form).get(0);
			if(form._vbTWHF) return;
			form._vbTWHF = true;
			/*
			// GDPR options
			var gdpr = form.getElementsByClassName('vfb-gdpr');
			if(gdpr.length) {
				disableSubmitButton(form, true);
				for(var inputs = form.getElementsByTagName('input'),i=0,len=inputs.length;i< len;i++) {
					inputs[i].addEventListener('change', function(){
						disableSubmitButton(form, !GDPRchecked(gdpr));
					});
				}
			}
			*/
			if ($vbtJQ(popup).find('#VBOUT_FORM_CONTAINER').find('form').css('float') && attrs.popStyle == 2) {
				$vbtJQ(popup).find('#VBOUT_FORM_CONTAINER').addClass('clearfix').css('width', 'auto');
			}
		    setTimeout(function(){
				attachIntlTelPlugin(form);
				attachRegionsSelectBoxes(form);
			}, 500);

			
			if (attrs.popStyle == 0) {
                var updateSubmit = function(sending) {
                    var btn = $vbtJQ(popup).find('[data-vboutpopup=modal-form-container] [data-vboutpopup=modal-form-submit]').get(0);
                    if(btn) {
                    	if(sending) {
                            if(!btn.getAttribute('data-label')) {
                                btn.setAttribute('data-label', btn.innerHTML)
                            }
                            btn.innerHTML = '<img src="https://www.vbout.com/images/facebook-loader.gif" style=""> please wait...';
                        } else {
                            if( btn.getAttribute('data-label')) {
                            	btn.innerHTML = btn.getAttribute('data-label');
                            }
                        }
                    }
                };
				var success = function(data) {
                	if(data.status == 'error') {
                		var msg = $vbtJQ('<div class="VBOUT_FORM_ERROR" />').html(data.message);
                		$vbtJQ(popup).find('#VBOUT_FORM_CONTAINER').prepend(msg);
                	} else {
						$vbtJQ(popup).find('#VBOUT_FORM_CONTAINER').addClass('clearfix').addClass(data.status).html(data.message);
						$vbtJQ(popup).find('#ClosePollForm').click(function(e) { 
							e.preventDefault();
							e.stopPropagation();
		
							MicroModal.close('vbtWebhookBox');
						});
						try {if('redirect' in data && data.redirect != '') {
							window.open(data.redirect, "_blank");
						}} catch(e){}
					}
				};
			} else {
                var updateSubmit = function(sending) {
                    var btn = $vbtJQ(popup).find('[data-vboutbar=modal-form-container] [data-vboutbar=modal-form-submit]').get(0);
                    if(btn) {
                    	if(sending) {
                            if(!btn.getAttribute('data-label')) {
                                btn.setAttribute('data-label', btn.innerHTML)
                            }
                            btn.innerHTML = '<img src="https://www.vbout.com/images/facebook-loader.gif" style=""> please wait...';
                        } else {
                            if( btn.getAttribute('data-label')) {
                            	btn.innerHTML = btn.getAttribute('data-label');
                            }
                        }
                    }
                };
				var success = function(data) {
                	if(data.status == 'error') {
                		var msg = $vbtJQ('<div class="VBOUT_FORM_ERROR" />').html(data.message);
                		$vbtJQ(popup).find('#VBOUT_FORM_CONTAINER').prepend(msg);
                    } else {
						$vbtJQ(popup).find('#VBOUT_FORM_CONTAINER').addClass('clearfix').addClass(data.status).html(data.message);
						$vbtJQ(popup).find('#ClosePollForm').remove();
					}
				};
			}
			
			$vbtJQ(this).click(function(e) {
				e.preventDefault();
	
				$vbtJQ(popup).find('[name="SubscriptionForm[sessionId]"]').val(visitor._sessionId);
				
				//	VALIDATE IF ONE SUBMIT WITHOUT ANY OPTION
				var formValidated = true;
				$vbtJQ(popup).find('input.required, input.required').each(function() {
					$vbtJQ(this).removeClass('popup-field-error');
					$vbtJQ(this).next('p').remove();
	
					if ($vbtJQ(this).val() == '') {
						$vbtJQ(this).addClass('popup-field-error');
						$vbtJQ(this).after('<p style="font-size:12px;color:#cc0000;">this field is required!</p>');
						formValidated = false;
					} else {
						if ($vbtJQ(this).hasClass('email')) {
							var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
							if (!regex.test($vbtJQ(this).val())) {
								$vbtJQ(this).addClass('popup-field-error');
								$vbtJQ(this).after('<p style="font-size:12px;color:#cc0000;">this field must be a valid email!</p>');
								formValidated = false;
							} else {
								$vbtJQ(this).removeClass('popup-field-error');
								$vbtJQ(this).next('p').remove();
							}
						} else {
							$vbtJQ(this).removeClass('popup-field-error');
							$vbtJQ(this).next('p').remove();
						}
					}
				});
				$vbtJQ('input[type=file]', form).each(function(){
					if(this.files instanceof FileList && this.files[0] && !isNaN(this.files[0].size) && this.files[0].size > 0) {
						var max = this.getAttribute('data-max-size');
						if(!isNaN(max) && max > 0) {
							var size = this.files[0].size / 1024/1024;
							if(size > max) {
								formValidated = false;
								$vbtJQ(this).addClass('popup-field-error');
								$vbtJQ(this).after('<p style="font-size:12px;color:#cc0000;">File size exceeded max size</p>');
								return;
							}
						}
					}
				});
				if(!SubscriptionFormGDPR( $vbtJQ(popup).find('form').get(0) )) {
					formValidated = false;
				}
				if(!validatePhoneCountryCode( $vbtJQ(popup).find('form').get(0) )) {
					formValidated = false;
				}
	
				if (formValidated) {
					var ajaxOptions = {
						url: vbt_baseURL + "tracker/newsletter/"+attrs.formId+"/"+attrs.objId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain+'&webhookid='+(attrs.actionId ? attrs.actionId : ''),
						type: "POST",
						dataType: 'json',
						data: $vbtJQ(popup).find('form').serialize(),
						beforeSend: function(){
	                    	$vbtJQ(popup).find('.VBOUT_FORM_ERROR').remove();
							updateSubmit(true);
						},
						success: function(data){
							updateSubmit(false);
							success(data);
						},
						error: function(ex) {
							updateSubmit(false);
							$vbtJQ(popup).find('.pollingFormContainer').html("An error occured: " + ex.status + " " + ex.statusText);
						}
					};
					//$vbtJQ.ajax(ajaxOptions);
					ajaxOptions.beforeSend();
					ajaxPostFormData(ajaxOptions.url, $vbtJQ(popup).find('form').get(0), ajaxOptions.success, ajaxOptions.error);
				}
			});
		});
	};
	
	
	if (attrs.popStyle == 0) {
		_displayPopupWnd(messageId, delay, theme, openCallback, closeCallback);
		
		$vbtJQ('body').css('overflow', 'hidden');
	} else {
		_displayFooterBar(messageId, delay, theme, openCallback, closeCallback);
	}
}

function _displayPopupPollWnd(attrs, delay, theme, callbackFunc) {
	var messageId;
	if (attrs.messageId.replace(/[^_]/g, "").length > 2) {
		//hack to replace the messageId
		messageId = attrs.messageId.substring(0, 15) + attrs.messageId.split('MyPopup_action_')[1].split('_')[0] + attrs.messageId.split('MyPopup_action_')[1].split('_')[1];
	} else {
		messageId = attrs.messageId;
	}

	var formSubmit = (attrs.popStyle == 0) ? '[data-vboutpopup="modal-form-submit"]' : '[data-vboutbar="modal-form-submit"]';
	var openCallback = function(popup) {
		$vbtJQ(formSubmit, popup).each(function(e) {
			var form = $vbtJQ(this).parents('form').get(0);
			if(form._vbTWHF) return;
			form._vbTWHF = true;

			$vbtJQ(form).submit(function(e) {
				e.preventDefault();
			});
	
    $vbtJQ(popup).find('#PollChoices label > span').click(function() {
    $vbtJQ(this).parent().parent().find('input[type=radio]').attr('checked', true);
    });

			$vbtJQ(this).click(function(e) { 
				e.preventDefault();
				
				$vbtJQ(popup).find('[name="PollForm[sessionId]"]').val(visitor._sessionId);
				
				if (attrs.popStyle == 0) {
					var beforeSend = function() {
						$vbtJQ(popup).find('.pollingFormContainer [data-vboutpopup=modal-form-submit]').data('label', $vbtJQ(popup).find('.pollingFormContainer [data-vboutpopup=modal-form-submit]').html());
						
						$vbtJQ(popup).find('.pollingFormContainer [data-vboutpopup=modal-form-submit]').html('<img src="https://www.vbout.com/images/facebook-loader.gif" style=""> please wait...');
					};
					var success = function(data) {
						$vbtJQ(popup).find('#ClosePollForm').click(function(e) { 
							e.preventDefault();
							
							MicroModal.close('vbtWebhookBox');
						});
					};
				} else {
					var beforeSend = function() {
						$vbtJQ(popup).find('.pollingFormContainer [data-vboutbar=modal-form-submit]').data('label', $vbtJQ(popup).find('.pollingFormContainer [data-vboutbar=modal-form-submit]').html());
						
						$vbtJQ(popup).find('.pollingFormContainer [data-vboutbar=modal-form-submit]').html('<img src="https://www.vbout.com/images/facebook-loader.gif" style=""> please wait...');
					};
					var success = function(data) {
						$vbtJQ(popup).find('#ClosePollForm').hide();
					};
				}
	
				//	VALIDATE IF ONE SUBMIT WITHOUT ANY OPTION
				if ($vbtJQ(popup).find('input[type="radio"]:checked').length == 0) {
					alert('Please check an option');
				} else {
					$vbtJQ.ajax({
						url: vbt_baseURL + "tracker/poll/"+attrs.pollId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
						type: "POST",
						dataType: 'json',
						data: $vbtJQ(popup).find('form').serialize(),
						beforeSend: function() {
							beforeSend();
						},
						success: function(data) {
							if(data) {
								$vbtJQ(popup).find('.pollingFormContainer').addClass(data.status).html(data.message);
	
								$vbtJQ(popup).find('#ShowResults').unbind('click').click(function(e) { 
								e.preventDefault();
								
									$vbtJQ(popup).find('.pollingFormContainer').removeClass(data.status).html('RESULTS ARE GONE!!!');
							});
							}
							
							success(data);
						},
						error: function(ex) {
							$vbtJQ(popup).find('.pollingFormContainer').html("An error occured: " + ex.status + " " + ex.statusText);
						}
					});
				}
			});
		});
	};

	if (attrs.popStyle == 0) {
		_displayPopupWnd(attrs.messageId, delay, theme, openCallback, callbackFunc);
	} else if (attrs.popStyle == 2) {
		_displayFooterBar(attrs.messageId, delay, theme, openCallback, callbackFunc);
	}
}


function _forceRedirectUrl(url, delay, callbackFunc) {
	window.location = url;
}

function _injectJSCode(scriptCode, delay, callbackFunc) {
	$vbtJQ('body').append(scriptCode.replace(/&quot;/g, '"'));
	
	if (typeof callbackFunc == "function") callbackFunc();
}





function details_in_popup(div_id, container) {
	var goalId = $vbtJQ(container).attr('data-goalid');
	
	//	CHECK IF ANONYMOUS OR SUBSCRIBER
	userId = visitor.subscriberId || visitor.ip;

	$vbtJQ.ajax({
		url: vbt_baseURL + "tracker/message/"+goalId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
		type: "POST",
		dataType: 'json',
		data: 'pageUrl='+document.URL+'&pageTitle='+document.title+'&userId='+userId,
		success: function(data) {
			 $vbtJQ('#'+div_id).find('.inner').html(data.message);
		},
		error: function(ex) {
			$vbtJQ('#'+div_id).html("An error occured: " + ex.status + " " + ex.statusText);
		}
	});
	
	return '<div id="'+ div_id +'"><button style="position: absolute; right: 10px; top: 4px; z-index: 105001; border: 0 none; cursor: pointer; padding: 0; color: #000; float: right; font-size: 21px; font-weight: bold; line-height: 1; opacity: 0.2; text-shadow: 0 1px 0 #fff;" class="close close-right-button" type="button">×</button><div class="inner"><div style="width: 280px">Loading...</div></div></div>';
}

function __registerDelayAction(attrs) {
	
	if(!vbt_getCookie('__vbDelayedAction_'+attrs.objId)) {
		//	CREATE COOKIE
		
		attrs._target = null;
		vbt_setCookie('__vbDelayedAction_'+attrs.objId, Base64.encode(JSON.stringify(attrs)), 5);
	}
	//	EXEC TIMER
	setTimeout(function(){_execActionDelayedTimer(attrs.objId)}, 1000);
}
function __removeDelayedActionFromCookie(attrs) {
	if (attrs.execInterval == 0) {
		vbt_deleteCookie('__vbDelayedAction_'+attrs.objId);
	}

	//	DELETE THE ID FROM THE LIST
	var _delayedArr = (vbt_getCookie('__vbDelayed') || '').split(',');

	var _newDelayedArr = [];
	
	for (i = 0; i < _delayedArr.length; i++) { 
		if (_delayedArr[i] != attrs.objId) {
			_newDelayedArr.push(attrs.objId);
		}
	}
	vbt_setCookie('__vbDelayed', _newDelayedArr.join(','), 5);
	
	console.log('ActionID: '+attrs.objId+' removed from cookie.');
}
function _registerActionToTrack(attrs, variationId) {
	//	REGISTER PAGE EVENTS
	if (visitorTrackInfo === 'undefined') {
		setTimeout(function(){_registerActionToTrack(attrs, variationId)}, 1000);
		return;
	}

	if (!actionAlreadySent) {
		if (attrs.actionId) {
			visitorTrackInfo.trackAction(attrs.actionId, variationId);
		}
	} else {
		visitorTrackInfo.updateActionVariation(attrs.objId, variationId);
	}
}
function _execActionDelayedTimer(actionId) {
	//	CHECK COOKIE
	var delayedAction = vbt_getCookie('__vbDelayedAction_'+actionId);
	if(delayedAction) {
		try{
			var attrs = JSON.parse(Base64.decode(delayedAction));

			if (attrs.delay <= 0) {	//	defensive programming
				console.log('delay finish execute it now!!!!');
				_execActionToObject(attrs, '');
			} else {
				//	Add seconds too time and save it to cookie
				attrs.delay -= 1;
				//console.log(attrs.delay);

				vbt_setCookie('__vbDelayedAction_'+attrs.objId, Base64.encode(JSON.stringify(attrs)), 5);

				setTimeout(function(){_execActionDelayedTimer(actionId)}, 1000);
			}
		} catch(e){}
	}
}

function _execNextActionInQueue() {
	if (_actionsQueue.length) {
		//	FIFO QUEUE
		var actionToBeExec = _actionsQueue.shift();
		_execActionToObject(actionToBeExec.attrs, actionToBeExec.callbackFunc);
	}
}

function __checkHowManyTimeActionIsTriggered(attrs) {
	var nbr = 0;
	
	if (attrs.isaction) {
		//	CHECK COOKIE
		nbr = vbt_getCookie('__vbAction_'+attrs.objId+'_'+visitor._sessionId);

		console.log('Action is triggered: '+nbr);
	} else {
		//	CHECK COOKIE
		nbr = vbt_getCookie('__vbGoal_'+attrs.objId);
		
		console.log('Goal is triggered: '+nbr);
	}
	
	return isNaN(nbr) ? 0 : nbr;
}



function _execSendEmailToSubscriber(funnelPage) {
	var userId = vbt_getCookie('__ssId');
	
	if(userId) {
		console.log('send email to subscriber: '+userId);
		
		$vbtJQ.ajax({
			url: vbt_baseURL + "tracker/email/"+funnelPage.funnelId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
			type: "POST",
			dataType: 'json',
			data: 'userId='+userId+'&messageId='+funnelPage.emailId,
			success: function(data) {
				// NOTHING
				console.log('Email sent to subscriber '+userId);
			},
			error: function(ex) {
				//	NOTHING
				console.log('Email error not sent to subscriber '+userId);
			}
		});
	}
}
function _execSendEmailToAnonymous(funnelPage) {

	var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,})+$/;

	//	CHECK IF ANONYMOUS VARIABLE ARE ALREADY THERE
	_vbset.forEach(function(vbvar) {
		if (vbvar[0] == '__vbvar__') {
			//	HANDLE THE MAGIC :))))
			var input;
			if (vbvar[1][0] != '_listID') {
				//	CHECK THE ID
				input = $vbtJQ('#'+vbvar[1][1]);
				if (!input.length) {
					//	CHECK THE NAME
					input = $vbtJQ('[name="'+vbvar[1][1]+'"]');
				}

				if (input && input.length) {
					input.attr('data-vboutcapture', true);
					input.attr('data-fieldid', vbvar[1][0]);
					
					//	TRIGGER REGISTER ANONYMOUS AFTER 10 SEC FROM FILLING THE EMAIL FIELD
					input.on('change', function() {
						//	CHECK IF ITS AN EMAIL SEND WAIT 20 sec before sending information
						
						if (regexEmail.test($vbtJQ(this).val())) {
							clearTimeout(__GLOBAL__TIMER);
							__GLOBAL__TIMER = setTimeout(function() { _execSignupToListForAnonymous(funnelPage); }, 500);
							__GLOBAL__TIMER_FLAG = 1;
						}
					});
					
					input.on('blur', function() {
						//	RESET THE TIMER TO 10 SEC IF ONE OF THE CAPTURE CHANGE VALUE
						if ($vbtJQ(this).val() != '') {
						
							if (regexEmail.test($vbtJQ(this).val())) {
								if (__GLOBAL__TIMER_FLAG) {
									clearTimeout(__GLOBAL__TIMER);
									__GLOBAL__TIMER = setTimeout(function() { _execSignupToListForAnonymous(funnelPage); }, 500);
								}
							}
						}
					});
				}
			}
		}
	});
}
function _execSignupToListForAnonymous(funnelPage) {
	//return; // Commented for fixing later
	var formAttributes = {
		listId: 0,
		ip: visitor.ip,
		sessId: visitor._sessionId,
		AnonymousSignupForm: {
			fields: {}
		}
	};
	
	_vbset.forEach(function(vbvar) {
		if (vbvar[0] == '__vbvar__') {
			if (vbvar[1][0] == '_listID') {
				formAttributes.listId = vbvar[1][1];
			} else {
				formAttributes.AnonymousSignupForm.fields[vbvar[1][0].substring(1)] = $vbtJQ('[data-fieldid='+vbvar[1][0]+']').val();
			}
		}
	});
	
	$vbtJQ.ajax({
		url: vbt_baseURL + "tracker/anonymous/signup/"+funnelPage.funnelId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
		type: "POST",
		dataType: 'json',
		data: formAttributes,
		success: function(data) {
			// NOTHING
			if (data.emailid > 0) {
				console.log('Email prepared to be sent to anonymous subscriber No.'+data.emailid);
				
				vbt_setCookie('__ssId', data.emailid, 7 * 24);
				vbt_setCookie('__reset', '1', 7 * 24);
			} else {
				console.log('Email failed.');
			}
		},
		error: function(ex) {
			//	NOTHING
			console.log('Email error not sent to anonymous!!!');
		}
	});
}

function _execResetAnyAnonymousEmail(funnelId, userId) {
	$vbtJQ.ajax({
		url: vbt_baseURL+"tracker/anonymous/reset/"+funnelId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
		type: "POST",
		dataType: 'json',
		data: 'userId='+userId,
		success: function(data) {
			// NOTHING
			vbt_deleteCookie('__reset');
			console.log('Anonymous has been reseted: '+userId);
		},
		error: function(ex) {
			//	NOTHING
			console.log('Error reseting anonymous!!!');
		}
	});
}

// TODO Those functions may old and may need deletion
function __checkAddActionTimerTrigger(funnelPageId) {
	var vbFunnelAddAction = vbt_getCookie('__vbFunnelAddAction_'+funnelPageId);
	if(vbFunnelAddAction) {
		var addActionObj = JSON.parse(vbFunnelAddAction);
		
		if (addActionObj.secondsLeft == 0) {
			//	TRIGGER ACTION
			clearInterval(__funnelAddActionTimer);
			//	DELETE THE COOKIE
			vbt_deleteCookie('__vbFunnelAddAction_'+funnelPageId);

			console.log('timer off - now the add action is triggered!');
			
			_execAddActionToObject('vb_funnel_message_'+funnelPageId, addActionObj.delay);
		} else {
			addActionObj.secondsLeft -= 1;
			
			vbt_setCookie('__vbFunnelAddAction_'+funnelPageId, JSON.stringify(addActionObj), 5);
		}
	}
}
function _execAddActionToObject(addActionId, addActionType) {
	console.log('Add Action Type: '+addActionType);
	if (addActionType == '0') { // MESSAGE DISPLAY
		//	WTD: CHANGE THE popTheme Dynamically
		_displayFunnelPopupWnd(addActionId, 'light-theme');
	} else if (addActionType == '1') { // SEND EMAIL
		//	CHECK IF A SUBSCRIBER THEN SEND THE EMAIL
		if (visitor.subscriberId) {
			var userId = visitor.subscriberId;
			var funnelId = $vbtJQ(document.getElementById(messageId)).attr('data-funnelid');
			
			$vbtJQ.ajax({
				url: vbt_baseURL+"tracker/email/"+funnelId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
				type: "POST",
				dataType: 'json',
				data: 'userId='+userId,
				success: function(data) {
					// NOTHING
					console.log('Email sent to subscriber '+userId);
				},
				error: function(ex) {
					//	NOTHING
					console.log('Email error not sent to subscriber '+userId);
				}
			});
		}
	}
}

function _displayFunnelPopupWnd(messageId, theme) {
	console.log(messageId);
	$.vboutModal(document.getElementById(messageId), {
		overlayClose:true, 
		containerCss:{height:'auto'}, 
		additionalClass: theme, 
		onClose: function() {
			$vbtJQ('body').css('overflow', 'auto');
			/*$.vboutModal.close();*/
		}, 
		onShow: function() {
			prepareFunnelMessageBody(document.getElementById(messageId));
		}
	});

	$vbtJQ('body').css('overflow', 'hidden');
}
function prepareFunnelMessageBody(container) {
	var funnelId = $vbtJQ(container).attr('data-funnelid');
	
	//	CHECK IF ANONYMOUS OR SUBSCRIBER
	if (visitor.subscriberId)
		userId = visitor.subscriberId;
	else
		userId = visitor.ip
		
	$vbtJQ.ajax({
		url: vbt_baseURL+"tracker/fmessage/"+funnelId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
		type: "POST",
		dataType: 'json',
		data: 'pageUrl='+document.URL+'&pageTitle='+document.title+'&userId='+userId,
		beforeSend: function() {
			$vbtJQ(container).html('please wait...');
		},
		success: function(data) {
			$vbtJQ(container).html(data.message);
			$vbtJQ(window).trigger('resize.simplemodal');  
		},
		error: function(ex) {
			$vbtJQ(container).html("An error occured: " + ex.status + " " + ex.statusText);
		}
	});
}


function _execSendFormEmailToAnonymous(id, name, form, listId, goalId) {
	//	CHECK IF ANONYMOUS VARIABLE ARE ALREADY THERE
	_vbset.forEach(function(vbvar) {
		if (vbvar[0] == '__vbvar__') {
			//	HANDLE THE MAGIC :))))
			if (vbvar[1][0] != '_listID') {
				var elem = $vbtJQ('#'+vbvar[1][1], form);
				if (!elem.length) {
					elem = $vbtJQ('[name="'+vbvar[1][1]+'"]', form);
				}
			
				if (elem.length) {
					elem.attr('data-vboutcapture', true);
					elem.attr('data-fieldid', vbvar[1][0]);
					
					//	TRIGGER REGISTER ANONYMOUS AFTER 10 SEC FROM FILLING THE EMAIL FIELD
					elem.change(function() { 
						//	CHECK IF ITS AN EMAIL SEND WAIT 20 sec before sending information
						var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						
						if (regex.test($vbtJQ(this).val())) {
							clearTimeout(__GLOBAL__TIMER);
							__GLOBAL__TIMER = setTimeout(function() { _execSignupToListForFormAnonymous(id, name, form, listId, goalId); }, 500);
							__GLOBAL__TIMER_FLAG = 1;
						}
					});
					
					elem.blur(function() { 
						//	RESET THE TIMER TO 10 SEC IF ONE OF THE CAPTURE CHANGE VALUE
						if (__GLOBAL__TIMER_FLAG) {
							if ($vbtJQ(this).val() != '') {
								var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

								if (regex.test($vbtJQ(this).val())) {
									clearTimeout(__GLOBAL__TIMER);
									__GLOBAL__TIMER = setTimeout(function() { _execSignupToListForFormAnonymous(id, name, form, listId, goalId); }, 500);
								}
							}
						}
					});
				}
			}
		}
	});
}


function _execSignupToListForFormAnonymous(id, name, form, listId, goalId)
{
	var formAttributes = {
		listId: listId,
		ip: visitor.ip,
		sessId: visitor._sessionId,
		AnonymousSignupForm: {
			fields: {}
		}
	};
	
	_vbset.forEach(function(vbvar) {
		if (vbvar[0] == '__vbvar__') {
			if (vbvar[1][0] == '_listID') {
				//formAttributes.listId = vbvar[1][1];
			} else {
				formAttributes.AnonymousSignupForm.fields[vbvar[1][0].substring(1)] = jQuery('[data-fieldid='+vbvar[1][0]+']', form).val();
			}
		}
	});
	
	jQuery.ajax({//form.goalId
		url: "https://www.vbout.com/tracker/anonymous/form/signup/"+goalId+"/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
		type: "POST",
		dataType: 'json',
		data: formAttributes,
		success: function(data) {
			// NOTHING
			if (data.emailid > 0) {
				console.log('Email prepared to be sent to anonymous subscriber No.'+data.emailid);
				
				var expdate = new Date(new Date().getTime() + 7 * 86400000);
				document.cookie = "__ssId="+escape(data.emailid) + "; expires=" + expdate.toUTCString() + ";domain="+_cookieDomain+";path="+_cookiePath;
				document.cookie = "__reset=1; expires=" + expdate.toUTCString() + ";domain="+_cookieDomain+";path="+_cookiePath;
			} else {
				console.log('Email failed.');
			}
		},
		error: function(ex) {
			//	NOTHING
			console.log('Email error not sent to anonymous!!!');
		}
	});
}
function _executeRegisterToThisList(field, fieldType)
{
	var emailInput = jQuery('[' + fieldType + '=' + field + ']').get(0),
	form = emailInput ? closestTag(emailInput, 'form') : null, input, inputs = [];
	if(form) {
		_vbset.forEach(function(vbvar) {
			if (vbvar[0] == '__vbvar__') {
				if (vbvar[1][0] != '_listID') {
					input = null;
					if (jQuery('#'+vbvar[1][1]).length > 0) {
						input = jQuery('#'+vbvar[1][1], form).get(0);
					} else if (jQuery('[name='+vbvar[1][1]+']').length > 0) {
						input = jQuery('[name='+vbvar[1][1]+']', form).get(0);
					}
					if(input) {
						inputs.push(input);
					}
				}
			}
		});
		if(inputs.length) {
			var timer;
			inputs.forEach(function(input) {
				vbt_attachEvent(input, 'keypress', function(){
					this._vbtChanged = true;
					clearTimeout(timer);
				}, true);
				vbt_attachEvent(input, 'paste', function(){
					this._vbtChanged = true;
					clearTimeout(timer);
				}, true);
				vbt_attachEvent(input, 'focus', function(){
					this._vbtValue = jQuery(this).val();
				}, true);
				vbt_attachEvent(input, 'blur', function(){
					if(this._vbtChanged && this._vbtValue == jQuery(this).val()) {
						fireEvent(this, 'change');
					}
					this._vbtChanged = false;
				}, true);
				vbt_attachEvent(input, 'change', function(){
					clearTimeout(timer);
					var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,})+$/;
					if (regex.test(jQuery(emailInput).val())) {
						timer = setTimeout(function() { _execSignupToThisList(); }, 1500);
					}
				}, true);
			});
			return ;
		}
	}

	//	TRIGGER REGISTER ANONYMOUS AFTER 10 SEC FROM FILLING THE EMAIL FIELD
	jQuery('[' + fieldType + '=' + field + ']').change(function() { 
		//	CHECK IF ITS AN EMAIL SEND WAIT 20 sec before sending information
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if (regex.test(jQuery(this).val())) {
			clearTimeout(__GLOBAL__TIMER);
			__GLOBAL__TIMER = setTimeout(function() { _execSignupToThisList(); }, 500);
			__GLOBAL__TIMER_FLAG = 1;
		}
	});
}

function _execSignupToThisList()
{
	var formAttributes = {
		listId: 0,
		ip: visitor.ip,
		sessId: visitor._sessionId,
		AnonymousSignupForm: {
			fields: {}
		}
	};

	_vbset.forEach(function(vbvar) {
		if (vbvar[0] == '__vbvar__') {
			if (vbvar[1][0] == '_listID') {
				formAttributes.listId = vbvar[1][1];
			} else {
				if (jQuery('#'+vbvar[1][1]).length > 0) {
					formAttributes.AnonymousSignupForm.fields[vbvar[1][0].substring(1)] = jQuery('#'+vbvar[1][1]).val();
				} else if (jQuery('[name='+vbvar[1][1]+']').length > 0) {
					formAttributes.AnonymousSignupForm.fields[vbvar[1][0].substring(1)] = jQuery('[name='+vbvar[1][1]+']').val();
				}
			}
		}
	});
	
	jQuery.ajax({
		url: "https://www.vbout.com/tracker/anonymous/signup3/?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,
		type: "POST",
		dataType: 'json',
		data: formAttributes,
		success: function(data) {
			// NOTHING
			if (data.emailid > 0) {
				//console.log('Email prepared to be sent to anonymous subscriber No.'+data.emailid);
				
				var expdate = new Date(new Date().getTime() + 7 * 86400000);
				document.cookie = "__ssId="+escape(data.emailid) + "; expires=" + expdate.toUTCString() + ";domain="+_cookieDomain+";path="+_cookiePath;
				document.cookie = "__reset=1; expires=" + expdate.toUTCString() + ";domain="+_cookieDomain+";path="+_cookiePath;

				console.log(data.emailid);
			}
		},
		error: function(ex) {
			//	NOTHING
			console.log('Email error not sent to anonymous!!!');
		}
	});
}




function vbt_showMappingTools() {
	(function(jQuery){
		var mappingMenu = '<style>#device-overlay-mobile {width:375px;left:50%;margin-left:-187px;z-index:997;position: fixed;top: 0;height: 100%;background-color: #000;opacity: 0.2;border-left: 3px solid #f00;border-right: 3px solid #f00;}#device-overlay-tablet {width:768px;left:50%;margin-left:-384px;z-index:997;position: fixed;top: 0;height: 100%;background-color: #000;opacity: 0.2;border-left: 3px solid #f00;border-right: 3px solid #f00;}.chosen-container .chosen-results{max-height:150px!important;}#clickmap-loading,#heatmap-loading,#scrollmap-loading{position: fixed; top: 2%; width: 100%; left: 0%; height: 100%; background: transparent url("https://www.vbout.com//images/preloader-map.gif") no-repeat scroll center center; z-index: 99996;}#clickmap-overlay,#heatmap-overlay,#scrollmap-overlay{z-index:99997;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;filter:alpha(opacity=70);opacity:.7}#clickmap-container span.clickmap{display: block;position:absolute;width:20px;height:20px;background:url(https://www.vbout.com//images/clickdot.png) center center no-repeat;z-index:99998;}[data-vbtooltip],.tooltip{position:relative;cursor:pointer}[data-vbtooltip]:before,[data-vbtooltip]:after{position:absolute;visibility:hidden;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);opacity:0;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);pointer-events:none}[data-vbtooltip]:hover:before,[data-vbtooltip]:hover:after,[data-vbtooltip]:focus:before,[data-vbtooltip]:focus:after{visibility:visible;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);opacity:1}[data-vbtooltip]:before{z-index:1001;border:6px solid transparent;background:transparent;content:""}[data-vbtooltip]:after{z-index:1000;padding:8px;width:160px;background-color:#000;background-color:hsla(0,0%,20%,0.9);color:#fff;content:attr(data-vbtooltip);font-size:14px;line-height:1.2;border-radius: 5px;}[data-vbtooltip]:before,[data-vbtooltip]:after{bottom:100%;left:50%}[data-vbtooltip]:before{margin-left:-6px;margin-bottom:-12px;border-top-color:#000;border-top-color:hsla(0,0%,20%,0.9)}[data-vbtooltip]:after{margin-left:-80px}[data-vbtooltip]:hover:before,[data-vbtooltip]:hover:after,[data-vbtooltip]:focus:before,[data-vbtooltip]:focus:after{-webkit-transform:translateY(-12px);-moz-transform:translateY(-12px);transform:translateY(-12px)}.vbtooltip-left:before,.vbtooltip-left:after{right:100%;bottom:50%;left:auto}.vbtooltip-left:before{margin-left:0;margin-right:0px;margin-bottom:0;border-top-color:transparent;border-left-color:#000;border-left-color:hsla(0,0%,20%,0.9)}.v-left:hover:before,.vbtooltip-left:hover:after,.vbtooltip-left:focus:before,.vbtooltip-left:focus:after{-webkit-transform:translateX(-12px);-moz-transform:translateX(-12px);transform:translateX(-12px)}.vbtooltip-left:before{top:23px}.vbtooltip-left:after{margin-left:0;margin-bottom:-16px}[data-vbtooltip]:focus::before{transform: translateX(0);transform: translateY(-12px);}</style><div id="HeatMapScreen" style="z-index: 99999;position: fixed; left: 0; top: 50%; margin-top: -155px;  border:1px solid #000; width: 36px; height: 310px;border-left: 0;display: none;"><img src="https://www.vbout.com//images/heatmap_bg.jpg"></div><div id="FilterMappingMenu" style="background-color: rgb(255, 255, 255); position: fixed; right: -243px; top: 20px; box-shadow: 0px 0px 5px rgb(51, 51, 51); z-index: 99999; border-radius: 7px 0px 0px 7px;"><a style="text-decoration: none; font-family: arial; font-size: 15px; display: none; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px 5px; position: absolute; left: -30px; top: 10px; box-shadow: 0px 0px 5px rgb(51, 51, 51); width: 25px;box-sizing: unset;font-weight: bold;text-align: center;padding: 3px;" id="FilterMappingHeat" data-vbtooltip="Show Filter" class="vbtooltip-left" href="javascript://">x</a><a id="ResponsiveScreen" style="display: none;text-decoration: none; font-family: arial; font-size: 12px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px 5px; position: absolute; left: -35px; top: 100px; box-shadow: 0px 0px 5px rgb(51, 51, 51); width: 25px;box-sizing: unset;" onclick="javascript:void((function(d){if(self!=top||d.getElementById(&#039;toolbar&#039;)&amp;&amp;d.getElementById(&#039;toolbar&#039;).getAttribute(&#039;data-resizer&#039;))return false;d.write(&#039;&lt;!DOCTYPE HTML&gt;&lt;html style=&quot;opacity:0;&quot;&gt;&lt;head&gt;&lt;meta charset=&quot;utf-8&quot;/&gt;&lt;/head&gt;&lt;body&gt;&lt;a data-viewport=&quot;375&times;667&quot; data-icon=&quot;mobile&quot; &gt;Apple iPhone 7&lt;/a&gt;&lt;a data-viewport=&quot;768x1024&quot; data-icon=&quot;tablet&quot;&gt;Tablet (e.g. Apple iPad 2-3rd, mini)&lt;/a&gt;&lt;a data-viewport=&quot;1920&times;1080&quot; data-icon=&quot;tv&quot;&gt;HDTV 1080p&lt;/a&gt;&lt;script src=&quot;https://www.vbout.com//js/resizer.min.js?1587496359&quot;&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;&#039;)})(document));" data-vbtooltip="Show Responsive Toolbar" class="vbtooltip-left" href="javascript://"><img src="https://www.vbout.com//images/map_responsive.png"></a><span style="position: absolute; left: 0px; display: block; background-color: rgb(255, 255, 255); z-index: 9997; width: 10px; height: 40px; top: 6px;"></span><form id="FilterMappingForm" style="padding: 10px;"><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by date:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Date" name="FilterField[date]"><option value="0">- Everyday -</option><option value="1">Today</option><option value="2">Yesterday</option><option value="3">Last Week</option><option value="4">Last Month</option></select></div><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by Visitors:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Visitors" name="FilterField[visitor]"><option value="0">- Everyone -</option><option value="1">Anonymous Visits</option><option value="2">Subscriber Visits</option></select></div><div style="display: none;"><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by device:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Device" name="FilterField[device]"><option value="">- All devices -</option><option value="0" selected="selected">Desktop Only</option><option value="2">tablets Only</option><option value="1">Mobile Only</option></select></div><div><label style="font-size: 12px; color: #000;display: block;margin-bottom: 5px;">Filter by location:</label><select style="background-color: #ffffff;border: 1px solid #cccccc;width: 220px;height: 30px;line-height: 30px;border-radius: 4px;color: #555555;display: inline-block;font-size: 14px;margin-bottom: 10px;padding: 4px 6px;vertical-align: middle;" id="FilterField_Location" name="FilterField[location]"><option value="0">- Anywhere -</option></select></div><div style="padding-top: 10px;"><p id="ApplyFilterMessage" style="color: green; margin: 0px 0px 10px!important; display: none;">Filter applied...</p><button id="ApplyFilterMappingButton" name="ApplyFilterMappingButton" type="button" style="padding: 5px 20px;font-size: 14px;margin: 0 auto;display: block;width: 100%;">Apply Filter</button><button style="padding: 0;display:none;" id="CloseFilterMappingButton" name="CloseFilterMappingButton" type="button">Close</button></div></form></div><div id="MappingMenu" style="display: none; background-color: rgb(0, 0, 0); position: fixed; right: 0px; top: 20px; box-shadow: 0px 0px 5px rgb(51, 51, 51); z-index: 99999; border-radius: 7px 0px 0px 7px;"><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px;" id="GetHeatMaps" data-vbtooltip="Show Heatmap" class="vbtooltip-left" href="javascript://"><img src="https://www.vbout.com//images/heat_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: #7cb138; color: rgb(0, 0, 0); padding: 5px; border-radius: 5px 0px 0px;display: none;" id="HideHeatMaps" data-vbtooltip="Hide Heatmap" class="vbtooltip-left" href="javascript://"><img src="https://www.vbout.com//images/heat_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; padding: 5px; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); margin-top: 1px;" id="GetClickMaps" data-vbtooltip="Show ClickMap" class="vbtooltip-left" href="javascript://"><img src="https://www.vbout.com//images/click_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; padding: 5px; background-color: #7cb138; color: rgb(0, 0, 0); margin-top: 1px;display: none;" data-vbtooltip="Hide ClickMap" class="vbtooltip-left" id="HideClickMaps" href="javascript://"><img src="https://www.vbout.com//images/click_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); margin-top: 1px; padding: 5px; border-radius: 0px 0px 0px 5px;" id="GetScrollMaps" class="vbtooltip-left" data-vbtooltip="Show ScrollMap" href="javascript://"><img src="https://www.vbout.com//images/scroll_map.png"></a><a style="text-decoration: none; font-family: arial; font-size: 12px; display: block; background-color: #7cb138; color: rgb(0, 0, 0); margin-top: 1px; padding: 5px; border-radius: 0px 0px 0px 5px;display: none;" data-vbtooltip="Hide ScrollMap" class="vbtooltip-left" id="HideScrollMaps" href="javascript://"><img src="https://www.vbout.com//images/scroll_map.png"></a></div><canvas id="canvas" style="left: 0px; top: 0px; z-index: 99999; position: absolute; opacity: 0.5; display: none;"></canvas><canvas id="scrollcanvas" style="left: 0px; top: 0px; z-index: 99999; position: absolute; opacity: 0.5; display: none;"></canvas>';

		function vbout_action_mapping_exceute() {
			window.vbtActionMappingExecuted = true;
			var theParent = document.body;
			var theKid = document.createElement("div");
			
			theKid.style.width = "auto";
			theKid.style.height = "auto";
			theKid.innerHTML = mappingMenu;
			
			// prepend theKid to the beginning of theParent
			theParent.insertBefore(theKid, theParent.firstChild);
			
			document.getElementById('FilterField_Device').value = filterDevice;
			
			jQuery.get(vbt_baseURL + 'track/filters/getcountries', { 
				l:escape( [document.location.protocol, '//', document.location.host, document.location.pathname].join('')),
				_account:_vbsetData.account,
				_domain:_vbsetData.domain
				},  
				function(htmlContentFromServer) { 
					jQuery('#FilterField_Location').append(htmlContentFromServer);
					
					//kill chosen and refresh plyugin
					jQuery('#FilterField_Location').trigger("chosen:updated");
				} 
			); 
			/*
			jQuery.get(vbt_baseURL + 'track/filters/getsubscribers', { 
				l:escape( [document.location.protocol, '//', document.location.host, document.location.pathname].join('')),
				_account:_vbsetData.account,
				_domain:_vbsetData.domain
				},  
				function(htmlContentFromServer) { 
					jQuery('#FilterField_Visitors').find('optgroup').html(htmlContentFromServer);
					
					//kill chosen and refresh plyugin
					jQuery('#FilterField_Visitors').trigger("chosen:updated");
				} 
			); 
			*/
			jQuery("#FilterMappingHeat").click(function() {
				if (parseInt(jQuery('#FilterMappingMenu').css('right')) < 0) {
					jQuery('#FilterMappingMenu').stop().animate({'right':0});
				} else {
					jQuery('#FilterMappingMenu').stop().animate({'right':'-243px'})
				}
			}); 
			
			jQuery("#ApplyFilterMappingButton").click(function() {
				if (!clickmap_loading && clickmap_active) {
					jQuery("#HideClickMaps").trigger('click');
					jQuery("#GetClickMaps").trigger('click');
				}
				
				if (!heatmap_loading && heatmap_active) {
					jQuery("#HideHeatMaps").trigger('click');
					jQuery("#GetHeatMaps").trigger('click');
				}
				
				if (!scrollmap_loading && scrollmap_active) {
					jQuery("#HideScrollMaps").trigger('click');
					jQuery("#GetScrollMaps").trigger('click');
				}
				
				jQuery('#ApplyFilterMessage').stop().show().delay(3000).queue(function(n) {
					jQuery(this).hide();
				});
			}); 
			
			jQuery("#CloseFilterMappingButton").click(function() {
				jQuery('#FilterMappingMenu').stop().animate({'right':'-243px'})
			}); 
			
			jQuery("#GetClickMaps").click(function() {
				if (clickmap_loading) 
					return;
				
				clickmap_loading = true;
				
				if (!jQuery('.vb-overlay').length) {
					jQuery('<div id="clickmap-overlay" class="vb-overlay"></div>').appendTo('body');
					jQuery('#clickmap-overlay').width(jQuery('body').width());		
					
					//jQuery('<div>'+jQuery('#clickmap-overlay').width()+'</div>').appendTo('body');
				}
				
				jQuery('<div id="clickmap-loading"></div>').appendTo('body'); 
				jQuery.get(vbt_baseURL + 'track/mapclick/get', { 
					l:escape( [document.location.protocol, '//', document.location.host, document.location.pathname].join('')),
					_account:_vbsetData.account,
					_domain:_vbsetData.domain,
					_filterdate:jQuery('#FilterField_Date').val(),
					_filtervisitor:jQuery('#FilterField_Visitors').val(),
					_filterdevice:jQuery('#FilterField_Device').val(),
					_filterlocation:jQuery('#FilterField_Location').val(),
					_maxWidth:jQuery('body').width()
					},  
					function(htmlContentFromServer) { 
						clickmap_active = true;
						clickmap_loading = false;
					
						showBodyBG();
						
						jQuery('#clickmap-loading').remove(); 
						
						jQuery(htmlContentFromServer).appendTo('body');     
						
						jQuery('#clickmap-container').width(jQuery('body').width()).css('overflow-x', 'hidden');
						jQuery('#clickmap-container').css('position', 'static');
						//jQuery('<div>'+jQuery('#clickmap-container').width()+'</div>').appendTo('body');
						jQuery("#GetClickMaps").hide();
						jQuery("#HideClickMaps").css("display", "block").show();
					} 
				); 
			}); 
			 
			jQuery("#HideClickMaps").click(function() {
				if (clickmap_loading) 
					return;
					
				clickmap_active = false;
		
				hideBodyBG();
				
				if (!clickmap_active && !heatmap_active && !scrollmap_active)
					jQuery('.vb-overlay').remove(); 
				
				jQuery('#clickmap-container').remove(); 
				jQuery('#clickmap-loading').remove(); 
				
				jQuery(this).hide();
				jQuery("#GetClickMaps").css("display", "block").show();
			});
			
			jQuery("#GetScrollMaps").click(function() {
				if (scrollmap_loading) 
					return;
				
				scrollmap_loading = true;
					
				if (!jQuery('.vb-overlay').length)
					jQuery('<div id="scrollmap-overlay" class="vb-overlay"></div>').appendTo('body'); 
					
				jQuery('<div id="scrollmap-loading"></div>').appendTo('body'); 
				
				var body = document.body,
					html = document.documentElement;

				var height = Math.max( body.scrollHeight, body.offsetHeight, 
									   html.clientHeight, html.scrollHeight, html.offsetHeight );
									   
				var dimension = [jQuery('body').width(), height];
				
				//console.log(height);
				//console.log(Math.max(jQuery(document).height(), jQuery(window).height(),/* For opera: */ document.documentElement.clientHeight));
				
				jQuery('#scrollcanvas').attr('width', dimension[0]);
				jQuery('#scrollcanvas').attr('height', dimension[1]);
				
				jQuery.get(vbt_baseURL + 'track/scrollheat/get', { 
					l:escape( [document.location.protocol, '//', document.location.host, document.location.pathname].join('')),
					_account:_vbsetData.account,
					_domain:_vbsetData.domain,
					_filterdate:jQuery('#FilterField_Date').val(),
					_filtervisitor:jQuery('#FilterField_Visitors').val(),
					_filterdevice:jQuery('#FilterField_Device').val(),
					_filterlocation:jQuery('#FilterField_Location').val()
					},  
					function(data) { 
						scrollmap_active = true;
						scrollmap_loading = false;
						
						showBodyBG();
						
						jQuery("#scrollmap-overlay").remove();
						jQuery("#scrollmap-loading").remove();
						
						jQuery('#scrollcanvas').show()
						
						new ScrollHeatMap(
							'scrollcanvas',
							'https://www.vbout.com/images/scrollmap.png',
							dimension[0],
							dimension[1],
							data,
							{
							  screenshotAlpha: 0.6,
							  heatmapAlpha: 0.8
							}
						  );
						
						jQuery("#GetScrollMaps").hide();
						
						jQuery("#HeatMapScreen").show();
						jQuery("#HideScrollMaps").css("display", "block").show();
					} 
				); 
			}); 
			 
			jQuery("#HideScrollMaps").click(function() { 
				if (scrollmap_loading) 
					return;
					
				scrollmap_active = false;
				
				jQuery('#scrollcanvas').hide()
		
				hideBodyBG();
				
				if (!clickmap_active && !heatmap_active && !scrollmap_active)
					jQuery('.vb-overlay').remove(); 
				
				jQuery(this).hide();
				
				if (!heatmap_active)
					jQuery("#HeatMapScreen").hide();
				jQuery("#GetScrollMaps").css("display", "block").show();
			}); 
			
			jQuery("#GetHeatMaps").click(function() {
				if (heatmap_loading) 
					return;
				
				heatmap_loading = true;
				
				if (!jQuery('.vb-overlay').length)
					jQuery('<div id="heatmap-overlay" class="vb-overlay"></div>').appendTo('body'); 
					
				jQuery('<div id="heatmap-loading"></div>').appendTo('body'); 
				
				var dimension = [jQuery('body').width(), jQuery('body').height()];
				
				jQuery('#canvas').attr('width', dimension[0]);
				jQuery('#canvas').attr('height', dimension[1]);
				
				jQuery.get(vbt_baseURL + 'track/mapheat/get', { 
					l:escape( [document.location.protocol, '//', document.location.host, document.location.pathname].join('')),
					_account:_vbsetData.account,
					_domain:_vbsetData.domain,
					_filterdate:jQuery('#FilterField_Date').val(),
					_filtervisitor:jQuery('#FilterField_Visitors').val(),
					_filterdevice:jQuery('#FilterField_Device').val(),
					_filterlocation:jQuery('#FilterField_Location').val()
					},  
					function(data) { 	
						heatmap_active = true;
						heatmap_loading = false;
						
						showBodyBG();
						
						//jQuery("#heatmap-overlay").remove();
						jQuery("#heatmap-loading").remove();
						
						jQuery('#canvas').show()
						
						var heat = vbout_simpleheat(canvas);
						
						heat.clear();
						
						heat.data(data);
						heat.max(36);
						
						heat.draw();
						
						jQuery("#GetHeatMaps").hide();
						jQuery("#HeatMapScreen").show();
						jQuery("#HideHeatMaps").css("display", "block").show();
					} 
				); 
			}); 
			 
			jQuery("#HideHeatMaps").click(function() { 	
				if (heatmap_loading) 
					return;
				
				heatmap_active = false;
		
				hideBodyBG();
				
				jQuery('#canvas').hide()
				
				if (!clickmap_active && !heatmap_active && !scrollmap_active)
					jQuery('.vb-overlay').remove(); 
				
				jQuery(this).hide();
				if (!scrollmap_active)
					jQuery("#HeatMapScreen").hide();
					
				jQuery("#GetHeatMaps").css("display", "block").show();
			});

			loadChosen();
		}
		
		//console.log(document.getElementById('FilterField_Device').value);
		
		function showBodyBG() {
			if (clickmap_active || heatmap_active || scrollmap_active) {
				jQuery("body").css('overflow-x', 'hidden');
			}
		}
		
		function hideBodyBG() {
			if (!clickmap_active && !heatmap_active && !scrollmap_active) {
				jQuery("body").css('overflow-x', '');
			}
		}
		
		function loadChosen() {
			try{
				jQuery('#FilterField_Location').chosen();
				jQuery('#FilterField_Visitors').chosen();
			} catch(e){}
		}

		vbt_loadStyle(vbt_baseURL + '/scripts/plugins/chosen/chosen.css?v=1.1.5');
		vbt_loadJs(vbt_baseURL + '/scripts/plugins/chosen/chosen142.jquery.min.js?v=1.0', function(){
			loadChosen();
		});
		
		vbt_loadJs(vbt_baseURL + '/js/vbout-heatmap-draw.js?v=1.0.1', function(){
			console.log('Simple heat is now loaded...');
		});
		vbt_loadJs(vbt_baseURL + 'trackerjs/scrollheatmap.js?n', function(){
			console.log('Scroll heat is now loaded...');
			vbout_action_mapping_exceute();
		});
	})($vbtJQ);
}


function vbt_execHeatmap(ssIp, curCountry) {
	(function(jQuery){
		/* BEGIN CLICK MAP TEST */
    !function(s){s.fn.saveClicks=function(){s(this).bind("mousedown.clickmap",function(e){var c=new RegExp("[; ]__ssId=([^\\s;]*)"),n=(" "+document.cookie).match(c);n?ssId=unescape(n[1]):ssId=0;var a=new RegExp("[; ]__vbsess=([^\\s;]*)"),o=(" "+document.cookie).match(a);o?sessId=unescape(o[1]):sessId=0;var t=new RegExp("[; ]__vbtrk=([^\\s;]*)"),i=(" "+document.cookie).match(t);i?ssTrack=unescape(i[1]):ssTrack="",s.post(vbt_baseURL + "track/mapclick?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,{x:e.pageX,y:e.pageY,ssId:ssId,ssIp:ssIp,sessId:sessId,ssTrack:ssTrack,_c:curCountry,platform:navigator.platform,userAgent:navigator.userAgent,l:escape([document.location.protocol, '//', document.location.host, document.location.pathname].join(''))})})},s.fn.stopSaveClicks=function(){s(this).unbind("mousedown.clickmap")}}(jQuery),jQuery(function(){jQuery(document).saveClicks()});
		/* END CLICK MAP TEST */
	
		/* BEGIN HEAT MAP TEST */
		function sendHeat(){if(heat_data.length){var s=new RegExp("[; ]__ssId=([^\\s;]*)"),e=(" "+document.cookie).match(s);e?ssId=unescape(e[1]):ssId=0;var a=new RegExp("[; ]__vbtrk=([^\\s;]*)"),t=(" "+document.cookie).match(a);t?ssTrack=unescape(t[1]):ssTrack="";var n=new RegExp("[; ]__vbsess=([^\\s;]*)"),o=(" "+document.cookie).match(n);o?sessId=unescape(o[1]):sessId=0,jQuery.post(vbt_baseURL + "track/mapheat?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,{h:heat_data,ssId:ssId,ssIp:ssIp,sessId:sessId,ssTrack:ssTrack,_c:curCountry,platform:navigator.platform,userAgent:navigator.userAgent,l:escape([document.location.protocol, '//', document.location.host, document.location.pathname].join(''))}).done(function(){heat_data=[]})}}var heat_data=[];!function(s){s.fn.saveHeats=function(){s(this).bind("mousemove",function(s){var e={};e.x=s.pageX,e.y=s.pageY,heat_data.push(e)})},s.fn.stopSaveHeat=function(){s(this).unbind("mousemove")}}(jQuery),jQuery(function(){jQuery(document).saveHeats(),setInterval(function(){sendHeat()},5e3)});
		/* END HEAT MAP TEST */
		
		/* BEGIN SCROLL HEAT MAP TEST */
		function sendScrollHeat(){if(scrollheat_data.length&&scrollheat_data.length>2&&!scrollheatSending){scrollheatSending=true;var t=new RegExp("[; ]__ssId=([^\\s;]*)"),s=(" "+document.cookie).match(t);s?ssId=unescape(s[1]):ssId=0;var o=new RegExp("[; ]__vbtrk=([^\\s;]*)"),e=(" "+document.cookie).match(o);e?ssTrack=unescape(e[1]):ssTrack="",jQuery.post(vbt_baseURL + "track/scrollheat?_account="+_vbsetData.account+"&_domain="+_vbsetData.domain,{h:scrollheat_data,scrn:jQuery(window).height(),ssId:ssId,ssIp:ssIp,ssTrack:ssTrack,_c:curCountry,platform:navigator.platform,userAgent:navigator.userAgent,l:escape([document.location.protocol, '//', document.location.host, document.location.pathname].join(''))}).done(function(){scrollheat_data=[];scrollheatSending=false;})}}!function(t){t.fn.saveScrollHeats=function(){t(this).bind("scroll",function(s){scrollTimeout&&clearTimeout(scrollTimeout),scrollTimeout=setTimeout(function(){scrollheat_data.push(parseInt(t(window).scrollTop()))},100)})},t.fn.stopSaveScrollHeat=function(){t(this).unbind("mousemove")}}(jQuery),jQuery(function(){jQuery(document).saveScrollHeats(),setInterval(function(){sendScrollHeat()},500)});
		/* END SCROLL HEAT MAP TEST */
	})($vbtJQ);
}


function __checkIfMobileDevice() {
	var isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
	return isMobile;
}

try { (function() {
	var onReadyCheck;
	onReadyCheck = setInterval(function(){
		if(document && document.getElementsByTagName && document.getElementById && document.body) {
			clearInterval(onReadyCheck);

			var storage = getStorage();
			if(empty(storage.get('vbtEFRefLegacy'))) {
				storage.set('vbtEFRefLegacy', document.referrer);
			}

			var input, forms;
			forms = document.getElementsByTagName('form');
			for(var i=0, len=forms.length; i<len; i++) {
				try {if(forms[i].getAttribute('action').indexOf('vbout.com/embedcode/submit/') > -1 && forms[i].getAttribute('action').indexOf('_format=page') == -1) {
					input = document.createElement('input');
					input.setAttribute('type', 'hidden');
					input.setAttribute('name', '_vbtRef');
					input.setAttribute('value', storage.get('vbtEFRefLegacy'));
					forms[i].appendChild(input);
				}} catch(e){}
			}
		}
	}, 13);

	function getStorage(){return {localStoreCookie:"vbtLSCookie-",localStoreSupport:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}},set:function(t,o,e){if(e){var r=new Date;r.setTime(r.getTime()+24*e*60*60*1e3);var l="; expires="+r.toGMTString()}else l="";this.localStoreSupport()?localStorage.setItem(t,o):document.cookie=this.localStoreCookie+t+"="+o+l+"; path=/"},get:function(t){if(this.localStoreSupport())return localStorage.getItem(t);for(var o=this.localStoreCookie+t+"=",e=document.cookie.split(";"),r=0;r<e.length;r++){for(var l=e[r];" "==l.charAt(0);)l=l.substring(1,l.length);if(0==l.indexOf(o))return l.substring(o.length,l.length)}return null},remove:function(t){this.localStoreSupport()?localStorage.removeItem(t):this.set(this.localStoreCookie+t,"",-1)}};}
	function empty(r){var n,t,e,f=[void 0,null,!1,0,"","0"];for(t=0,e=f.length;t<e;t++)if(r===f[t])return!0;if("object"==typeof r){for(n in r)if(r.hasOwnProperty(n))return!1;return!0}return!1}
})(); } catch(e){}

// Helper JS functions for GDPR option
function disableSubmitButton(form, disabled) {
	var func = disabled===false ? 'removeAttribute' : 'setAttribute';
	for(var btns = form.getElementsByTagName('input'),i=0,len=btns.length;i<len;i++) {
		btns[i].type == 'submit' && btns[i][func]('disabled', 'DISABLED');
	}
	for(var btns = form.getElementsByTagName('button'),i=0,len=btns.length;i<len;i++) {
		btns[i].type == 'submit' && btns[i][func]('disabled', 'DISABLED');
	}
}						
function GDPRchecked(inputs) {
	for(var i=0,len=inputs.length;i<len;i++) {
		if((' '+inputs[i].className+' ').indexOf(' requiredOption ') >-1 && !inputs[i].checked) {
			return false;
		}
	}
	return true;
}

// https://github.com/Ghosh/micromodal
//"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):e.MicroModal=o()
!function(e,o){e.MicroModal=o()}(this,function(){"use strict"
var e=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),t=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o]
return t}return Array.from(e)}
return function(){var i=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],n=function(){function n(o){var i=o.targetModal,a=o.triggers,r=void 0===a?[]:a,s=o.onShow,l=void 0===s?function(){}:s,c=o.onClose,d=void 0===c?function(){}:c,u=o.openTrigger,f=void 0===u?"data-micromodal-trigger":u,h=o.closeTrigger,v=void 0===h?"data-micromodal-close":h,g=o.disableScroll,m=void 0!==g&&g,b=o.disableFocus,y=void 0!==b&&b,w=o.awaitCloseAnimation,k=void 0!==w&&w,p=o.debugMode,E=void 0!==p&&p
e(this,n),this.modal=document.getElementById(i),this.config={debugMode:E,disableScroll:m,openTrigger:f,closeTrigger:v,onShow:l,onClose:d,awaitCloseAnimation:k,disableFocus:y},r.length>0&&this.registerTriggers.apply(this,t(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return o(n,[{key:"registerTriggers",value:function(){for(var e=this,o=arguments.length,t=Array(o),i=0;i<o;i++)t[i]=arguments[i]
t.forEach(function(o){o.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var e=this.modal
this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function o(){e.classList.remove("is-open"),e.removeEventListener("animationend",o,!1)},!1):e.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var o=document.querySelector("body")
switch(e){case"enable":Object.assign(o.style,{overflow:"initial",height:"initial"})
break
case"disable":Object.assign(o.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(i)
return Object.keys(e).map(function(o){return e[o]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes()
e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var o=this.getFocusableNodes()
if(this.modal.contains(document.activeElement)){var t=o.indexOf(document.activeElement)
e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||t!==o.length-1||(o[0].focus(),e.preventDefault())}else o[0].focus()}}]),n}(),a=null,r=function(e,o){var t=[]
return e.forEach(function(e){var i=e.attributes[o].value
void 0===t[i]&&(t[i]=[]),t[i].push(e)}),t},s=function(e){if(!document.getElementById(e))return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},l=function(e){if(e.length<=0)return console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1},c=function(e,o){if(l(e),!o)return!0
for(var t in o)s(t)
return!0}
return{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=[].concat(t(document.querySelectorAll("["+o.openTrigger+"]"))),a=r(i,o.openTrigger)
if(!0!==o.debugMode||!1!==c(i,a))for(var s in a){var l=a[s]
o.targetModal=s,o.triggers=[].concat(t(l)),new n(o)}},show:function(e,o){var t=o||{}
t.targetModal=e,!0===t.debugMode&&!1===s(e)||(a=new n(t),a.showModal())},close:function(){a.closeModal()}}}()});

// Exec vbout
(function() {
	var jQueryGoogle = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';

	// AMD support
	if (typeof define === "function" && define.amd && typeof require === "function" ) {
		// TODO we need to check if we already have jquery to be loaded
		require(['jquery'], function($){
			$vbtJQ = $;

			console.log('jQuery > vbtJQ has been loaded from requirejs');
			console.log('jQuery > vbtJQ Version: '+jQuery.fn.jquery);

			_exec_vbout();
		});

	}
	else if ('jQuery' in window) {
		// Check if we need newer version
		var isNewerVersion = !!(jQuery.fn.on&&jQuery.fn.ajaxComplete);
		if(!isNewerVersion) {
			// Try to load jQuery from Google CDN
			console.log('jQuery > Try to load jQuery from Google CDN (newer)');
			vbt_loadJs(jQueryGoogle, function(){
				$vbtJQ = jQuery.noConflict();
			
				console.log('jQuery > vbtJQ has been loaded from google CDN');
				console.log('jQuery > vbtJQ Version: '+jQuery.fn.jquery);
				
				//scriptLoadHandler();
			
				_exec_vbout();
			});
		} else {
			console.log('jQuery > (exist)');
			// The jQuery version on the window is the one we want to use
			$vbtJQ = window.jQuery;

			_jqueryAlreadyLoaded = true;
			_jqueryCurrentVersion = jQuery.fn.jquery;

			_exec_vbout();
		}
	} else {
		// Try to load jQuery from Google CDN
		console.log('jQuery > Try to load jQuery from Google CDN (not exist)');
		vbt_loadJs(jQueryGoogle, function(){
			$vbtJQ = jQuery.noConflict();
		
			console.log('jQuery > vbtJQ has been loaded from google CDN');
			console.log('jQuery > vbtJQ Version: '+jQuery.fn.jquery);
			
			//scriptLoadHandler();
			
			_exec_vbout();
		});
	}
}());

})(window._vbset, window._vbTracker);


(function(){
	(function (window, document){
	window.VboutEcommerce = function (account, options){

		this.version = '1.0.1';

		options = extendVanilla({
			ip: ''
		}, options);

		var _url = options.url || 'https://www.vbout.com/index.php?r=Ecommerce/Index&';
		var _vbtcart = [];
		var _vbcartprod = [];
		var _vbtorder = {};
		var _vbtcart = [];
		var _vbcartprod = [];
		var _vbtorder = {};
		var _carts = {};

		this.command = function (action, itemdata){
			itemdata = extendVanilla({}, itemdata);

			var _vbtEc_warning = ''
			var _vbcartproceed = false;
			var _vbcarttotal = _vbtcart.length;

			if(action.indexOf('store.')===0) {
				action = action.substring(6);
			}

			switch(action) {
			case 'cart.item': // add/update cart and cart items
				
				//check other required fields
				if (empty(itemdata.cartid))		_vbtEc_warning += 'cartid is required. ';
				if (empty(itemdata.productid)) 	_vbtEc_warning += 'productid is required. ';
				if (empty(itemdata.name)) 		_vbtEc_warning += 'name is required. ';
				if (empty(itemdata.quantity))	_vbtEc_warning += 'quantity is required. ';
				if (empty(itemdata.price)) 		_vbtEc_warning += 'price is required. ';
		
				if(_vbtEc_warning==''){
					_vbcartproceed = true;
		
					var cart = updateCart(itemdata.cartid, itemdata);
		
					//populate/update product object
					var updated = false, product = {}, fields = ['productid', 'name', 'sku', 'category', 'categoryid', 'price', 'discountprice', 'currency', 'quantity', 'description', 'link', 'image', 'variation'];
					for(var key in itemdata) {
						if(fields.indexOf(key) > -1) {
							product[key] = itemdata[key];
						}
					}
		
					/*
					for(var i in cart.items) {
						if(cart.items[i].productid == itemdata.productid) {
							cart.items[i] = product;
							updated = true;
							break;
						}
					}
					*/
					
					if(!updated) {
						cart.items.push(product);
					}
		
					_carts[cart.cartid] = cart;
					
					console.log('[vbtEcommerce:'+action+'] ok ');
				}
				break;
			case 'cart.item.remove': // send Remove Cart Product request
				if (empty(itemdata.cartid)){
					_vbtEc_warning += 'cartid is required. ';
				} else if (empty(itemdata.productid)){
					_vbtEc_warning += 'productid is required. ';
				} else {
					var fields = ['cartid', 'productid', 'variation'];
					return postData(action, itemdata, fields);
				}
				break;
			case 'cart.data': // add/update cart info
			case 'cart.send': //send the data, once you have configured all your ecommerce data in the shopping cart
				if (empty(itemdata.cartid)){
					_vbtEc_warning += 'cartid is required. ';
				} else {
					_vbcartproceed = true;

					var cartX = updateCart(itemdata.cartid, itemdata);
		
					var data = {
						vbcart: cartX
					};
					return sendRequest(action, data, function(response) {
						if(response.success){
							console.log('[vbtEcommerce:'+action+'] success ');
						} else{
							warningMessage(response.errorMessage || 'Error');
						}
					});
				}
				break;
			case 'cart.clear': //manually clear the shopping cart of all transactions and items
				_carts = {};
				_vbcartproceed = true;
				console.log('[vbtEcommerce:'+action+'] success ');
				break;
			case 'order.data': 
			case 'order.send':
				
				if (empty(itemdata.cartid))				_vbtEc_warning += 'cartid is required. ';
				if (empty(itemdata.orderid)) 			_vbtEc_warning += 'orderid is required. ';
				if (empty(itemdata.paymentmethod)) 		_vbtEc_warning += 'paymentmethod is required. ';
				if (empty(itemdata.grandtotal)) 			_vbtEc_warning += 'grandtotal is required. ';
				if (empty(itemdata.customerinfo)) 		_vbtEc_warning += 'customerinfo is required. ';
				else if (empty(itemdata.customerinfo.email)) 		_vbtEc_warning += 'customer email is required. ';
				
				if(_vbtEc_warning==''){
					_vbcartproceed = true;
					
					//populate/update order object
					Object.keys(itemdata).forEach(function (key){
						var itemdatakey = itemdata[key];
						
						if (typeof itemdatakey === "object" && (itemdatakey instanceof Array)) {
							var item = [];
							itemdatakey.forEach(function(val) {
								item.push(val);
							});
							_vbtorder[key] = item;
						}else if(typeof itemdatakey === "object" && (itemdatakey instanceof Object)){
							var item = {};
							Object.keys(itemdatakey).forEach(function (k){
								item[k] = itemdatakey[k];
							});
							_vbtorder[key] = item;
						}else{
							_vbtorder[key] = itemdatakey;
						}
					});

					var data = {
						vborder: _vbtorder
					};
					return sendRequest(action, data, function(response) {
						if(response.success){
							console.log('[vbtEcommerce:'+action+'] success ');
						} else{
							warningMessage(response.errorMessage || 'Error');
						}
					});

					console.log('[vbtEcommerce:'+action+'] ok ');
				}
				break;

			case 'order.clear': 
				_vbtorder = {}; 
				_vbcartproceed = true; 
				console.log('[vbtEcommerce:'+action+'] success ');
				break;
			case 'product.search':
				var query = itemdata.query;
				var customer = itemdata.customer;
		
				if (empty(itemdata.query))		_vbtEc_warning += 'query is required. ';
				if (empty(itemdata.customer)) 		itemdata.customer = '';
				
				if(_vbtEc_warning==''){
		
					var data = {}, fields = ['query'];//, 'storename'
					for(var key in itemdata) {
						if(fields.indexOf(key) > -1) {
							data[key] = itemdata[key];
						}
					}
					data.customer = empty(itemdata.customer) ? '' : itemdata.customer;
					data.uniqueid = itemdata.uniqueid || options.uniqueid || '';
		
					return sendRequest(action, data, function(response) {
						if(response.success){
							console.log('[vbtEcommerce:'+action+'] success ');
						} else{
							warningMessage(response.errorMessage || 'Error');
						}
					});
				}
				break;
			case 'product.view': // send Product View
				
				var fields = ['productid', 'name', 'sku', 'category', 'categoryid', 'price', 'discountprice', 'currency', 'description', 'link', 'image'];
				return postData(action, itemdata, fields);
				break;
			case 'category.view': // send Category View

				var fields = ['categoryid', 'name', 'description', 'link', 'image'];
				return postData(action, itemdata, fields);
				break;
			case 'customer.add':
				if (empty(itemdata.email)){
					_vbtEc_warning += 'customer email is required. ';
				} else {
					return postData(action, itemdata);
				}
				break;
			case 'customer.preferences':

				if (empty(itemdata.customer)) 	_vbtEc_warning += 'customer email is required. ';

				if(_vbtEc_warning==''){

					var fields = ['categories'];
					return postData(action, itemdata, fields);
				}
				break;
			}
		
			if(!_vbcartproceed){ //return error message
				warningMessage(_vbtEc_warning);
				
				//if (typeof itemdata !== "undefined" && itemdata !== null )
					//console.log('DATA='+JSON.stringify(itemdata));
			}
		}
		
		function postData(action, itemdata, fields, customer) {
			var data = getDataPost(itemdata, fields, customer);

			return sendRequest(action, data, function(response) {
				if(response.success){
					console.log('[vbtEcommerce:'+action+'] success ');
				} else{
					warningMessage(response.errorMessage || 'Error');
				}
			});
		}
		function getDataPost(itemdata, fields, customer) {
			var data = {};
			if(typeof fields == 'undefined' || fields === null) {
				data = itemdata;
			} else if(isArray(fields)) {
				if(fields.length) {
					for(var key in itemdata) {
						if(fields.indexOf(key) > -1) {
							data[key] = itemdata[key];
						}
					}
				}
			}

			if( customer !== false) {
				data.customer = empty(itemdata.customer) ? '' : itemdata.customer;
			}
			data.uniqueid = itemdata.uniqueid || options.uniqueid || '';
			
			return data;
		}
		
		function getCart(cartid) {
			cartid = String(cartid);
			
			if(!(cartid in _carts)) {
				_carts[cartid] = {
					cartid: cartid,
					ipaddress: options.ip,
					customer: '',
					storename: '',
					abandonurl: '',
					currency: '',
					items: []
				};
			}
			
			return _carts[cartid];
		}
		function updateCart(cartid, itemdata) {
		
			var cart = getCart(cartid);
			cart.customer = itemdata.customer || cart.customer;
			cart.customerinfo = itemdata.customerinfo || cart.customerinfo;
			cart.uniqueid = itemdata.uniqueid || cart.uniqueid || options.uniqueid || '';
			cart.storename = itemdata.storename || cart.storename;
			cart.abandonurl = itemdata.abandonurl || cart.abandonurl;
			cart.currency = itemdata.currency || cart.currency;
		
			_carts[cart.cartid] = cart;
		
			return _carts[cart.cartid];
		}
		
		function warningMessage(_vbtEc_warning) {
			console.log('[vbtEcommerce] WARNING! '+_vbtEc_warning);
		}
		function sendRequest(action, data, success, error) {
			data = extendVanilla(data, {
				ipaddress: options.ip
			});

			postAjax(_url + '_account='+account+'&_action='+action, data, function(response){
				try{
					if(typeof success == 'function') {
						var json = JSON.parse(response);
						log('typeof success', typeof success)
						success(json);
					}
				} catch(e) {
					log('sendRequestError', e);
					if(typeof error == 'function') {
						error(e.message);
					}
				}
			}, function(xmlhttp){
				if(typeof error == 'function') {
					error(xmlhttp.statusText);
				} else {
					log('xmlhttp', xmlhttp);
					warningMessage(xmlhttp.statusText || 'Error');
				}
			}, false);
		}
		
		var serialize = function(obj, prefix) {
		  var str = [], p;
		  for (p in obj) {
		    if (obj.hasOwnProperty(p)) {
		      var k = prefix ? prefix + "[" + p + "]" : p,
		        v = obj[p];
		      str.push((v !== null && typeof v === "object") ?
		        serialize(v, k) :
		        encodeURIComponent(k) + "=" + encodeURIComponent(v));
		    }
		  }
		  return str.join("&");
		}
		function log() {
			//window.console.log.apply(null, arguments);
		}
		function postAjax(url, data, success, error, async){
			var xmlhttp = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
		
			//xmlhttp.overrideMimeType("application/json");
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == "200" && typeof success == 'function') {
					success(xmlhttp.responseText, xmlhttp);
				}
				if (xmlhttp.readyState == 4 && xmlhttp.status != "200" && typeof error == 'function') {
					error(xmlhttp);
				}
			};
		
			//The false at the end tells ajax to use a synchronous call which wont be severed by the user leaving.
			xmlhttp.open('POST', url, async===false ? false : true);
			xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xmlhttp.send(serialize(data));
		}
		function empty(r){var n,t,e,f=[void 0,null,!1,0,"","0"];for(t=0,e=f.length;e>t;t++)if(r===f[t])return!0;if("object"==typeof r){for(n in r)if(r.hasOwnProperty(n))return!1;return!0}return!1}
		function isObject(t){return"[object Object]"===Object.prototype.toString.call(t)}
		function isArray(t){return"[object Array]"===Object.prototype.toString.call(t)}
		function extendVanilla(){var o={},n=!1,t=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],t++);for(var r=function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n&&"[object Object]"===Object.prototype.toString.call(t[e])?o[e]=extendVanilla(!0,o[e],t[e]):o[e]=t[e])};t<e;t++){r(arguments[t])}return o}
	}
})(window, document);

	var storage = getStorage();
	var options = {"ip":"199.68.249.238"};
	var account = 'VBT-04638-2152';
	options.uniqueid = storage.get('vbtEcommerceUniqueId');

	if(!!options.uniqueid == false) {
		options.uniqueid = guid();
		storage.set('vbtEcommerceUniqueId', options.uniqueid);
	}

	var vboutEcommerce = new VboutEcommerce(account, options);
	
	console.log('Vbout E-commerce activated: ' + vboutEcommerce.version);

	// the Queue
	var _queue = [];
	var _watchBusy, _queueBusy;
	
	// make sure _vbset is array
	if(is_array(window._vbset)) {
		setInterval(function(){
			if(_queueBusy) return;
			_queueBusy = true;
			var queue=[];
			for(var i=window._vbset.length-1;i>-1;i--) {
				if(window._vbset[i][0].indexOf('store.')===0) {
					queue.push([window._vbset[i][0].substring(6), window._vbset[i][1]]);
					window._vbset.splice(i, 1);
				}
			}
			_queueBusy = false;
			
			if(queue.length) {
				for(var i=queue.length-1;i>-1;i--) {
					_queue.push(queue[i]);
				}
	
				watchQueue();
			}
		}, 333);
	}

	function watchQueue() {
		if(_watchBusy) return;
		var item;
		while(_queue.length) {
			_watchBusy = true;
			item = _queue.shift();
	
			try {
				vboutEcommerce.command(item[0], item[1]);
			} catch(e){}
		};
		_watchBusy = false;
	}
	function is_array(e){var t,n;if(!e||"object"!=typeof e)return!1;if(function(e){if(!e||"object"!=typeof e||"number"!=typeof e.length)return!1;var t=e.length;return e[e.length]="bogus",t!==e.length?(e.length-=1,!0):(delete e[e.length],!1)}(e))return!0;if("on"===(("undefined"!=typeof require?require("../info/ini_get")("locutus.objectsAsArrays"):void 0)||"on")){var r=Object.prototype.toString.call(e),o=(t=e.constructor,(n=/\W*function\s+([\w$]+)\s*\(/.exec(t))?n[1]:"(Anonymous)");if("[object Object]"===r&&"Object"===o)return!0}return!1}
	function getStorage(){return {localStoreCookie:"vbtLSCookie-",localStoreSupport:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}},set:function(t,o,e){if(e){var r=new Date;r.setTime(r.getTime()+24*e*60*60*1e3);var l="; expires="+r.toGMTString()}else l="";this.localStoreSupport()?localStorage.setItem(t,o):document.cookie=this.localStoreCookie+t+"="+o+l+"; path=/"},get:function(t){if(this.localStoreSupport())return localStorage.getItem(t);for(var o=this.localStoreCookie+t+"=",e=document.cookie.split(";"),r=0;r<e.length;r++){for(var l=e[r];" "==l.charAt(0);)l=l.substring(1,l.length);if(0==l.indexOf(o))return l.substring(o.length,l.length)}return null},remove:function(t){this.localStoreSupport()?localStorage.removeItem(t):this.set(this.localStoreCookie+t,"",-1)}};}
	function guid(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}

})();

window.onload = function(e){ 
	var responsiveEle =  document.getElementById('ResponsiveScreen');
	
	if (typeof(responsiveEle) != 'undefined' && responsiveEle != null)
	{
	  responsiveEle.click();
	}
}

