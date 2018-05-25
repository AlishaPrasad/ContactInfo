using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Cors; 

namespace ContactInfo.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        // GET api/contact
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] {  "Laptop", "Smart TV", "Smart Phone", "Tablet"  };  
        }

        // GET api/contact/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/contact
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/contact/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/contact/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
