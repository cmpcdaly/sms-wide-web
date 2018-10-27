using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace WebApi.Common
{
    public static class KVPExtensions
    {
        public static bool TryGetQueryString(this IEnumerable<KeyValuePair<string, string>> qs, string key, out string result)
        {
            var results = qs.Where(kvp => kvp.Key == key);

            if (results.Any())
            {
                result = results.Single().Value;
                return true;
            }

            result = null;
            return false;
        }
    }
}
