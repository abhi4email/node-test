/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-hamburger': '&#xe920;',
		'icon-air-conditioner': '&#xe900;',
		'icon-arrow_right': '&#xe901;',
		'icon-briefcase': '&#xe902;',
		'icon-bus': '&#xe903;',
		'icon-calendar': '&#xe904;',
		'icon-call': '&#xe905;',
		'icon-charger': '&#xe906;',
		'icon-employee': '&#xe907;',
		'icon-facebook': '&#xe908;',
		'icon-filter': '&#xe909;',
		'icon-gear_manual': '&#xe90a;',
		'icon-googlep': '&#xe90b;',
		'icon-info': '&#xe90c;',
		'icon-instagram': '&#xe90d;',
		'icon-navigation': '&#xe90e;',
		'icon-padlock': '&#xe90f;',
		'icon-placeholder': '&#xe910;',
		'icon-play-button': '&#xe911;',
		'icon-safety-seat': '&#xe912;',
		'icon-steering-wheel': '&#xe913;',
		'icon-taxi': '&#xe914;',
		'icon-twitter': '&#xe915;',
		'icon-email': '&#xe916;',
		'icon-phone': '&#xe917;',
		'icon-placeholder1': '&#xe918;',
		'icon-hatchback': '&#xe919;',
		'icon-luxury': '&#xe91a;',
		'icon-sedan': '&#xe91b;',
		'icon-suvmuv': '&#xe91c;',
		'icon-van': '&#xe91d;',
		'icon-mini_coach': '&#xe91e;',
		'icon-volvo': '&#xe91f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
