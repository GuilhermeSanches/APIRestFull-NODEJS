var App = angular.module('controllers', []);
  

App.controller('MenuCtrl', function($scope, $route){
    
});

App.controller('MessagesCtrl', function($scope, Messages, $route, $location, $routeParams){
    var mensagem = $routeParams.id;    
    Messages.readMessage(mensagem).then(function(data){
		$scope.message = data.data.description;        
	});
    
    $scope.closeMessage = function(){
                $location.path('/');
    }
    
    
    
  
    
      	        
});

App.controller('ReadCtrl', function($scope, Lembretes, $route){
	$scope.lembretes = [];

    

	$scope.notFound = false;
	Lembretes.read().then(function(data){
		$scope.lembretes = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		Lembretes.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	
	}
});	

App.controller('ReadCtrlTravel', function($scope, Viagem, $route){
	$scope.viagens = [];
    
    

	$scope.notFound = false;
	Viagem.read().then(function(data){
		$scope.viagens = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});
});

App.controller('CreateCtrl', function($scope, Lembretes, $location){
	$scope.cadastrar = function(titulo){
		var data = {
			titulo: titulo
		};

		Lembretes.create(data).then(function(data){
			$location.path('/');
		});
	}
});	

App.controller('EditCtrl', function($scope, Lembretes, $routeParams, $location){
	var id = $routeParams.id;
	Lembretes.profile(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		console.log(item);
		Lembretes.update(item, item.id).then(function(data){
			$location.path('/');
		});
	}
});	
 