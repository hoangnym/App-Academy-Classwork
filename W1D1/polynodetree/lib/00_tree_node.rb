class PolyTreeNode
    attr_reader :parent, :children, :value
    
    def initialize(value = nil)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(parent)
        return if self.parent == parent

        # First, detach from current parent.
        if self.parent
        self.parent._children.delete(self)
        end

        # No new parent to add this to.
        @parent = parent
        self.parent._children << self unless self.parent.nil?

        self
    end

    
end