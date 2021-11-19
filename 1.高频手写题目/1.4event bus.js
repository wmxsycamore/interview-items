class EventEmeitter {
  constructor() {
    this._events = this._events || new Map();
  }
  emit(type, ...args) {
    const handler = this._events.get(type);
    if(Array.isArray(handler)) {
      for(let i=0; i< handler.length; i++) {
        if(args.length) {  
          handler[i].apply(this, args);
        } else {
          handler[i].call(this);
        }
      }
    } else {
      if(args.length) {
        handler.apply(this, args);
      } else {
        handler.call(this);
      }
    }
    return true;
  }
  addListener(type, fn) {
    const handler = this._events.get(type);
    if(!handler) {
      this._events.set(type, fn);
    } else if(handler && typeof handler === "function") {
      this._events.set(type, [handler,fn]);
    } else {
      handler.push(fn);
    }
  }
  removeListener(type, fn) {
    const handler = this._events.get(type);
    if(handler && typeof handler === "function") {
      this._events.delete(type, fn);
    } else {
      let postion;
      for(let i=0; i< handler.length; i++) {
        if(handler[i] === fn) {
          postion = i;
        } else {
          postion = -1;
        }
      }
      if(postion !== -1) {
        handler.splice(postion, 1);
        if(handler.length === 1) {
          this._events.set(type, handler[0])
        }
      } else {
        return this;
      }
    }
  }
}