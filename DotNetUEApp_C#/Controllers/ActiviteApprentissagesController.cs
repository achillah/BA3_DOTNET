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
    public class ActiviteApprentissagesController : ControllerBase
    {
        private readonly DbDueContext _context;

        public ActiviteApprentissagesController(DbDueContext context)
        {
            _context = context;
        }

        // GET: api/ActiviteApprentissages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ActiviteApprentissage>>> GetActiviteApprentissages()
        {
          if (_context.ActiviteApprentissages == null)
          {
              return NotFound();
          }
            return await _context.ActiviteApprentissages
                .Include(x => x.EvaluationAA)
                .ToListAsync();
        }

        // GET: api/ActiviteApprentissages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ActiviteApprentissage>> GetActiviteApprentissage(int id)
        {
          if (_context.ActiviteApprentissages == null)
          {
              return NotFound();
          }
            var activiteApprentissage = await _context.ActiviteApprentissages.FindAsync(id);

            if (activiteApprentissage == null)
            {
                return NotFound();
            }

            return activiteApprentissage;
        }

        // PUT: api/ActiviteApprentissages/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActiviteApprentissage(int id, ActiviteApprentissage activiteApprentissage)
        {
            if (id != activiteApprentissage.Id)
            {
                return BadRequest();
            }

            _context.Entry(activiteApprentissage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActiviteApprentissageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ActiviteApprentissages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ActiviteApprentissage>> PostActiviteApprentissage(ActiviteApprentissage activiteApprentissage)
        {
          if (_context.ActiviteApprentissages == null)
          {
              return Problem("Entity set 'DbDueContext.ActiviteApprentissages'  is null.");
          }
            _context.ActiviteApprentissages.Add(activiteApprentissage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetActiviteApprentissage", new { id = activiteApprentissage.Id }, activiteApprentissage);
        }

        // DELETE: api/ActiviteApprentissages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActiviteApprentissage(int id)
        {
            if (_context.ActiviteApprentissages == null)
            {
                return NotFound();
            }
            var activiteApprentissage = await _context.ActiviteApprentissages.FindAsync(id);
            if (activiteApprentissage == null)
            {
                return NotFound();
            }

            _context.ActiviteApprentissages.Remove(activiteApprentissage);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ActiviteApprentissageExists(int id)
        {
            return (_context.ActiviteApprentissages?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
