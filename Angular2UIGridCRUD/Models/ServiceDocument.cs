using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2UIGridCRUD.Models
{
    public class ServiceDocument<TModel>
    {
        public TModel Data { get; set; }
        public Dictionary<string, object> DomainData { get; } = new Dictionary<string, object>();
    }
}
