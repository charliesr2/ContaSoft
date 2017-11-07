using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ContaSoftAPI.Models;

namespace ContaSoftAPI.Service
{
    public class USerService : IUSerService
    {
        public User GetUserByCredentials(string email, string password)
        {
            if (email != "email@domain.com" || password != "password")
            {
                return null;
            }
            var user = new User("1", "email@domain.com", "password", "Chalioh!!");
            if (user != null)
            {
                user.Password = string.Empty;
            }
            return user;
        }
    }
}