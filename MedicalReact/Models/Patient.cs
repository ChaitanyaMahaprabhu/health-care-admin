using System.ComponentModel.DataAnnotations;

namespace MedicalReact.Models
{
	public class Patient
	{
		[Key]
		public int id { get; set; }
		public string? name { get; set; }
		public int age { get; set; }
		public string? gender { get; set; }
		public string? ailment { get; set; }
	}
}
