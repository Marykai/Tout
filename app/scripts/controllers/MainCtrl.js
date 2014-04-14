'use strict';

/* Controller */

var toutvacontrollers= angular.module('toutApp', []);
  
toutvacontrollers.controller('MainCtrl', ['$scope', function($scope){
    {
    
      $scope.prodotto=[
        {codProdotto:'3',Descrizione:'Caviale',Qta:'8',Prezzo:'70.00',Totale:'80.00',Ora:'17.42'},
        {codProdotto:'17',Descrizione:'Fanta',Qta:'1',Prezzo:'3.00',Totale:'6.00',Ora:'17:10'},
        {codProdotto:'3',Descrizione:'Insalata',Qta:'2',Prezzo:'10.00',Totale:'80.00',Ora:'17.42'},
        {codProdotto:'17',Descrizione:'Coca-cola',Qta:'1',Prezzo:'3.00',Totale:'6.00',Ora:'17:10'},
        {codProdotto:'3',Descrizione:'Pasta alla salvia',Qta:'1',Prezzo:'20.00',Totale:'80.00',Ora:'17.42'},
        {codProdotto:'17',Descrizione:'Penne al ragù',Qta:'1',Prezzo:'6.00',Totale:'6.00',Ora:'17:10'},
      ];
      
     
                             /*queste funzione mi permette di selezionare i prodotti che poi verranno inseriti nello sconto prodotti*/
      $scope.toggleActive = function(p){
          p.active = !p.active;
        };
        
        
                             //TOTALE DA PAGARE IN TOTALE (SENZA SCONTI SENZA NIENTE DI ANCORA TOLTO.
                              //RINOMINA: "totaleGenerale". "Complessivo", "totaleConsumazioni"
      $scope.totaleConsumazioni=function(){
            var tot=0;
            angular.forEach($scope.prodotto, function(t){
              tot += t.Prezzo*t.Qta;
            });
            return parseFloat(tot,2); /*questo deve diventare il TOTALE del COSTO del prodotti*/
          };

      
                              //SCONTO DEI PRODOTTI SELEZIONATI NELLA TABELLA
                              //RINOMINA: "scontoProdottiOmaggiati" 
      $scope.scontoProdotti= function(){
        var tot=0;
      
        angular.forEach( $scope.prodotto, function(p){
          if(p.active){
            tot+= p.Prezzo*p.Qta;
          }
        });
        return parseFloat(tot,2);/*questo totale deve andare in SCONTO Prodotti*/
      };
      

                                //TOTALE DEI PRODOTTI PRESENTE IN TABELLA
                                //RINOMINA: "numProdotti"
      $scope.quanto=function(){
          var tot=0;
          angular.forEach($scope.prodotto, function(t){
                var qty= +t.Qta;
                tot+= qty;
              });
          return parseFloat(tot,2); /*questo deve diventare il TOTALE della QUANTITA' del prodotti*/
        };
                             //FUNZIONE CHE ANDRA' POI METTERo' NELLA VIEW 
                              //ora fa lo sconto sul totale, ma se togli dei prodotti? Non e' sconveniente?
      $scope.scontoPercentuale = function(){
          var sconto=0;
          if($scope.percentualeInserita > 0){
            sconto=$scope.totaleConsumazioni()*$scope.percentualeInserita/100;
          }
        
          return parseFloat(sconto,2);
        };
        
    
                            //TOTALE - SC PRODO a cui poi dovro' aggiungere le altre funzioni di sottrazione.
                            //Puo' servire nel caso in cui decideste di fare lo sconto percentuale, 
                            //sul totale prodotti meno EVENTUALI prodotti omaggiati
      $scope.totale= function(){
        var tot = $scope.totaleConsumazioni();
        var sc  = $scope.scontoProdotti();
        
        var totale = tot - sc;
         
        return parseFloat(totale,2);
              
      };
      
      $scope.manuale='';
      $scope.contanti='';
      $scope.bancomat='';
      $scope.credito='';
      $scope.assegni='';
      
      $scope.totaleDaPagare= function (){
          var tot=$scope.totaleConsumazioni();
         /* if (typeof $scope.manuale === "undefined") {
          alert("undefined");
          } */
          tot= $scope.totaleConsumazioni()-$scope.scontoProdotti()-$scope.scontoPercentuale()-$scope.manuale-$scope.contanti-$scope.bancomat-$scope.credito-$scope.assegni;

          return tot;
        
        };
      
    

    }
  }]);
  
