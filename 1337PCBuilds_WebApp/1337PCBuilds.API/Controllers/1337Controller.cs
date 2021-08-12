using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _1337PCBuilds.DAL;
using _1337PCBuilds.DAL.Models;

namespace _1337PCBuilds.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [Produces("application/json")]
    [ApiController]
    public class _1337Controller : Controller
    {
        _1337PCBuildsRepository repo = new _1337PCBuildsRepository();

        [HttpGet]
        public JsonResult GetDetails()
        {
            List<Models.CustomerPcbuildDetail> listDetail = new List<Models.CustomerPcbuildDetail>();
            try
            {
                var detailList = repo.GetAllDetails();
                if (detailList.Any())
                {
                    foreach(var item in detailList)
                    {
                        listDetail.Add(new Models.CustomerPcbuildDetail() {
                        CustomerId = item.CustomerId,
                        Name = item.Name,
                        EmailId = item.EmailId,
                        DateofEnq = item.DateofEnq,
                        UseCase = item.UseCase,
                        Budget = item.Budget,
                        AdditionalNotes = item.AdditionalNotes
                        });
                    }
                }
            }
            catch
            {
                listDetail = null;
            }
            return Json(listDetail);
        }

        [HttpPost]
        public JsonResult AddDetails(Models.CustomerPcbuildDetail obj)
        {
            bool status = false;
            try
            {
                _1337PCBuilds.DAL.Models.CustomerPcbuildDetail OBJ = new _1337PCBuilds.DAL.Models.CustomerPcbuildDetail()
                {
                    Name = obj.Name,
                    EmailId = obj.EmailId,
                    UseCase = obj.UseCase,
                    Budget = obj.Budget,
                    AdditionalNotes = obj.AdditionalNotes
                };
                if (ModelState.IsValid)
                {
                    status = repo.AddDetails(OBJ);
                }
            }
            catch
            {
                status = false;
            }
            return Json(status);
        }
    }
}
