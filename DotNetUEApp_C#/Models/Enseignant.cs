using System.ComponentModel.DataAnnotations;

namespace DotNetUEApp_C_.Models;

public class Enseignant
{
    public int Id { get; set; }
    public string Lastname { get; set; }
    public string Firstname { get; set; }

    public string Email { get; set; }

    public List<ActiviteApprentissage>? ListActiviteApprentissages { get; set; }

    //public List<UniteEtude>? ListUniteEtudes { get; set; }

}