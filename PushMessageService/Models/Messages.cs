using System;
using System.Collections.Generic;

namespace FoundationTest.Models
{
    public class Message
    {
        public int ID { get; set; }
        public string Client { get; set; }
        public string Text { get; set; }
        public DateTime Created { get; set; }

        public ICollection<Message> Messages { get; set; }
    }
}