using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetUEApp_C_.Context;
using DotNetUEApp_C_.Models;

namespace DotNetUEApp_C_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnseignantsController : ControllerBase
    {
        private readonly DbDueContext _context;

        public EnseignantsController(DbDueContext context)
        {
            _context = context;
        }

        // GET: api/Enseignants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Enseignant>>> GetEnseignants()
        {
          if (_context.Enseignants == null)
          {
              return NotFound();
          }
            return await _context.Enseignants
                .Include(e=> e.ListActiviteApprentissages)
                .ToListAsync();
        }

        // GET: api/Enseignants/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Enseignant>> GetEnseignant(int id)
        {
          if (_context.Enseignants == null)
          {
              return NotFound();
          }
            var enseignant = await _context.Enseignants.FindAsync(id);

            if (enseignant == null)
            {
                return NotFound();
            }

            return enseignant;
        }

        // PUT: api/Enseignants/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnseignant( Enseignant enseignant)
        {
            var dbEnseignant = await _context.Enseignants.Include(e => e.ListActiviteApprentissages).FirstOrDefaultAsync(e => e.Id == id);

            if (dbEnseignant == null)
            {
                return NotFound("Enseignant not found.");
            }

            // Mettre à jour les propriétés de l'enseignant (nom, prénom, email)
            dbEnseignant.Lastname = enseignant.Lastname;
            dbEnseignant.Firstname = enseignant.Firstname;
            dbEnseignant.Email = enseignant.Email;

            // Mettre à jour la liste des activités d'apprentissage
            dbEnseignant.ListActiviteApprentissages = enseignant.ListActiviteApprentissages;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(dbEnseignant); // Retourne la nouvelle version de l'enseignant mise à jour
            }
            catch (DbUpdateConcurrencyException)
            {
                // Gérer les conflits de concurrence si nécessaire
                return BadRequest("Error updating Enseignant.");
            }
        }

        // POST: api/Enseignants
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /* [HttpPost]
         public async Task<ActionResult<Enseignant>> PostEnseignant(Enseignant enseignant)
         {
           if (_context.Enseignants == null)
           {
               return Problem("Entity set 'DbDueContext.Enseignants'  is null.");
           }
            /* List<ActiviteApprentissage> ActiviteApprentissageList = new();

             foreach(var idEnseignant in enseignant.ListActiviteApprentissages)
             {
                 var AA = await this.GetEnseignant(idEnseignant);
                 ActiviteApprentissageList.Add(AA);    
             }

             var newEnseignant = new Enseignant
             {
                 Id = enseignant.Id,
                 Lastname = enseignant.Lastname,
                 Firstname = enseignant.Firstname,
                 Email = enseignant.Email,
                 //FicheAA = listFicheAA,
             };*/

        //_context.Enseignants.Add(newEnseignant);

        /*    _context.Enseignants.Add(enseignant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEnseignant", new { id = enseignant.Id }, enseignant);
        }*/



        [HttpPost]
        public async Task<ActionResult<Enseignant>> PostEnseignantWithActiviteApprentissage(Enseignant enseignant)
        {
            //if (enseignant == null)
            //{
            //    return BadRequest("Données invalides.");
            //}

            //// Si l'enseignant a des activités, associe les activités à l'enseignant
            //if (enseignant.ListActiviteApprentissages != null && enseignant.ListActiviteApprentissages.Any())
            //{
            //    foreach (var activite in enseignant.ListActiviteApprentissages)
            //    {
            //        // Ajuste les propriétés de l'activité si nécessaire
            //        // activite.SomeProperty = ...

            //        enseignant.ListActiviteApprentissages.Add(activite);
            //    }
            //}

            //_context.Enseignants.Add(enseignant);
            //_context.SaveChanges();

            //return Ok("Enseignant et activités ajoutés avec succès.");


            int idActiviteApprentissage = -1; // Initialisation à une valeur par défaut


            if (enseignant.ListActiviteApprentissages != null && enseignant.ListActiviteApprentissages.Count > 0)
            {
                idActiviteApprentissage = enseignant.ListActiviteApprentissages[0].Id;
                // Utilisez idActiviteApprentissage comme nécessaire
            }
            else
            {
                // Gérer le cas où aucune activité d'apprentissage n'a été choisie
            }


            // Vérifier si l'activité d'apprentissage existe
            var activiteApprentissage = await _context.ActiviteApprentissages.FindAsync(idActiviteApprentissage);
            if (activiteApprentissage == null)
            {
                return NotFound("L'activité d'apprentissage n'existe pas.");
            }

            // Associer l'activité d'apprentissage à l'enseignant
            enseignant.ListActiviteApprentissages = new List<ActiviteApprentissage> { activiteApprentissage };

            // Enregistrer l'enseignant avec l'ID de l'activité d'apprentissage associée
            _context.Enseignants.Add(enseignant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEnseignant", new { id = enseignant.Id }, enseignant);

        }


        // DELETE: api/Enseignants/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnseignant(int id)
        {
            if (_context.Enseignants == null)
            {
                return NotFound();
            }
            var enseignant = await _context.Enseignants.FindAsync(id);
            if (enseignant == null)
            {
                return NotFound();
            }

            _context.Enseignants.Remove(enseignant);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EnseignantExists(int id)
        {
            return (_context.Enseignants?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
