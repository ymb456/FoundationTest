using FoundationTest.Data;
using FoundationTest.Models;
using System;
using System.Linq;

namespace ContosoUniversity.Data
{
    public static class DbInitializer
    {
        public static void Initialize(MessageContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Messages.Any())
            {
                return;   // DB has been seeded
            }

            var messages = new Message[]
            {
            new Message{Client="Foundation Medicine", Text="The environment is down", Created=DateTime.Now},
            new Message{Client="Foundation Medicine",Text="The environment is back up", Created=DateTime.Now},
            new Message{Client="Foundation Medicine",Text="The environment is down again", Created=DateTime.Now},
            new Message{Client="Foundation Medicine",Text="The environment is back up", Created=DateTime.Now},
            new Message{Client="Foundation Medicine",Text="The environment is maintanence", Created=DateTime.Now},
            };
            foreach (Message s in messages)
            {
                context.Messages.Add(s);
            }
            context.SaveChanges();

        }
    }
}