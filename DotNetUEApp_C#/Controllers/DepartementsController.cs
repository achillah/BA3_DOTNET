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
    public class DepartementsController : ControllerBase
    {
        private readonly DbDueContext _context;

        public DepartementsController(DbDueContext context)
        {
            _context = context;
        }

        // GET: api/Departements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Departement>>> GetDepartements()
        {
          if (_context.Departements == null)
          {
              return NotFound();
          }
            return await _context.Departements.ToListAsync();
        }

        // GET: api/Departements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Departement>> GetDepartement(int id)
        {
          if (_context.Departements == null)
          {
              return NotFound();
          }
            var departement = await _context.Departements.FindAsync(id);

            if (departement == null)
            {
                return NotFound();
            }

            return departement;
        }

        // PUT: api/Departements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartement(Departement departement)
        {
            var dbDepartement = await _context.Departements.FindAsync(departement.Id);


            if (departement == null)
            {
                return BadRequest("Departement is not found! ");
            }


            dbDepartement.Name = departement.Name;

            return Ok(await _context.Departements.ToListAsync());
        }

        // POST: api/Departements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Departement>> PostDepartement(Departement departement)
        {
          if (_context.Departements == null)
          {
              return Problem("Entity set 'DbDueContext.Departements'  is null.");
          }
            _context.Departements.Add(departement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartement", new { id = departement.Id }, departement);
        }

        // DELETE: api/Departements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartement(int id)
        {
            if (_context.Departements == null)
            {
                return NotFound();
            }
            var departement = await _context.Departements.FindAsync(id);
            if (departement == null)
            {
                return NotFound();
            }

            _context.Departements.Remove(departement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DepartementExists(int id)
        {
            return (_context.Departements?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
