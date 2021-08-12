using System;
using System.Collections.Generic;

#nullable disable

namespace _1337PCBuilds.DAL.Models
{
    public partial class CustomerPcbuildDetail
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string EmailId { get; set; }
        public DateTime DateofEnq { get; set; }
        public string UseCase { get; set; }
        public string Budget { get; set; }
        public string AdditionalNotes { get; set; }
    }
}
