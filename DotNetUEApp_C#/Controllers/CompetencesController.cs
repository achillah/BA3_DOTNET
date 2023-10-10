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
    public class CompetencesController : ControllerBase
    {
        private readonly DbDueContext _context;

        public CompetencesController(DbDueContext context)
        {
            _context = context;
        }

        // GET: api/Competences
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Competence>>> GetCompetences()
        {
          if (_context.Competences == null)
          {
              return NotFound();
          }
            return await _context.Competences.ToListAsync();
        }

        // GET: api/Competences/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Competence>> GetCompetence(int id)
        {
          if (_context.Competences == null)
          {
              return NotFound();
          }
            var competence = await _context.Competences.FindAsync(id);

            if (competence == null)
            {
                return NotFound();
            }

            return competence;
        }

        // PUT: api/Competences/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompetence(int id, Competence competence)
        {
            var dbCompetence = await _context.Capacites.FindAsync(competence.Id);


            if (dbCompetence == null)
            {
                return BadRequest("Competence is not found! ");
            }


            dbCompetence.Name = competence.Name;

            await _context.SaveChangesAsync();

            return Ok(await _context.Competences.ToListAsync());

        }

        // POST: api/Competences
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Competence>> PostCompetence(Competence competence)
        {
          if (_context.Competences == null)
          {
              return Problem("Entity set 'DbDueContext.Competences'  is null.");
          }
            _context.Competences.Add(competence);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompetence", new { id = competence.Id }, competence);
        }

        // DELETE: api/Competences/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompetence(int id)
        {
            if (_context.Competences == null)
            {
                return NotFound();
            }
            var competence = await _context.Competences.FindAsync(id);
            if (competence == null)
            {
                return NotFound();
            }

            _context.Competences.Remove(competence);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompetenceExists(int id)
        {
            return (_context.Competences?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
