

using DotNetUEApp_C_.Models;
using Microsoft.EntityFrameworkCore;
using NuGet.DependencyResolver;

namespace DotNetUEApp_C_.Context;

public class DbDueContext : DbContext
{
    public DbDueContext(DbContextOptions<DbDueContext> options) : base(options)
    {

    }
    
    public DbSet<ActiviteApprentissage> ActiviteApprentissages { get; set; }
    public DbSet<Capacite> Capacites { get; set; }
    public DbSet<Competence> Competences { get; set; }
    
    public DbSet<Cursus> Cursus { get; set; }

    public DbSet<InfoUe> InfoUe { get; set; }

    public DbSet<Departement> Departements { get; set; }
    public DbSet<Enseignant> Enseignants { get; set; }
    public DbSet<Evaluation> Evaluations { get; set; }
    public DbSet<UniteEtude> UniteEtudes { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
       
    }
}
