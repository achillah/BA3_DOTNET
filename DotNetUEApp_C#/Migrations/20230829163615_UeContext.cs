using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNetUEApp_C_.Migrations
{
    /// <inheritdoc />
    public partial class UeContext : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cursus",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Implantation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telephone = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cursus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departements", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Evaluations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Session = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mois = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoteFinal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PourcentageFinal = table.Column<int>(type: "int", nullable: true),
                    IdUniteEtude = table.Column<int>(type: "int", nullable: true),
                    PourcentageRemediable = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Evaluations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "InfoUe",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Orientation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cycle = table.Column<int>(type: "int", nullable: false),
                    BlocEtude = table.Column<int>(type: "int", nullable: false),
                    Quadrimestre = table.Column<int>(type: "int", nullable: false),
                    Langue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LangueEvaluation = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InfoUe", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ActiviteApprentissages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EvaluationAAId = table.Column<int>(type: "int", nullable: true),
                    EnseignantId = table.Column<int>(type: "int", nullable: true),
                    UniteEtudeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActiviteApprentissages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActiviteApprentissages_Evaluations_EvaluationAAId",
                        column: x => x.EvaluationAAId,
                        principalTable: "Evaluations",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Capacites",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniteEtudeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Capacites", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Competences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniteEtudeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Competences", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Enseignants",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Lastname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Firstname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UniteEtudeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enseignants", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UniteEtudes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdDepartement = table.Column<int>(type: "int", nullable: true),
                    DepartementId = table.Column<int>(type: "int", nullable: false),
                    IdCursus = table.Column<int>(type: "int", nullable: true),
                    CursusId = table.Column<int>(type: "int", nullable: false),
                    Orientation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Credit = table.Column<int>(type: "int", nullable: false),
                    Cycle = table.Column<int>(type: "int", nullable: false),
                    BlocEtude = table.Column<int>(type: "int", nullable: false),
                    Quadrimestre = table.Column<int>(type: "int", nullable: false),
                    Langue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LangueEvaluation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ContenuSynthetique = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MethodeApprendtissage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Acquis = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NoteUE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IdResponsableUe = table.Column<int>(type: "int", nullable: true),
                    ResponsableId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UniteEtudes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UniteEtudes_Cursus_CursusId",
                        column: x => x.CursusId,
                        principalTable: "Cursus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UniteEtudes_Departements_DepartementId",
                        column: x => x.DepartementId,
                        principalTable: "Departements",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UniteEtudes_Enseignants_ResponsableId",
                        column: x => x.ResponsableId,
                        principalTable: "Enseignants",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UniteEtudeUniteEtude",
                columns: table => new
                {
                    CorequisesId = table.Column<int>(type: "int", nullable: false),
                    PrerequisesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UniteEtudeUniteEtude", x => new { x.CorequisesId, x.PrerequisesId });
                    table.ForeignKey(
                        name: "FK_UniteEtudeUniteEtude_UniteEtudes_CorequisesId",
                        column: x => x.CorequisesId,
                        principalTable: "UniteEtudes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UniteEtudeUniteEtude_UniteEtudes_PrerequisesId",
                        column: x => x.PrerequisesId,
                        principalTable: "UniteEtudes",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ActiviteApprentissages_EnseignantId",
                table: "ActiviteApprentissages",
                column: "EnseignantId");

            migrationBuilder.CreateIndex(
                name: "IX_ActiviteApprentissages_EvaluationAAId",
                table: "ActiviteApprentissages",
                column: "EvaluationAAId");

            migrationBuilder.CreateIndex(
                name: "IX_ActiviteApprentissages_UniteEtudeId",
                table: "ActiviteApprentissages",
                column: "UniteEtudeId");

            migrationBuilder.CreateIndex(
                name: "IX_Capacites_UniteEtudeId",
                table: "Capacites",
                column: "UniteEtudeId");

            migrationBuilder.CreateIndex(
                name: "IX_Competences_UniteEtudeId",
                table: "Competences",
                column: "UniteEtudeId");

            migrationBuilder.CreateIndex(
                name: "IX_Enseignants_UniteEtudeId",
                table: "Enseignants",
                column: "UniteEtudeId");

            migrationBuilder.CreateIndex(
                name: "IX_UniteEtudes_CursusId",
                table: "UniteEtudes",
                column: "CursusId");

            migrationBuilder.CreateIndex(
                name: "IX_UniteEtudes_DepartementId",
                table: "UniteEtudes",
                column: "DepartementId");

            migrationBuilder.CreateIndex(
                name: "IX_UniteEtudes_ResponsableId",
                table: "UniteEtudes",
                column: "ResponsableId");

            migrationBuilder.CreateIndex(
                name: "IX_UniteEtudeUniteEtude_PrerequisesId",
                table: "UniteEtudeUniteEtude",
                column: "PrerequisesId");

            migrationBuilder.AddForeignKey(
                name: "FK_ActiviteApprentissages_Enseignants_EnseignantId",
                table: "ActiviteApprentissages",
                column: "EnseignantId",
                principalTable: "Enseignants",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ActiviteApprentissages_UniteEtudes_UniteEtudeId",
                table: "ActiviteApprentissages",
                column: "UniteEtudeId",
                principalTable: "UniteEtudes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Capacites_UniteEtudes_UniteEtudeId",
                table: "Capacites",
                column: "UniteEtudeId",
                principalTable: "UniteEtudes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Competences_UniteEtudes_UniteEtudeId",
                table: "Competences",
                column: "UniteEtudeId",
                principalTable: "UniteEtudes",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Enseignants_UniteEtudes_UniteEtudeId",
                table: "Enseignants",
                column: "UniteEtudeId",
                principalTable: "UniteEtudes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UniteEtudes_Enseignants_ResponsableId",
                table: "UniteEtudes");

            migrationBuilder.DropTable(
                name: "ActiviteApprentissages");

            migrationBuilder.DropTable(
                name: "Capacites");

            migrationBuilder.DropTable(
                name: "Competences");

            migrationBuilder.DropTable(
                name: "InfoUe");

            migrationBuilder.DropTable(
                name: "UniteEtudeUniteEtude");

            migrationBuilder.DropTable(
                name: "Evaluations");

            migrationBuilder.DropTable(
                name: "Enseignants");

            migrationBuilder.DropTable(
                name: "UniteEtudes");

            migrationBuilder.DropTable(
                name: "Cursus");

            migrationBuilder.DropTable(
                name: "Departements");
        }
    }
}
