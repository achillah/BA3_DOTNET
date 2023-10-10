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
    public class CapacitesController : ControllerBase
    {
        private readonly DbDueContext _context;

        public CapacitesController(DbDueContext context)
        {
            _context = context;
        }

        // GET: api/Capacites
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Capacite>>> GetCapacites()
        {
          if (_context.Capacites == null)
          {
              return NotFound();
          }
            return await _context.Capacites.ToListAsync();
        }

        // GET: api/Capacites/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Capacite>> GetCapacite(int id)
        {
          
            var capacite = await _context.Capacites.FindAsync(id);

            if (capacite == null)
            {
                return NotFound();
            }

            return capacite;
        }

        // POST: api/Capacites
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Capacite>> PostCapacite(Capacite capacite)
        {
            if (_context.Capacites == null)
            {
                return Problem("Entity set 'DbDueContext.Capacites'  is null.");
            }
            _context.Capacites.Add(capacite);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCapacite", new { id = capacite.Id }, capacite);
        }

        // PUT: api/Capacites/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCapacite(Capacite capacite)
        {

            var dbCapacite = await _context.Capacites.FindAsync(capacite.Id);


            if (dbCapacite == null) { 
                return BadRequest("Capacite is not found! "); }


            dbCapacite.Name = capacite.Name;

            await _context.SaveChangesAsync();

            return Ok(await _context.Capacites.ToListAsync());

        }

      

        // DELETE: api/Capacites/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCapacite(int id)
        {
            if (_context.Capacites == null)
            {
                return NotFound();
            }
            var capacite = await _context.Capacites.FindAsync(id);
            if (capacite == null)
            {
                return NotFound();
            }

            _context.Capacites.Remove(capacite);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CapaciteExists(int id)
        {
            return (_context.Capacites?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
