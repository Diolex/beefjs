/**
 * Holds routes (an object with 'url/pattern': function())
 */
class RoutingConfig
{
    public routes : any;
    
    constructor(routes : any)
    {
        this.routes = routes;
    }
    
    public isRoute(url : string)
    {
        return typeof(this.routes[url]) !== 'undefined';
    }
    
    public callRoute(url : string, data : any) : any
    {
        this.routes[url](data);
    }
}