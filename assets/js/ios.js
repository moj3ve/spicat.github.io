var agent = navigator.userAgent;
var ios = agent.match(/.*; CPU (?:iPhone )?OS ([0-9_]*) like Mac OS X[;)]/);
ios = ios == null ? '10.0' : ios[1].replace(/_/g, '.');
document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">');
if (parseFloat(ios) >= 7.0) {
  document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/ios78.css"');
} else {
  document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/legacy.css"');
}
if (navigator.userAgent.search(/Cydia/) != -1)
  document.write('<link rel="stylesheet" type="text/css" href="../../assets/css/style.css"');
document.write('<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0"/>');
document.write('<base target="_blank"/>');