using NuGet.DependencyResolver;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetUEApp_C_.Models;

public class UniteEtude
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Code { get; set; }
    
    public int? IdDepartement { get; set; }
    public Departement Departement { get; set; }
    
    public int? IdCursus { get; set; }

    public Cursus Cursus { get; set; }

    public string Orientation { get; set; }

    public int Credit { get; set; }

    public int Cycle { get; set; }
    
    public int BlocEtude { get; set; }
    
    public int Quadrimestre { get; set; }
    
    public string Langue { get; set; }
    
    public string LangueEvaluation { get; set; }

    public string ContenuSynthetique { get; set; }

    public string MethodeApprendtissage { get; set; }

    public string Acquis { get; set; }

    public string NoteUE { get; set; }


    public List<UniteEtude>? Prerequises { get; set; } = new();


    public List<UniteEtude>? Corequises { get; set; } = new();


    public int? IdResponsableUe { get; set; }

    public Enseignant? Responsable { get; set; }

  
    public List<Enseignant>? ListTitulaireAA { get; set; } = new(); 


    public List<Competence>? ListCompetences { get; set; } = new();
    
    public List<Capacite>? ListCapacites { get; set; } = new();
    
    public List<ActiviteApprentissage>? ListActiviteApprentissages { get; set; } = new();
    
    
    //public List<Evaluation>? Evaluations { get; set; } = new();
    
    

    
}

