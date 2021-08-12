using System;
using _1337PCBuilds.DAL;
using _1337PCBuilds.DAL.Models;

namespace _1337PCBuilds.ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            _1337PCBuildsRepository repo = new _1337PCBuildsRepository();
            CustomerPcbuildDetail detailObj = new CustomerPcbuildDetail
            {
                Name = "Customer#1",
                EmailId = "cus#1@demo.com",
                UseCase = "Gaming",
                Budget = "under INR25,000",
                AdditionalNotes = "place_holder2"

            };
            if (repo.AddDetails(detailObj))
            {
                Console.WriteLine("Success");
            }
            else
            {
                Console.WriteLine("Failure");
            }
            //var alldetails = repo.GetAllDetails();
            //Console.WriteLine("{0}\t\t{1}", "customer no.", "customer emailid");
            //foreach (var detail in alldetails)
            //{
            //    Console.WriteLine("{0}\t\t\t{1}", detail.CustomerNo, detail.EmailId);
            //}
        }
    }
}
