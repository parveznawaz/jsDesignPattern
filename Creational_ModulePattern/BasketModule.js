var basketModule = (function(){
    var basket=[];
    function doSomethingPrivate(){

    }

    return {
        addItem: function(values){
            basket.push(values);
        },
        getItemCount: function(){
            return basket.length;
        },
        getTotal: function(){
            var itemCount=this.getItemCount(),
            total=0;
            while(itemCount--){
                total+=basket[itemCount].price;
            }
            return total;
        }
    };
})();

basketModule.addItem({item:'bread', price:1.5});
basketModule.addItem({item:'butter', price:2.5});
console.log("Number of items in the basket is "+basketModule.getItemCount());
console.log("Total amount is "+basketModule.getTotal());