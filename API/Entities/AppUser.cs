using System;
using System.Collections.Generic;
using API.Extensions;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PassHash { get; set; }

        public byte[] PassSalt { get; set; }

        public DateTime Dob { get; set; }

        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;

        public string KnownAs { get; set; }

        public string Gender { get; set; }

        public string Introduction { get; set; }

        public string LookingFor { get; set; }

        public string Interest { get; set; }

        public string City { get; set; }
        public string Country { get; set; }

        public ICollection<Photo> Photo { get; set; }


        // public int GetAge()
        // {
        //     return Dob.CalculateAge();
        // }
    }
}