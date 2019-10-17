class Node {
	constructor(data, priority) {
	  this.data = data;
	  this.priority = priority;

	  this.parent = null;
	  this.left = null;
	  this.right = null;
	}

	appendChild(node) {
	  if (!this.left) {
		this.left = node;
		node.parent = this;
	  } else if (!this.right) {
		this.right = node;
		node.parent = this;
	  }
	}

	removeChild(node) {
      if (node == this.left) {
		node.parent = null;
		this.left = null;
	  } else if (node == this.right) {
		node.parent = null;
		this.right = null;
	  } else {
		throw new Error("no such node to remove!")
	  }
	}

	remove() {
      if (this.parent) {
		this.parent.removeChild(this);
	  }
	}

	swapWithParent() {
		if (this.parent) {
		  
		  if (this.parent.parent) {
			  if (this.parent.parent.left == this.parent) {
				  this.parent.parent.left = this;
			  } else {
				  this.parent.parent.right = this;
			  }
		  }
  
		  let tmp_parent_other_branch = null;
		  let this_node_branch = 'l';
  
		  if (this.parent.left == this) {
			  tmp_parent_other_branch = this.parent.right;
		  } else {
			  this_node_branch = 'r';
			  tmp_parent_other_branch = this.parent.left;
		  }
		  if (tmp_parent_other_branch) {
            tmp_parent_other_branch.parent = this;
          }
  
		  let tmp_parent_parent = this.parent.parent;
  
		  if (this.left) {
			  this.left.parent = this.parent;
		  }
  
		  if (this.right) {
			  this.right.parent = this.parent;
		  }
  
		  this.parent.left = this.left;
		  this.parent.right = this.right;
		  this.parent.parent = this;
  
		  if (this_node_branch == 'l') {
			  this.left = this.parent;
			  this.right = tmp_parent_other_branch;
		  } else {
			  this.left = tmp_parent_other_branch;
			  this.right = this.parent;
		  }
		  this.parent = tmp_parent_parent;
		}
	  }
}

module.exports = Node;
