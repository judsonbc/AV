
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = '';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  Form1.style.display = 'block';
  NSB.addProperties(Button1);

  NSB.addProperties(Button2);

NSB.addProperties(Audio1);
NSB.addProperties(Video1);
  NSB.TitleBar_init('TitleBar1','Home,Left','Home,Right');
  NSB.addProperties(TitleBar1);
  Form1.style.display = 'none';
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
Button1.onclick = function() { savethefunction_rvar="";
  Audio1.play();
return savethefunction_rvar; }

Button2.onclick = function() { savethefunction_rvar="";
  Video1.play();
return savethefunction_rvar; }


window.addEventListener('load', function() {
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;

 //This sample shows how to use the Audio and Video controls.
 //Formatting video into a format that will play is important.
 //Read http://diveintohtml5.org/video.html

 //This sample plays an audio track with is deployed with the app
 //and a video which resides on the nsbasic.com server.

 //Note how these are set up in the Project's manifest property.

 //This will work fine on iOS devices. For Android, you will need 2.3+.

 //For more advanced usage, see this article:
 //http://remysharp.com/2010/12/23/audio-sprites

