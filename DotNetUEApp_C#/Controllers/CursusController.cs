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
    public class CursusController : ControllerBase
    {
        private readonly DbDueContext _context;

        public CursusController(DbDueContext context)
        {
            _context = context;
        }

        // GET: api/Cursus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cursus>>> GetCursus()
        {
          if (_context.Cursus == null)
          {
              return NotFound();
          }
            return await _context.Cursus.ToListAsync();
        }

        // GET: api/Cursus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cursus>> GetCursus(int id)
        {
          if (_context.Cursus == null)
          {
              return NotFound();
          }
            var cursus = await _context.Cursus.FindAsync(id);

            if (cursus == null)
            {
                return NotFound();
            }

            return cursus;
        }

        // PUT: api/Cursus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCursus(Cursus cursus)
        {
            var dbCursus = await _context.Cursus.FindAsync(cursus.Id);


            if (dbCursus == null)
            {
                return BadRequest("Cursus is not found! ");
            }


            dbCursus.Name = cursus.Name;
            dbCursus.Implantation= cursus.Implantation;
            dbCursus.Telephone= cursus.Telephone;

            await _context.SaveChangesAsync();

            return Ok(await _context.Cursus.ToListAsync());
        }

        // POST: api/Cursus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cursus>> PostCursus(Cursus cursus)
        {
          if (_context.Cursus == null)
          {
              return Problem("Entity set 'DbDueContext.Cursus'  is null.");
          }
            _context.Cursus.Add(cursus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCursus", new { id = cursus.Id }, cursus);
        }

        // DELETE: api/Cursus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCursus(int id)
        {
            if (_context.Cursus == null)
            {
                return NotFound();
            }
            var cursus = await _context.Cursus.FindAsync(id);
            if (cursus == null)
            {
                return NotFound();
            }

            _context.Cursus.Remove(cursus);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CursusExists(int id)
        {
            return (_context.Cursus?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
