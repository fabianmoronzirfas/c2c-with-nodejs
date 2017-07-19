 /* global io, document */
  // these are changes made to the frontend
  //
  /**
   * a function that changes the text on the site
   * @param  {String} val The value to put in there
   */
  function changeit (val) {
    let targetElement = document.getElementById('target');
    targetElement.innerHTML = val;
  }

  /**
   * this is just for beeing sure that the page is fully loaded
   */
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContent is loaded'); // log that
    // create the frontend part of socket.io
    var socket = new io();
    // get the buttons declared in the html so we can
    // do some action based on the users clicks
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    // const button3 = document.getElementById('button3');
    // const button4 = document.getElementById('button4');

    // lets connect to the server
    socket.connect('http://localhost:3000', {
      autoConnect: true
    });

    socket.on('message', function(msg) {
      if(msg === 'up') {
        console.log('you released the button');
      }
      if(msg === 'down') {
        console.log('you pressed the button');
      }
    });
    // do something on the users click
    button1.onclick = function() {
      socket.send('1'); // send to the backend
      // log to the frontend console
      console.log('your clicked button one in frontend');
      changeit('on'); // change the text on the frontend
    };

    // see the comments on button1.onclick to know
    // what is going on
    button2.onclick = function() {
      socket.send('0');
      console.log('your clicked button two in frontend');
      changeit('off');
    };
    // button3.onclick = function() {
    //   socket.send('three');
    //   console.log('your clicked button three in frontend');
    //   changeit('three');
    // };
    // button4.onclick = function() {
    //   socket.send('four');
    //   console.log('your clicked button four in frontend');
    //   changeit('four');
    // };
  }); // end of "DOMContentLoaded"
