using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Angular2UIGridCRUD
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // to serve index.html as the default page
            app.UseDefaultFiles();
            // to serve all the javascript, css and other static pages
            app.UseStaticFiles();

            // configure route for webapi
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "webapi",
                    template: "api/{controller}/{action}/{id?}",
                    defaults: new { controller = "App", action = "Index" });

                //routes.MapRoute(
                //    name: "catchall",
                //    template: "{*url}",
                //    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
