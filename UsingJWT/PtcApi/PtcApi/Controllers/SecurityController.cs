using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PtcApi.Security;
using PtcApi.Model;

namespace PtcApi.Controllers
{
    [Route("api/[controller]")]
    public class SecurityController : Controller
    {
        private readonly SecurityManager mgr;

        public SecurityController(SecurityManager mng)
        {
            this.mgr = mng ?? throw new System.ArgumentNullException(nameof(mng));
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody]AppUser user)
        {
            IActionResult ret = null;
            AppUserAuth auth = new AppUserAuth();


            auth = this.mgr.ValidateUser(user);

            if (auth.IsAuthenticated)
            {
                ret = StatusCode(StatusCodes.Status200OK, auth);
            }
            else
            {
                ret = StatusCode(StatusCodes.Status404NotFound,
                                 "Invalid User Name/Password.");
            }

            return ret;
        }
    }
}
