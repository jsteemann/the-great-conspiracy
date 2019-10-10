conspire = function() {
  let theories = [
    "docker", "ubuntu", "k8s", "json", "vst", "c#", "javascript", "collectd", 
    "sleep", "satellite collections", "gyp", "lto", "macos", "smart joins",  
    "el cheapo", "v8", "salat", "windows", "transactions", "oskar", "fuerte",
    "ccache", "libmusl"
  ];
  let conspiracy = {};
  while (Object.keys(conspiracy).length < 3) {
    conspiracy[theories[Math.floor(Math.random() * theories.length)]] = true;
  }
  return Object.keys(conspiracy);
};
print("It is caused by:", conspire().join(" + "));
