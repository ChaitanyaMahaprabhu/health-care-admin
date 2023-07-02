using Microsoft.EntityFrameworkCore;

namespace MedicalAdminReact.Models
{
	public class medicalDbContext : DbContext
	{
		public medicalDbContext(DbContextOptions options) : base(options) { }

		public DbSet<Doctor> doctors { get; set; }
		public DbSet<Patient> patients { get; set; }
		public DbSet<User> Users { get; set; }
	}
}
