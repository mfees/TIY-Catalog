(function(){
    var app = angular.module('tiy-catalog', []);
    app.controller("ProductController", [ '$http', function ($http) {
        
        var API = {
            scheme: 'https',
            host: 'openapi.etsy.com',
            base: '/v2',
            path: '/listings/trending',
            params: {
                callback: '.js?callback=JSON_callback',
                api_key: 'q4ubii6kukovuc0hl2e8myxx',
                includes: 'MainImage',
                fields: 'title,description,price,category_path'
            }
            };            
            
        var apiTemplate = _.template("${scheme}://${host}${base}${path}${params.callback}&api_key=${params.api_key}&includes=${params.includes}&fields=${params.fields}");
        console.log(apiTemplate(API));
    }]);    
})();

//https://openapi.etsy.com/v2/listings/trending.js?callback=JSON_callback&api_key=q4ubii6kukovuc0hl2e8myxx&includes=MainImage&fields=url,title,description,price,category_path
