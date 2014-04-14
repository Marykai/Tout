'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('toutApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('L-array &egrave; definito', function () {
    expect(scope.prodotto).toBeDefined();
  });
  

    
  it('Guarda che nell-array ci sia il prodotto che gli inserisco qui', function() {
    expect(scope.prodotto).toContain(jasmine.objectContaining({
      Descrizione: 'Caviale'
    }));
    expect(scope.prodotto).not.toContain(jasmine.objectContaining({
      c: 37
    }));
  });
  
  it('guarda toggle active se definita', function(){
      expect(scope.toggleActive).toBeDefined();
    });

});
