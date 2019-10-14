conspire = function() {
  let theories = [
    "docker", "ubuntu", "k8s", "json", "vst", "c#", "javascript", "collectd", 
    "sleep", "satellite collections", "gyp", "lto", "macos", "smart joins",  
    "el cheapo", "v8", "salat", "windows", "transactions", "oskar", "fuerte",
    "ccache", "libmusl", "testing.js","es2015","es2016","es2017","es2018","es2019",
    "es2020"
  ];
  let conspiracy = {};
  let ecma = false
  while (Object.keys(conspiracy).length < 3) {
    let theory = theories[Math.floor(Math.random() * theories.length)];
    if(theory.startsWith("es"))
    {
      if(ecma)
        continue;
      ecma = true;
    }
    conspiracy[theory] = true;
  }
  return Object.keys(conspiracy);
};
print("It is caused by:", conspire().join(" + "));
