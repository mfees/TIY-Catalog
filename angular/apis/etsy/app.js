(function(){
    var app = angular.module('tiy-catalog', []);
    app.controller("ProductController", [ '$http', function ($http) {
        
        var self = this;
        var API = {
            scheme: 'https',
            host: 'openapi.etsy.com',
            base: '/v2',
            path: '/listings/trending',
            callback: '.js?callback=JSON_CALLBACK',
            api_key: 'q4ubii6kukovuc0hl2e8myxx',
            includes: 'MainImage',
            fields: 'title,description,price,category_path'
            };            
        var apiTemplate = _.template("${scheme}://${host}${base}${path}${callback}&api_key=${api_key}&includes=${includes}&fields=${fields}");
        console.log(apiTemplate(API));
    
        $http.jsonp(apiTemplate(API))
        .success(function(data){
            self.trendingProducts = data.results
            console.log(self.trendingProducts);
            
            function productTitle(results) {
                return _.map(results, 'title');
            };
            self.title = productTitle(self.trendingProducts)

        });
    }])    
})();

//openapi.etsy.com/v2/listings/trending.js?callback=JSON_callback&api_key=q4ubii6kukovuc0hl2e8myxx&includes=MainImage&fields=url,title,description,price,category_path
//openapi.etsy.com/v2/listings/trending.js?callback=JSON_callback&api_key=q4ubii6kukovuc0hl2e8myxx&includes=MainImage&fields=title,description,price,category_path:1