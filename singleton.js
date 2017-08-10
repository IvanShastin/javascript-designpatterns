var Singleton = (function(){
    var instantiated;

    function init(){
        return {
            publicMethod: function() {
                console.log('public method');
            },
            publicProperty: 'test'
        }
    }
    return {
        getInstance: function() {
            if(!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

Singleton.getInstance().publicMethod();
console.log(Singleton.getInstance().publicProperty);

//singleton with options
var SingletonTester = (function() {
    //options: an object containing configuration options for the singleton
    // e.g. var options = { name: 'test', pointX: 5};

    function Singleton(options) {
        options = options || {};
        this.name = 'SingletonTester';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }

    var instance;

    var _static = {
        name: 'SingletonTester',

        getInstance: function(options) {
            if(instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();

var singletonTest = SingletonTester.getInstance({
    pointX: 5,
    pointY: 4
});

console.log(singletonTest);