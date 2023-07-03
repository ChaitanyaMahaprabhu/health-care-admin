using System.ComponentModel.DataAnnotations;

namespace MedicalReact.Models
{
	public class Doctor
	{
		[Key]
		public int id { get; set; }
		public string? name { get; set; }
		public string? userName { get; set; }
		public int age { get; set; }
		public string? gender { get; set; }
		public string? specialization { get; set; }
		public int experience { get; set; }
		public string? request { get; set; }
		public string? status { get; set; }
	}
}
