### a stack follows the principle of LIFO

class Stack

    attr_reader :underlying_array

    def initialize
        # create ivar to store stack here!
        @underlying_array = []
    end

    def push(el)
        # adds an element to the stack
        @underlying_array.push(el)
        el
    end

    def pop
        # removes one element from the stack
        @underlying_array.pop()
    end

    def peek
        # returns, but doesn't remove, the top element in the stack
        @underlying_array[-1]
    end
end

## initialize new Stack Object
stack = Stack.new

stack.push(2)
stack.push(3)
stack.push(5)
stack.push(9)

p stack.peek()
p stack.underlying_array