<!DOCTYPE html>
<html>
   <head>
      <title>iron-form</title>
      
      <base href="https://polygit.org/app-route+polymerelements+*/components/">
      
      <script src="webcomponentsjs/webcomponents-lite.js"></script>
      
       <!-- Ensure Web Animations polyfill is loaded since neon-animation 2.0 doesn't import it -->
  	  <link rel="import" href="neon-animation/web-animations.html">

      <link rel="import" href="polymer/polymer.html">
      <link rel="import" href="iron-form/iron-form.html">
      <link rel="import" href="paper-input/paper-input.html">
      <link rel="import" href="paper-button/paper-button.html">
      <link rel="import" href="paper-dropdown-menu/paper-dropdown-menu.html">
      <link rel="import" href="paper-menu/paper-menu.html">
      <link rel="import" href="paper-item/paper-item.html">
  
      <style>
                 
         .paperbtn {
            background: #4682B4;
            color: white;
         }
         .paperinput{
            width: 25%;
         }
         .menu{
            width:25%;
         }
         
      </style>
   </head>
  
   <body>
      <form is="iron-form" method="get" action="/" id="basic">
         <paper-input class="paperinput" name="name" label="Enter your name" required>
         </paper-input>
         <br>
         <input type="checkbox" name="vehicle" value="bike"> I have a bike
         <br>
         <input type="checkbox" name="vehicle" value="car"> I have a car
         <br>
     
         <paper-dropdown-menu class="menu" label="Icecream Flavours" name="Flavours">
         <paper-listbox slot="dropdown-content" class="dropdown-content" selected="1">
               <paper-item value="vanilla">Vanilla</paper-item>
               <paper-item value="strawberry">Strawberry</paper-item>
               <paper-item value="caramel">Caramel</paper-item>
         </paper-listbox>
         </paper-dropdown-menu>
         
         <br>
       
         <paper-button class="paperbtn" raised onclick="_submit(event)">Submit</paper-button>
         <paper-button class="paperbtn" raised onclick="_reset(event)">Reset</paper-button>
         <h4>You entered the details:</h4>
         <div class="output"></div>
      </form>
   
      <script>
         function _submit(event) {
            Polymer.dom(event).localTarget.parentElement.submit();
         }
         function _reset(event) {
            var form = Polymer.dom(event).localTarget.parentElement
            form.reset();
            form.querySelector('.output').innerHTML = '';
         }
         basic.addEventListener('iron-form-submit', function(event) {
            this.querySelector('.output').innerHTML = JSON.stringify(event.detail);
         });
      </script>
   </body>
</html>
