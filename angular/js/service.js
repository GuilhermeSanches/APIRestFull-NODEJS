var App = angular.module('services', []);

App.factory('Lembretes', function($http, API){
	var lembretes = [{titulo: 'Ola'},{titulo: 'Ola Hello'}];
	return {
		read: function(){
			return $http.get(API+'lembretes');
		},
		create: function(item){
			return $http.post(API+'lembretes', item);
		},
		profile: function(id){
			return $http.get(API+'lembrete/'+id);	
		},
		update: function(item, id){
			return $http.put(API+'lembrete/'+id, item);	
		},
		delete: function(id){
			return $http.delete(API+'lembrete/'+id);
		}
	}
});

App.factory('Viagem', function($http, API){	
	return {
		read: function(){
			return $http.get(API+'viagens');
		}		
	}
});

App.factory('Messages', function($http, API){	
	return {
		readMessage: function(id){
			return $http.get(API+'message/'+id);
		}		
	}
});
