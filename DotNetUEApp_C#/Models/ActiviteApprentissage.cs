using System.ComponentModel.DataAnnotations;

namespace DotNetUEApp_C_.Models;


public class ActiviteApprentissage
{
    public int Id { get; set; }
    public string Name { get; set; }


    public Evaluation? EvaluationAA { get; set; }

   // public List<Enseignant>? ListEnseignant { get; set; }


}