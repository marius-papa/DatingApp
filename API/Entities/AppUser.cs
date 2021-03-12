namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public byte[] PassHash { get; set; }

        public byte[] PassSalt { get; set; }
    }
}