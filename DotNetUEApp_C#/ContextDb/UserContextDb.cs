using Microsoft.EntityFrameworkCore;
using DotNetUEApp_C_.Models;

namespace DotNetUEApp_C_.ContextDb;

public class UserContextDb : DbContext
{
    public UserContextDb(DbContextOptions<UserContextDb> options) : base(options)
    {

    }

    public DbSet<User> Users { get; set; }

}
