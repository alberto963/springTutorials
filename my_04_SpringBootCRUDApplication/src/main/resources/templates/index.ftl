<!DOCTYPE html>

<html lang="en" ng-app="crudApp">
    <head>
        <title>${title}</title>
        
        <link href="css/bootstrap.css" rel="stylesheet"/>
        
        <link href="css/app.css" rel="stylesheet"/>
        
        <link href="js/lib/node_modules/jointjs/dist/joint.css" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="js/lib/node_modules/jointjs/demo/devs/css/shapes.devs.css"/>
        <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700" rel="stylesheet" type="text/css">

		<link rel="import" href="src/static-app/static-app.html">
		
    </head>
    
    <body>

        <div ui-view></div>
        
        <div id="paper"></div>

    	<static-app></static-app>

        <script src="js/lib/angular.min.js" ></script>
        <script src="js/lib/angular-ui-router.min.js" ></script>
        <script src="js/lib/localforage.min.js" ></script>
        <script src="js/lib/ngStorage.min.js"></script>
        
        <script src="js/lib/node_modules/jquery/dist/jquery.js"></script>
        <script src="js/lib/lodash.js"></script>
        <script src="js/lib/node_modules/backbone/backbone.js"></script>
        <script src="js/lib/node_modules/jointjs/dist/joint.js"></script>

		<script src="bower_components/webcomponentsjs/webcomponents-loader.js"></script>

        <script src="js/app/app.js"></script>
        <script src="js/app/UserService.js"></script>
        <script src="js/app/UserController.js"></script>
        
        <script src="js/app/shapes.devs.js"></script>
        
        
        
    </body>
</html>