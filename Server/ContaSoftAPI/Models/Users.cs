using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContaSoftAPI.Models
{
    public class User
    {
        public string IDUser{ get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User(string id, string name, string mail, string pass)
        {
            this.IDUser = id;
            this.Name = name;
            this.Email = mail;
            this.Password = pass;
        }

        public User()
        {
            this.IDUser = string.Empty;
            this.Name = string.Empty;
            this.Email = string.Empty;
            this.Password = string.Empty;
        }
    }
}