using System.ComponentModel.DataAnnotations;

namespace DotNetUEApp_C_.Models;

public class Cursus
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Implantation { get; set; }
    public string Telephone { get; set; }
}