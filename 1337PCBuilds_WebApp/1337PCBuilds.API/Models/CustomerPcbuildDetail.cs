using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace _1337PCBuilds.API.Models
{
    public class CustomerPcbuildDetail
    {
        [IgnoreDataMember]
        public int CustomerId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string EmailId { get; set; }
        [IgnoreDataMember]
        public DateTime DateofEnq { get; set; }
        [Required]
        public string UseCase { get; set; }
        [Required]
        public string Budget { get; set; }
        public string AdditionalNotes { get; set; }
    }
}
