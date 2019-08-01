// linked list in using factory function


function createNode(value){
    return {
        value,
        next: null
    }
}
function createLinkedList(){

    return {
        head: null,
        tail: null,
        length: 0,
        push(value){
            var node = createNode(value);
            if(node.next == null){
                
                this.head = null;
                this.tail = null;
                this.length = 0;
            }
        },
        pop(){

        },
        get(){

        },
        delete(){

        },
        isEmpty(){
            return this.length === 0;
        }
    }
    // ** prop 
    //head
    //tail
    // length
    // ** methods
    // push
    // pop
    // delete
    // isEmpty 

}