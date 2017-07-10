// MWASH Webmaker Library v2
function _wm() {}
// A storage to store data.
_wm.version = "DR 11";

// Write debug message to the console.
function writeDebug(Message) {
 sampletime = new Date();
 month = sampletime.getMonth();
 date = sampletime.getDate();
 hour = sampletime.getHours();
 minute = sampletime.getMinutes();
 second = sampletime.getSeconds();
 if (hour<10) {hour = "0"+hour}
 if (minute<10) {minute = "0"+minute}
 if (second<10) {second = "0"+second}
 DebugMsg = DebugMsg + "[" + month + "-" + date + " " + hour +":" + minute + ":" + second + "] " + Message +"\n";
 console.log("[" + month + "-" + date + " " + hour +":" + minute + ":" + second + "] " + Message);
 month = null;
 date = null;
 hour = null;
 minute = null;
 second = null;}
// Show messages written by the command above.
function showDebug() {
 alert ("WebMaker Public Repository generated these debug logs:\n\n" + DebugMsg);}
// Get elements.
function gel(name,type,list) {
 if (type==1) {
  retres = document.getElementById(name);}
 if (type==2) {
  if (list==0) {list=1}
  retres = document.getElementsByClassName(name)[list-1];}
 if (type==3) {
  if (list==0) {list=1}
  retres = document.getElementsByTagName(name)[list-1];}
 if (type==4) {
  if (list==0) {list=1}
  retres = document.getElementsByName(name)[list-1];}
 if (type==0) {
  if (list==0) {
   if (document.getElementById(name)!==null) {
    retres = document.getElementById(name);}
   else if (document.getElementsByClassName(name)[0]!==null) {
    retres = document.getElementsByClassName(name)[0];}
   else if (document.getElementsByTagName(name)[0]!==null) {
    retres = document.getElementsByTagName(name)[0];}
   else if (document.getElementsByName(name)[0]!==null) {
    retres = document.getElementsByName(name)[0];}
   else {
    retres = null;
    console.warn("No such element has an attribute with [" + name + "].");}}
  else {
  }}
 return(retres);
 retres = null;}
// Analyse Word Sheet
function wsr(wordSheet,keyName) {
  fc=-1;
  temp = wordSheet.split("\n");
  found = 0;
  while (found<99) {
   if (temp[found].split(":")[0]==keyName) {fc=found}
   found = found + 1;}
  retres = temp[fc].split(":")[1];
  return(retres);}
 function wsd(wordsheet,keyName) {}
 function wsw(wordsheet,keyName,keyValue) {}
// Load remote text
var xmlhttp;
function AjaxRequest(type,url,msg)
{xmlhttp=null;
if (type == null) {type="GET";}
if (window.XMLHttpRequest) {
 xmlhttp=new XMLHttpRequest();
}
else if (window.ActiveXObject) {
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
if (xmlhttp !== null) {
  xmlhttp.onreadystatechange=state_Change;
  xmlhttp.open(type,url,true);
  xmlhttp.send(msg);
  xmlhttp.requestURL=url;}
else {
 console.warn("Failed to load document from [" + xmlhttp.requestURL +"]:\nDoes not support object XMLHTTP.");}
Returned = xmlhttp.responseText;}
function state_Change() {
if (xmlhttp.readyState==4) {// 4 = "loaded"
 if (xmlhttp.status==200) {// 200 = "OK"
  return(xmlhttp.responseText);}
 else {
  console.warn("Failed to load document from [" + xmlhttp.requestURL +"]:\nRefused to response.");}
 }
}

//Wordsheet
function _wsgetItem(wordsheet,keyName,lineSpliter,keySpliter) {
 _wm.return = "";
 _wm.wordsheet = wordsheet.split(lineSpliter);
 _wm.actnum = _wm.wordsheet.length;
 _wm.donum = 0;
 while (_wm.donum < _wm.actnum) {
  if (_wm.wordsheet[_wm.donum].search(keyName+keySpliter) > -1) {
   _wm.return = _wm.wordsheet[_wm.donum].split(keySpliter)[1];}
 _wm.donum ++;}
 return (_wm.return);
}
