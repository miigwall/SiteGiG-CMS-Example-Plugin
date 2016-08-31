/**
 * SiteGiG CMS Plugin: Load this file when this plugin is enabled and CMS is loaded
 */

sitegig.directive('exampleHelloWorld', function($document) {
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<h3>Hello World!2!</h3>',
		link: function(scope, elem, attrs) {

		}
	};
});