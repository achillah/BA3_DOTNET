using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetUEApp_C_.Context;
using Aspose.Words;
using DotNetUEApp_C_.Models;

namespace DotNetUEApp_C_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UniteEtudesController : ControllerBase
    {
        private readonly DbDueContext _context;

        public UniteEtudesController(DbDueContext context)
        {
            _context = context;
        }
       

        [HttpGet]
        public IActionResult Get([FromQuery] string champ1, [FromQuery] string champ2, [FromQuery] string champ3, [FromQuery] string champ4, [FromQuery] string champ5
                                ,[FromQuery] string champ6, [FromQuery] string champ7, [FromQuery] string champ8, [FromQuery] string champ9, [FromQuery] string champ10
                                ,[FromQuery] string champ11, [FromQuery] string champ12, [FromQuery] string champ13, [FromQuery] string champ14, [FromQuery] string champ15
                                , [FromQuery] string champ16, [FromQuery] string champ17, [FromQuery] string champ18, [FromQuery] string champ19)
        {

            Document document = new Document();
            string[] fieldNames = new string[] { };
            object[] values = new object[] { };

            document = new Document(@".\Documents\HelbDUE.docx");
            fieldNames = new string[] { "«titre»", "code", "departement", "cursus", "orientation", "implantation", "cycle", "bloc_étude", "quadrimestre", "ects", "langue_enseignement", "langue_evaluation", "responsable_UE", "titulaires_des_AA", "compétences", "capacités", "acquis", "contenu_synth", "methode_app" };
            values = new object[] { champ1, champ2, champ3, champ4, champ5, champ6, champ7, champ8, champ9, champ10, champ11, champ12, champ13, champ14, champ15, champ16, champ17, champ18, champ19 };

            document.MailMerge.Execute(fieldNames, values);

            MemoryStream memoryStream = new MemoryStream();

            document.Save(memoryStream, SaveFormat.Docx);

            memoryStream.Position = 0;

            return File(
                memoryStream,
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "HelbDUE.docx"
            );
        }

    }
}
