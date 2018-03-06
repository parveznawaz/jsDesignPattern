var mySingleton=(function(){
    var instance;

    function init(){
        function privateMethod(){
            console.log('I am private');
        }

        var privateVar="I am also private";

        var privateRandomNumber = Math.random();

        return {
            getRandomNumber: function(){
                return privateRandomNumber;
            }
        };
    }

    return {
        getInstance: function(){
            if(!instance){
                instance=init();
            }
            return instance;
        }
    };

})();

var singletonA = mySingleton.getInstance();
var singletonB = mySingleton.getInstance();
console.log(singletonA.getRandomNumber()==singletonB.getRandomNumber());