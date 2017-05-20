angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.welcomeToMUEAT', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/welcomeToMUEAT.html',
        controller: 'welcomeToMUEATCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.signUp', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signUp.html',
        controller: 'signUpCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.restaurant', {
    url: '/Restaurent',
    views: {
      'side-menu21': {
        templateUrl: 'templates/restaurant.html',
        controller: 'restaurantCtrl'
      }
    }
  })

  .state('menu.mLC', {
    url: '/MLC',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mLC.html',
        controller: 'mLCCtrl'
      }
    }
  })

  .state('menu.mUMS', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mUMS.html',
        controller: 'mUMSCtrl'
      }
    }
  })

  .state('menu.mUEG', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mUEG.html',
        controller: 'mUEGCtrl'
      }
    }
  })

  .state('menu.mUIC', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mUIC.html',
        controller: 'mUICCtrl'
      }
    }
  })

  .state('menu.page9', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page9.html',
        controller: 'page9Ctrl'
      }
    }
  })

  .state('menu.page14', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page14.html',
        controller: 'page14Ctrl'
      }
    }
  })

  .state('menu.page15', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page15.html',
        controller: 'page15Ctrl'
      }
    }
  })

  .state('menu.page18', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page18.html',
        controller: 'page18Ctrl'
      }
    }
  })

  .state('menu.page19', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page19.html',
        controller: 'page19Ctrl'
      }
    }
  })

  .state('menu.page20', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page20.html',
        controller: 'page20Ctrl'
      }
    }
  })

  .state('menu.page16', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page16.html',
        controller: 'page16Ctrl'
      }
    }
  })

  .state('menu.orderedMenu', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orderedMenu.html',
        controller: 'orderedMenuCtrl'
      }
    }
  })

  .state('menu.yourOrdered', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/yourOrdered.html',
        controller: 'yourOrderedCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});