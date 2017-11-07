using ContaSoftAPI.Models;

namespace ContaSoftAPI.Service
{
    internal interface IUSerService
    {
        User GetUserByCredentials(string email, string password);
    }
}