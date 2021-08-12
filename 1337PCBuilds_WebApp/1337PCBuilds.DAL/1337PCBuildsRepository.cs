using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _1337PCBuilds.DAL.Models;

namespace _1337PCBuilds.DAL
{
    public class _1337PCBuildsRepository
    {
        _1337PCBuildsDBContext context;
        public _1337PCBuildsRepository()
        {
            context = new _1337PCBuildsDBContext();
        }

        public List<CustomerPcbuildDetail> GetAllDetails()
        {
            var alldetailsList = context.CustomerPcbuildDetails.ToList();
            return alldetailsList;
        }

        public bool AddDetails(CustomerPcbuildDetail detailsObj)
        {
            bool status = false;
            try
            {
                context.CustomerPcbuildDetails.Add(detailsObj);
                context.SaveChanges();
                status = true;
            }
            catch(Exception e)
            {
                status = false;
            }
            return status;
        }
    }
}
