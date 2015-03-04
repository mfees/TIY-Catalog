//(function(){
//    var app = angular.module('tiy-catalog', []);
//    app.controller("ProductController", [ '$http', function ($http) {
var assert = require('assert'); 

    var self = this;
    var categories = {
        scheme: 'https',
        host: 'openapi.etsy.com',
        base: '/v2',
        path: '/taxonomy/categories',
        params: {
            api_key: 'q4ubii6kukovuc0hl2e8myxx',
            fields: 'name'
        },    
    };
    console.log('categories.scheme');

    function urlFor(categories){
        // See http://lodash.com/docs#template
        var tpl = _.template('${scheme}://${host}${base}${path}?${params}');

        var params = _.map(categories.params, function(value, key){
            return key + '=' + value;
        }).join('&');

        // See http://lodash.com/docs#extend
        return tpl(_.extend({ }, categories, { params: params }));    
    };

//    describe('the categories', function(){
//    it('should have all the parts we need', function(){
//        assert.isDefined(categories.scheme);
////        assert.isDefined(categories.host);
////        assert.isDefined(categories.base);
////        assert.isDefined(categories.path);
////        assert.isDefined(categories.params.api_key)
//        // etc . . .
//    console.log('scheme');
//    });
//    });
//})();


    
//	it('should give me the correct default URL', function(){
//		assert.equal(
//			'https://openapi.etsy.com/v2/listings/trending.json' +
//			'?api_key=q4ubii6kukovuc0hl2e8myxx' +
//			'&includes=MainImage' +
//			'&fields=id,description,title,price',
//
//			// Gimme the URL for the API, asis...
//			urlFor(API)
//		);
//	})
//
//	it('should give me the correct URL for localhost, too', function(){
//		assert.equal(
//			'https://localhost/apis/etsy/listings/trending.json',
//
//			// Now gimme the `localhost` version...
//			// See http://lodash.com/docs#extend
//			urlFor(_.extend({ }, API, {
//			  host: 'localhost',
//			  base: '/apis/etsy',
//			  params: { }
//			}))
//		);
//	});
//}); // describe(the API)
//
//describe('the data from the API', function(){
//	it('should have `id` fields for all entries', function(){
//		trending.map(function(product){
//			assert.isDefined(product.listing_id);
//		});
//	});
//});
