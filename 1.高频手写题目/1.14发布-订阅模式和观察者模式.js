// 发布-订阅：每次event.event发部，就会触发依次event.on订阅
// EventEmitter 发布中心
class EventEmitter {
    constructor() {
        this.events= {};
    }
    // 订阅事件的方法
    on(eventName, callback) {
        if(!this.events[eventName]) {
            // 一个名字可以订阅多个事件函数
            this.events[eventName] = [callback]
        } else {
            ethis.events[eventName].push(callback);
        }
    }
    // 触发事件的方法
    emit(eventName) {
        this.events[eventName] && this.events[eventName].forEach(cb => cb());
    }
}

// 订阅者
let em = new EventEmitter();
em.on("click", emCB)


// 观察者：观察者需要放到被观察者中。被观察者状态变化需要通知观察者（基于发布-订阅模式）
// Subject： 被观察者
class Subject {
    constructor(name) {
        this.state = 'habppy';
        this.observers = []; // 存储所有的观察者
    }
    // 收集所有观察者
    attach(o) {
        this.observers.push(o)
    }
// 更新被观察者的状态
    setState(newState) {
        this.state = newState;
        // this指观察者
        this.observers.forEach(o => o.update(this))
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    update(student) {
        console.log('当前'+this.name + '被通知了', '当前学士的状态是'+student.state)
    }
}

let studet = new Subject("学生");
let parent = new Observer("父母");
let teacher = new Observer("老师");

// 观察者获取被观察者的状态的前提条件是，被观察者要主动接纳观察者
studet.attach(parent);
studet.attach(teacher);
studet.setState("sad");


// 发布订阅模式和观察者模式总结
// 1.发布订阅模式：订阅者主动订阅事件，且需要主动去触发订阅的事件。如果其它订阅者订阅了相同的事件，
//   去触发时也会调用相同的回调函数。显示的效果和回调函数的参数有关。
//   观察者模式：被观察者需要接纳观察者后，在状态更新时会主动将新状态给所有的观察者。所有观察者得到的状态时相同的。
// 2.发布订阅模式：发布中心只负责管理事件和触发事件的动作；
//   观察者模式：被观察者需要把观察者放到自己的属性里，需要主动通知所有观察者。