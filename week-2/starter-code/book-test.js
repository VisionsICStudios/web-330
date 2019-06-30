var basketModule = (() => {

  // privates.
  var basket = [];

  function doSomethingPrivate () {
    //...
  }

  function doSomethingElsePrivate () {
    //...
  }
  // Return an object exposed to the public.
  return {

    // Add items to our basket.
    addItem: (values) => {
      basket.push(values);
    },

    // Get the count of items in the basket.
    getItemCount: function () {
      return basket.length;
    },

    // Public alias to a private function.
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {
      var itemCount = this.getItemCount (),
      total = 0;
      while(itemCount--) {
        total += basket[itemCount]. price;
      }

      return total;
    }
  };
})(); // IIFE applied to execute code output.
