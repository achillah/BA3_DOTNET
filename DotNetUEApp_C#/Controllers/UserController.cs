using DotNetUEApp_C_.ContextDb;
using DotNetUEApp_C_.DTO;
using DotNetUEApp_C_.Models;
using DotNetUEApp_C_.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetUEApp_C_.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("AllowOrigin")]
public class UserController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public readonly UserContextDb _userContextDb;

    public UserController(IConfiguration configuration, UserContextDb userContextDb)
    {
        _configuration = configuration;
        _userContextDb = userContextDb;
    }

    [AllowAnonymous]
    [HttpPost("CreateUser")]
    public IActionResult Create(User user)
    {
        if( _userContextDb.Users.Where(u => u.Email == user.Email).FirstOrDefault() != null) 
        {
            return Ok("Already exist!");
        }
        _userContextDb.Users.Add(user);
        _userContextDb.SaveChanges();
        return Ok("Success");
    }

    [AllowAnonymous]
    [HttpPost("LoginUser")]
    public IActionResult Login(UserLogin user)
    {
        var userAvailable = _userContextDb.Users.Where(u => u.Email == user.Email && u.Password == user.Password).FirstOrDefault();
        if(userAvailable != null) 
        {
            return Ok(new JwtService(_configuration).GenerateToken(
                userAvailable.UserId.ToString(),
                userAvailable.FirstName,
                userAvailable.LastName,
                userAvailable.Email
                )
                );
        }
        return Ok("Failure");
    }

}
