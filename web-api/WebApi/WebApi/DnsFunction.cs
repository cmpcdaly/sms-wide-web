
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
using WebApi.Models;

namespace WebApi
{
    public static class DnsFunction
    {
        [FunctionName("DnsFunction")]
        public static IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]HttpRequest req, TraceWriter log)
        {
            // 1. Get the request model
            var clockworkHook = ClockworkHookRequest.FromQueryString(req.Query);

            // 2. Decode the DNS Request
            // The DNS lookup path is in the clockworkHook message
            var path = clockworkHook.Content;

            if (path == "info.cern.ch")
            {
                return null;
            }

            return new StatusCodeResult(200);
        }
    }
}
