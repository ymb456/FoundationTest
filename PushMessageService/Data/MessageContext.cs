using FoundationTest.Models;
using Microsoft.EntityFrameworkCore;

namespace FoundationTest.Data
{
    public class MessageContext : DbContext
    {
        public MessageContext(DbContextOptions<MessageContext> options) : base(options)
        {
        }

        public DbSet<Message> Messages { get; set; }
    }
}