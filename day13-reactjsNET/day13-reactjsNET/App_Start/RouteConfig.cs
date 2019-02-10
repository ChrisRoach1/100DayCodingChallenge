using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace day13_reactjsNET
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                 name: "addRoom",
                 url: "addRoom",
                 defaults: new { controller = "Home", action = "addRoom" }
            );

            routes.MapRoute(
                name: "getRooms",
                url: "getRooms",
                defaults: new { controller = "Home", action = "getRooms" }
            );


            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
