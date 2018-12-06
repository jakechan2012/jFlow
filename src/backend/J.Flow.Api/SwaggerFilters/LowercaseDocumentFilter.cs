using System.Linq;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace J.Flow.Api.SwaggerFilters
{
    /// <summary>
    /// Convert route to lowercase
    /// </summary>
    public class LowercaseDocumentFilter : IDocumentFilter
    {

        /// <summary>
        /// Apply
        /// </summary>
        /// <param name="swaggerDoc">swaggerDoc</param>
        /// <param name="context">context</param>
        public void Apply(SwaggerDocument swaggerDoc, DocumentFilterContext context)
        {
            var paths = swaggerDoc.Paths.ToDictionary(item => item.Key.ToLowerInvariant(), item => item.Value);
            swaggerDoc.Paths = paths;
        }
    }
}
