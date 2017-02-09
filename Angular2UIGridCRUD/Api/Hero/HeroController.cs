using Angular2UIGridCRUD.Framework;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Angular2UIGridCRUD.Api.Hero
{
    public class HeroController : Controller
    {
        public ServiceDocument<HeroModel> List()
        {
            return new ServiceDocument<HeroModel>() { DataList = HeroData.Heroes };
        }

        public ServiceDocument<HeroModel> View(int id)
        {
            ServiceDocument<HeroModel> serviceDocument = new ServiceDocument<HeroModel>()
            {
                DataModel = HeroData.Heroes.Single(h => h.Id == id)
            };
            serviceDocument.DomainData.Add("team", new List<string>() { "Avengers", "Justice League" });
            
            return serviceDocument;
        }

        public ServiceDocument<HeroModel> Save([FromBody] ServiceDocument<HeroModel> serviceDocument)
        {
            serviceDocument.Save();
            return this.List();
        }
    }
}
