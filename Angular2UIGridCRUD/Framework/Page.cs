using System.Collections.Generic;

namespace Angular2UIGridCRUD.Framework
{
    public class Page
    {
        public List<PageAction> AvailableActions { get; set; }
        public string CurrentAction { get; set; }
    }
}
