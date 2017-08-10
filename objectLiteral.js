//object literal

var myModule = {
    myProperty: 'someValue',
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    myMethod1: function() {
        console.log('object method');
    },
    myMethod2: function() {
        console.log('Caching is:' + (this.myConfig.useCaching) ? 'enabled' : 'disabled');
    },
    myMethod3: function(newConfig) {
        if(typeof newConfig == 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

myModule.myMethod1();
myModule.myMethod2();
myModule.myMethod3({useCaching: true, language: 'es'});