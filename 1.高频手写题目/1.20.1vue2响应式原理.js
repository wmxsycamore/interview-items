class Dep {
  constructor() {
    this.subs = []

  }
  depend() []

}

class Observer {
  constructor(data, vm) {

  }

}
function defineReative(data, key) {
  const dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter(params) {
      
    },
    set: function reactiveSetter(newVal) {

    }
  })

}