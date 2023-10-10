using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetUEApp_C_.Models;

public class Evaluation
{
    public int Id { get; set; }
    public string Session { get; set; }
    public int Mois { get; set; }

    public string Type { get; set; }

    public string NoteFinal { get; set; }

    public int? PourcentageFinal { get; set; }

    public int? IdUniteEtude { get; set; }

    public string PourcentageRemediable { get; set; }


}