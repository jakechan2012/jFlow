using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace J.Flow.Api.Controllers
{
    /// <summary>
    /// 模型
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ModelsController : ControllerBase
    {
        /// <summary>
        /// 有效性
        /// </summary>
        [HttpGet("[action]")]
        public ActionResult<bool> Validation()
        {
            return true;
        }
    }
}
