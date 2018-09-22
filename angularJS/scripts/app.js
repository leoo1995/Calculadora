var app = angular.module('Calculadora',[]);
app.controller('CalculadoraCtrl',function($scope){
  
    $scope.barra = '';//Barra de operaciones 
    $scope.barTemp = '';//Barra parcial de numeros
    $scope.opActivo = false; 

   console.log("Cargó el controlador");


   $scope.operador = function(valor){
       var ifmas = $scope.barra.indexOf('+') != -1 //Si hay algun signo '+' en barra
       var ifmenos = $scope.barra.indexOf('-') != -1 // Si hay alagun '-' en barra
       var ifpor = $scope.barra.indexOf('*') != -1 //Si hay algun '*' en barra
       var ifdiv = $scope.barra.indexOf('/') != -1 // Si hay algun '/' en barra
       $scope.opActivo = true
       $scope.igActivo = false
       if($scope.barra == '' && $scope.barTemp == ''){
        $scope.barra = ''
        //$scope.barra += $scope.barTemp + valor   
       }
       else if(ifmas || ifmenos || ifpor || ifdiv){
       
       $scope.barra += $scope.barTemp
       $scope.res = eval($scope.barra)
       $scope.barTemp = ''+eval($scope.barra)
       $scope.barra += valor
       
       }else{
        $scope.barra += $scope.barTemp + valor   
        
        console.log(ifmas)
        console.log(ifmenos)
        console.log(ifpor)
        console.log(ifdiv)
       }
   }
   
    $scope.igual = function(){
        $scope.barra += $scope.barTemp
        $scope.res = eval($scope.barra)
        $scope.barTemp = eval($scope.barra)
        $scope.barra = ''
        $scope.opActivo = true
        $scope.igActivo = true
    }

    $scope.delete = function(){
        $scope.barTemp= $scope.barTemp.slice(0,-1)
    }


    $scope.valor = function(valor){
        var lastMas = $scope.barra.substr(-1) == '+'
        var lastMenos = $scope.barra.substr(-1) == '-'
        var lastPor = $scope.barra.substr(-1) == '*'
        var lastDiv = $scope.barra.substr(-1) == '/'
        if ($scope.opActivo && (lastMas || lastMenos || lastPor || lastDiv)){
            $scope.barTemp = '' 
            $scope.barTemp = '' + valor;
        }else{
            if ($scope.igActivo){
                $scope.barTemp =''
            }
        $scope.barTemp += valor;
        }
        $scope.opActivo = false
        $scope.igActivo = false
    }

    $scope.C = function(){
        $scope.barra = ''
        $scope.barTemp = ''
        $scope.opActivo = false
    }
    $scope.CE = function(){
        $scope.barTemp = ''
    }

})