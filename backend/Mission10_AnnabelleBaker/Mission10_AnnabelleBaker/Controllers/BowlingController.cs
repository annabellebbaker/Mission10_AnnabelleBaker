using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_AnnabelleBaker.Models;

namespace Mission10_AnnabelleBaker.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private readonly BowlingLeagueContext _bowlingContext;

        public BowlingController(BowlingLeagueContext temp)
        {
            _bowlingContext = temp;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bowler>>> GetBowlers()
        {
            var bowlers = await _bowlingContext.Bowlers
                .Include(b => b.Team) // Ensures team info is available
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks") // Filter only Marlins & Sharks
                .ToListAsync();

            return Ok(bowlers);
        }

    }
}

