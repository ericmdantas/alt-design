;(function(ng) {
  "use strict";

  ng.module('doc', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html'
        })
        .when('/tabelas', {
          templateUrl: 'views/tabelas.html'
        })
        .when('/modais', {
          templateUrl: 'views/modais.html'
        })
        .when('/abas', {
          templateUrl: 'views/abas.html'
        })
        .when('/cards', {
          templateUrl: 'views/cards.html'
        })
        .when('/listas', {
          templateUrl: 'views/listas.html',
          controller: 'ListasController',
          controllerAs: 'lCtrl'
        })
        .when('/forms', {
          templateUrl: 'views/forms.html'
        })
        .when('/loading', {
          templateUrl: 'views/loading.html'
        })
        .otherwise({redirectTo: '/'})

      $locationProvider.html5Mode(true);
    }])
    .controller('CabecalhoController', ['$rootScope', '$location', function($rootScope, $location) {
      this.usuario = {
        imagem: 'https://avatars0.githubusercontent.com/u/7040162?v=3&s=4i0',
        nome: 'Fulano da Silva',
        email: 'fulanosilva@gmail.com'
      }

      this.rotas = [
        {nome: 'Tabelas', path: '/tabelas', ativa: false},
        {nome: 'Modais', path: '/modais', ativa: false},
        {nome: 'Abas', path: '/abas', ativa: false},
        {nome: 'Cards', path: '/cards', ativa: false},
        {nome: 'Listas', path: '/listas', ativa: false},
        {nome: 'Forms', path: '/forms', ativa: false},
        {nome: 'Loading', path: '/loading', ativa: false},
      ]

      this.produtos = [
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'},
        {nome: 'Nome do Produto', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'}
      ]

      this._selecionaRota = function() {
        var _path = $location.path();

        this.rotas.forEach(function(rota) {
          rota.ativa = false;

          if (_path === rota.path) {
            rota.ativa = true;
          }
        });
      }

      $rootScope.$on('$viewContentLoaded', this._selecionaRota.bind(this));
      $rootScope.$on('$locationChangeSuccess', this._selecionaRota.bind(this));
    }])
    .controller('ListasController', [function() {
      this.lista = [];

      for (var i = 0; i < 5; i++) {
        this.lista.push({
          imagem: 'https://avatars0.githubusercontent.com/u/7040162?v=3&s=4i0',
          mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur et risus sed congue. Sed libero ipsum, laoreet venenatis dui ac, accumsan porta dolor. Pellentesque sollicitudin lorem orci, et consectetur neque porttitor at. Vestibulum vehicula volutpat tortor, nec tincidunt diam pellentesque sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque scelerisque tristique dui, vel rutrum tortor molestie eu. Aliquam in efficitur mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ultrices luctus lectus vitae efficitur. Phasellus vel eros dui.',
          acao: 'Alguma coisa'
        });
      }
    }]);
}(angular));
