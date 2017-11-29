<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
  

  <base href = "https://polygit.org/app-route+polymerelements+*/components/">
  
  <!-- 
  	   NOTE: Here the following use of base href does not work, 
             the following error is given:
             Error parsing path: /app-route+polymerelements+*/components/.
  -->
  
  <script src="webcomponentsjs/webcomponents-lite.js"></script>

  <script src="web-animations-js/web-animations-next-lite.min.js"></script>
  
   <!-- Ensure Web Animations polyfill is loaded since neon-animation 2.0 doesn't import it -->
 
   <!--
   <link rel="import" href="neon-animation/web-animations.html">
  
  <link rel="import" href="iron-demo-helpers/demo-snippet.html">
  
  <link rel="import" href="iron-form/iron-form.html">
  <link rel="import" href="paper-input/paper-input.html">
  <link rel="import" href="paper-checkbox/paper-checkbox.html">
  <link rel="import" href="paper-button/paper-button.html">
  <link rel="import" href="paper-tabs/paper-tabs.html">
  <link rel="import" href="paper-tabs/paper-tab.html">
  <link rel="import" href="paper-dropdown-menu/paper-dropdown-menu.html">
  <link rel="import" href="paper-menu/paper-menu.html">
  <link rel="import" href="paper-item/paper-item.html">
  
  <link rel="import" href="neon-animation/neon-animated-pages.html">
  <link rel="import" href="neon-animation/neon-animatable.html">
  <link rel="import" href="neon-animation/animations/slide-from-left-animation.html">
  <link rel="import" href="neon-animation/animations/slide-from-right-animation.html">
  <link rel="import" href="neon-animation/animations/slide-left-animation.html">
  <link rel="import" href="neon-animation/animations/slide-right-animation.html">
  
  <link rel="import" href="app-route/app-route.html">
  <link rel="import" href="app-route/app-location.html">
  
  <link rel="import" href="iron-demo-helpers/demo-pages-shared-styles.html">
  <link rel="import" href="iron-demo-helpers/url-bar.html">

  -->
    
  <script src="https://polygit.org/app-route+polymerelements+*/components/webcomponentsjs/webcomponents-lite.js"></script>

  <script src="https://polygit.org/app-route+polymerelements+*/components/web-animations-js/web-animations-next-lite.min.js"></script>
  
  <!-- Ensure Web Animations polyfill is loaded since neon-animation 2.0 doesn't import it -->

  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/neon-animation/web-animations.html">
  
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/iron-demo-helpers/demo-snippet.html">
  
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/iron-form/iron-form.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-input/paper-input.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-checkbox/paper-checkbox.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-button/paper-button.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-tabs/paper-tabs.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-tabs/paper-tab.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-dropdown-menu/paper-dropdown-menu.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-menu/paper-menu.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/paper-item/paper-item.html">
  
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/neon-animation/neon-animated-pages.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/neon-animation/neon-animatable.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/neon-animation/animations/slide-from-left-animation.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/neon-animation/animations/slide-from-right-animation.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/neon-animation/animations/slide-left-animation.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/neon-animation/animations/slide-right-animation.html">
  
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/app-route/app-route.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/app-route/app-location.html">
  
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/iron-demo-helpers/demo-pages-shared-styles.html">
  <link rel="import" href="https://polygit.org/app-route+polymerelements+*/components/iron-demo-helpers/url-bar.html">

  <style is="custom-style" include="demo-pages-shared-styles">
    body {
      margin: 15px;
      padding: 15px;
    }
    demo-snippet {
      margin: 15px;
    }
  </style>

</head>

<body>
  
  	<!--
  		url-bar` is a helper element that displays a simple read-only URL bar if
		and only if the page is in an iframe. In this way we can demo elements that
		deal with the URL in our iframe-based demo environments.
		If the page is not in an iframe, the url-bar element is not displayed.
		
		What is an iframe?
		An IFrame (Inline Frame) is an HTML document embedded inside another HTML document on a website.
		The IFrame HTML element is often used to insert content from another source, such as an advertisement, into a Web page.
		
		Not using it! 
		
  		<url-bar></url-bar>

  	-->

	<!--
		demo-snippet is a helper element that displays the source of a code snippet and its rendered demo. It can be used for both native elements and Polymer elements.
		
		Not using it! Note: <template> tag goes together
		
		<demo-snippet>
		   <template>
	-->
  
  	<!-- 
  		Our module: demo-3
  		==================
   	-->
   	
      <demo-3></demo-3>
      
      <dom-module id="demo-3">
        <template>
        
          <style>
            :host {
              display: block;
              height: 800px;
            }
          </style>
          
          <app-location use-hash-as-path route="{{route}}"></app-location>

          <!-- Two routes, one for the home page (pattern="/"), and one for the tabs page (pattern="/tabs"). -->
          <app-route route="{{route}}" pattern="/" active="{{homeActive}}"></app-route>
          <app-route route="{{route}}" pattern="/tabs" tail="{{tabsRoute}}" active="{{tabsActive}}"></app-route>

          <div hidden$="{{!homeActive}}">
            Main page!
            <br><br>
            <a href="#/tabs/">Tabs page</a>
          </div>
          
          <div hidden$="{{!tabsActive}}">
            <a href="#/">Back to main page</a>
            
            <!-- 
            	Using tabs-page.
            	================
            		tabs-page is an element that handles routing within itself.
                	View source below for more details!
             -->
              
            <tabs-page route="{{tabsRoute}}"></tabs-page>
            
          </div>
          
        </template>
        
        <script>
          Polymer({
            is: 'demo-3',
            properties: {
              route: {
                type: Object
              }
            },
            ready: function() {
              this.async(function() {
                  this.set('route.path', '/');
                //  this.set('route.path', '/tabs');
              }, 100);
            }
          });
        </script>
        
      </dom-module>
    
    <!--
     Not used!
     
        	</template>

  		</demo-snippet>
  	-->

	<!-- 
 		Module: tabs-page
 		=================
	-->
 
  <dom-module id="tabs-page">
  
    <template>
      <style>
      
        paper-tabs {
          background-color: var(--paper-blue-a100);
        }
        
        neon-animated-pages {
          overflow-x: hidden;
          width: 100%;
          display: block;
          height: 500px;
        }
        
      </style>
      
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
      
      <app-route route="{{route}}" pattern="/:tabName" data="{{data}}"></app-route>
      
      <paper-tabs selected='{{data.tabName}}' attr-for-selected="name">
      
        	<paper-tab name='add'>Add User Page</paper-tab>
       		<paper-tab name='experiment'>Experiment</paper-tab>
        	<paper-tab name='baz'>Baz!</paper-tab>
        	
      </paper-tabs>

      <neon-animated-pages id='animatedPages' selected='{{selectedPage}}' entry-animation='{{entryAnimation}}' exit-animation='{{exitAnimation}}' attr-for-selected="name">
                           
        	<neon-animatable name='add'>
        	
	        	<iron-form>
	      			<form method="get" action="/user">
	      			
		       	 		<paper-input type="text" name="name" label="Name">
		        		<paper-checkbox name="reset" value="no" checked></paper-checkbox>
						<paper-button raised onclick="submitForm()">Submit</paper-button>
						
	      			</form>

	   		 	</iron-form>
	   		 	
        	</neon-animatable>
        	
			<neon-animatable name='experiment'>
			
				<form is = "iron-form" method = "get" action = "/" id = "basic">
				
		         <paper-input class = "paperinput" name = "name" label = "Enter your name" required>
		         </paper-input>
		         
		         <br>
		         
		         <input type = "checkbox" name = "vehicle" value = "bike"> I have a bike
		         <br>
		         
		         <input type = "checkbox" name = "vehicle" value = "car"> I have a car
		         <br>
		     
		         <paper-dropdown-menu class = "menu" label = "Icecream Flavours" name = "Flavours">
         			<paper-listbox slot="dropdown-content" class = "dropdown-content" selected = "1">
	               		<paper-item value = "vanilla">Vanilla</paper-item>
	               		<paper-item value = "strawberry">Strawberry</paper-item>
	               		<paper-item value = "caramel">Caramel</paper-item>
         		 	</paper-listbox>
         		 </paper-dropdown-menu>
         		 
         		  <paper-dropdown-menu label="Dinosaurs">
			  		<paper-listbox slot="dropdown-content" selected="1">
					    <paper-item>allosaurus</paper-item>
					    <paper-item>brontosaurus</paper-item>
					    <paper-item>carcharodontosaurus</paper-item>
					    <paper-item>diplodocus</paper-item>
			  		</paper-listbox>
			    </paper-dropdown-menu>
			    
		         <br>
		       		       
		         <paper-button class = "paperbtn" raised onclick = "_submit(event)">Submit</paper-button>

		         <paper-button class = "paperbtn" raised onclick = "_reset(event)">Reset</paper-button>
		         
		         <h4>You entered the details:</h4>
		         
		         <div class = "output"></div>
		        
		      </form>
		   
		      <script>
		         function _submit(event) {
		            Polymer.dom(event).localTarget.parentElement.submit();
		         }
		         function _reset(event) {
		            var form  =  Polymer.dom(event).localTarget.parentElement
		            form.reset();
		            form.querySelector('.output').innerHTML  =  '';
		         }
		         basic.addEventListener('iron-form-submit', function(event) {
		            this.querySelector('.output').innerHTML  =  JSON.stringify(event.detail);
		         });
		      </script>
			
			</neon-animatable>
			
        	<neon-animatable name='baz'>Baz Page, the Best One of the Three!</neon-animatable>
        
      </neon-animated-pages>
      
    </template>
    
    <script>
    
      window.addEventListener('WebComponentsReady', function() {
	
		Polymer({
			is : 'tabs-page',
			properties : {
				route : {
					type : Object,
					notify : true
				}
			},
			observers : [ 'pageChanged(data.tabName)' ],
			pageChanged : function() {
	
			   /*
			 	* We assign to selectedPage here rather than just binding the
			 	* selected property of neon-animated-pages to selectedPage so that
			 	* we can first figure out which animation to use in the transition.
			 	*/
				var transitioningFrom = this.$.animatedPages.selected;
				var transitioningTo = this.data.tabName;
				var pagesInOrder = this.$.animatedPages.items.map(function(x) {
					return x.getAttribute('name')
				});
	
				if (pagesInOrder.indexOf(transitioningFrom) > pagesInOrder
						.indexOf(transitioningTo)) {
					this.entryAnimation = 'slide-from-left-animation';
					this.exitAnimation = 'slide-right-animation';
				} else {
					this.entryAnimation = 'slide-from-right-animation';
					this.exitAnimation = 'slide-left-animation';
				}
	
				this.selectedPage = this.data.tabName;
				// slide-from-left-animation
			}
		});
	});
      
    </script>
    
  </dom-module>
    
</body>
</html>