function createCounter() {
    let count = 0;

    return {
        increment: () => {
            count++; //Accessing and modifying count from the outer scope
            console.log(`Count: ${count}`);
        },
        decrement: () => {
            count--;
            console.log(`Count: ${count}`);
        }
    };
}

const counter = createCounter();

counter.increment();
counter.decrement();
counter.increment();

/**
 * Closure:
 * The createCounter creates a closure by defining the count variable in its scope and returning
 * an object containing the increment and decrement functions.
 * These functions have access to the count variable even after createCounter has finished executing, forming a closure.
 * Implicit this Binding
 * The increment and decrement functions are arrow functions, which means they implicitly inherit thi binding
 * from their enclosing scope.(the createCounter function)
 * This allows them to directly access and modify the count variable without needing an explicit binding.
 * Key Points
 * The count variable is effectively "private" to the closure, only accessible by the increment and decrement functions.
 */