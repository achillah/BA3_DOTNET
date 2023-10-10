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
    public class InfoUesController : ControllerBase
    {
        private readonly DbDueContext _context;

        public InfoUesController(DbDueContext context)
        {
            _context = context;
        }

        // GET: api/InfoUes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InfoUe>>> GetInfoUe()
        {
          if (_context.InfoUe == null)
          {
              return NotFound();
          }
            return await _context.InfoUe.ToListAsync();
        }

        // GET: api/InfoUes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InfoUe>> GetInfoUe(int id)
        {
          if (_context.InfoUe == null)
          {
              return NotFound();
          }
            var infoUe = await _context.InfoUe.FindAsync(id);

            if (infoUe == null)
            {
                return NotFound();
            }

            return infoUe;
        }

        // PUT: api/InfoUes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInfoUe( InfoUe infoUe)
        {
            var dbInfoUe = await _context.InfoUe.FindAsync(infoUe.Id);


            if (infoUe == null)
            {
                return BadRequest("InfoUe is not found! ");
            }


            dbInfoUe.Name = infoUe.Name;
            dbInfoUe.Code = infoUe.Code;
            dbInfoUe.Orientation = infoUe.Orientation;
            dbInfoUe.Cycle = infoUe.Cycle;
            dbInfoUe.BlocEtude = infoUe.BlocEtude;
            dbInfoUe.Quadrimestre = infoUe.Quadrimestre;
            dbInfoUe.Langue = infoUe.Langue;
            dbInfoUe.LangueEvaluation = infoUe.LangueEvaluation;

            return Ok(await _context.InfoUe.ToListAsync());
        }

        // POST: api/InfoUes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InfoUe>> PostInfoUe(InfoUe infoUe)
        {
          if (_context.InfoUe == null)
          {
              return Problem("Entity set 'DbDueContext.InfoUe'  is null.");
          }
            _context.InfoUe.Add(infoUe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInfoUe", new { id = infoUe.Id }, infoUe);
        }

        // DELETE: api/InfoUes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInfoUe(int id)
        {
            if (_context.InfoUe == null)
            {
                return NotFound();
            }
            var infoUe = await _context.InfoUe.FindAsync(id);
            if (infoUe == null)
            {
                return NotFound();
            }

            _context.InfoUe.Remove(infoUe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InfoUeExists(int id)
        {
            return (_context.InfoUe?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
