/**
 * Olay LIFO (son giren ilk cikar)
 * Eklenen eleman'da basa eklenecek
 * Silinecek eleman'da bastan cikarilacak
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class StackLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Listenin basina eleman ekler
  _push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    }
    ++this.length;
    return this;
  }

  // Listenin basindan eleman cikarir.
  _pop() {
    let temp = this.head;
    
    if(temp){
      let elm = temp.value;
      temp = temp.next;
      this.head = temp;

      this.length--;
      return elm;
    }

    return null;
  }

  // Listenin basindaki elemani doner 
  _peeks() {
    if (this.length === 0) throw new Error("Stack is Empty!");

    return this.head.value;
  }

  _toArray() {
    let arr = [];
    while (this.head) {
      arr.push(this.head.value);
      this.head = this.head.next;
    }

    return arr;
  }

  _isEmpty() {
    return this.length === 0;
  }

  _clear() {
    this.head = null;
    this.length = 0;
  }

  _size() {
    return this.length;
  }
}

const list = new StackLinkedList();
list._push(100);
list._push(200);
list._push(300);
list._push(400);
list._pop();

console.log(list);
