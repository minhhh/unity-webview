using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace UnityWebview
{
    public class WebViewHelper : MonoBehaviour
    {
        public static object[] ParseJSMesage (string msg)
        {
            var result = new List<object> ();
            var data = msg.Split ('?');
            result.Add (data[0]);
            if (data.Length > 1) {
                var paramKVs = data[1].Split ('&');
                foreach (var kv in paramKVs) {
                    var paramKVSplit = kv.Split ('=');
                    result.Add (WWW.UnEscapeURL(paramKVSplit[0]));
                    result.Add (WWW.UnEscapeURL(paramKVSplit[1]));
                }
            }

            return result.ToArray ();
        }
    }

}
