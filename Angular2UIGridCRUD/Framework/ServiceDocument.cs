using Angular2UIGridCRUD.Api.Hero;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2UIGridCRUD.Framework
{
    public class ServiceDocument<TDataModel> where TDataModel: HeroModel
    {
        public TDataModel DataModel {
            get
            {
                if (DataList.Count > 0)
                    return DataList[0];
                else
                    return null;
            }
            set
            {
                DataList.Clear();
                DataList.Add(value);
            }
        }
        public List<TDataModel> DataList { get; set; } = new List<TDataModel>();

        public Dictionary<string, object> DomainData { get; } = new Dictionary<string, object>();

        public Page Page { get; set; } = new Page();

        public ServiceDocument<TDataModel> List()
        {
            //this.DataList = (List<HeroModel>) ((object) HeroData.Heroes);
            return this;
        }

        public void Save()
        {
            HeroModel data = HeroData.Heroes.Single(h => h.Id == this.DataModel.Id);

            data.Name = this.DataModel.Name;
            data.Team = this.DataModel.Team;
            data.Group = this.DataModel.Group;
        }
    }
}
