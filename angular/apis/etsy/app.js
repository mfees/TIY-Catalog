(function(){
    var app = angular.module('tiy-catalog', []);
    app.controller("ProductController", [ '$http', function ($http) {
       https://openapi.etsy.com/v2/listings/trending?api_key=q4ubii6kukovuc0hl2e8myxx&fields=url,title,description
    }]);
        
        var API = {
            scheme: 'https',
            host: 'openapi.etsy.com',
            base: '/v2',
            path: '/listings/trending',
            params: {
                api_key: 'q4ubii6kukovuc0hl2e8myxx',
                includes: 'MainImage',
                fields: 'title, description, price, category_path'
            };
            
        var apiTemplate = _.template("${scheme}");    
        };
})();
