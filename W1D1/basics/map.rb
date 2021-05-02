# Let's write a Map class (following a similar pattern to Stack and Queue) that implements a map using only arrays.

# Remember, a map stores information in key-value pairs, where the keys are always unique. 
# When implemented with arrays, a map might look something like this: my_map = [[k1, v1], [k2, v2], [k3, v2], ...].

# Our Map class should have the following instance methods: set(key, value), get(key), delete(key), show. 
# Note that the set method can be used to either create a new key-value pair or update the value for a pre-existing key. 
# It's up to you to check whether a key currently exists!

# As always, test your code thoroughly to make sure all properties of maps are enforced.

class Map

    attr_reader :underlying_arr

    def initialize
        @underlying_arr = []
    end

    def set(key, value)
        return @underlying_arr.push << [key, value] if @underlying_arr.length < 1
        @underlying_arr.each do |sub|
            if sub[0] == key 
                ## update key-value pair
                sub[1] = value
                return
            end
        end
        @underlying_arr.push << [key, value]
        value
    end

    def get(key)
        @underlying_arr.each { |sub| return sub[1] if sub[0] == key}
        nil
    end

    def delete(key)
        value = get(key)
        @underlying_arr.reject! { |sub| sub[0] == key}
        value
    end

    def show
        @underlying_arr
    end

end


my_map = Map.new()

my_map.set(2, 3)
my_map.set(1, 4)
p my_map.show

my_map.set(2, 8)
my_map.set(3, 5)
p my_map.show

p my_map.get(2)

my_map.delete(2)
p my_map.show