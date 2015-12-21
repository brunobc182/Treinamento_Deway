angular.module('eventos.services', [])

.factory('EventosService', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var eventos = JSON.parse(localStorage.eventos || "[]");

  function getNovoId() {
    return eventos.length ? eventos[eventos.length-1].id + 1 : 0;
  }

  return {
    todos: function() {
      return eventos;
    },
    salvar: function(evento) {
      evento.id = getNovoId();

      eventos.push({
        id: evento.id,
        nome: evento.nome,
        descricao: evento.descricao,
        foto: evento.foto,
        data: evento.data,
        local: evento.local
      });

      localStorage.eventos = JSON.stringify(eventos);
    },
    excluir: function(eventoIndex) {
      eventos.splice(eventoIndex, 1);
      localStorage.eventos = JSON.stringify(eventos);
    },
    get: function(eventoId) {
      for (var i = 0; i < eventos.length; i++) {
        if(eventos[i].id == parseInt(eventoId)) {
          return eventos[i];
        }
      }

      return null;
    }
  };
});
