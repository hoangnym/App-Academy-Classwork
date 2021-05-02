# Now let's write a Queue class. 
# We will need the following instance methods: enqueue(el), dequeue, and peek.

# Test your code to ensure it follows the principle of FIFO.

class Queue 

    attr_reader :queue

    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.unshift(el)
        el
    end

    def dequeue()
        @queue.pop()
    end

    def peek
        @queue.last
    end

end


## initialize new Queue Object
queue = Queue.new

queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(9)

p queue.peek()
p queue.dequeue()
p queue.peek()
p queue.peek()
p queue.queue
