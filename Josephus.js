class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    
    Joseph(m,n){
        document.getElementById("table1").style.visibility="visible"
        document.getElementById("table1").style.border="20px outset rgb(156, 80, 17)";
        document.getElementById("table1").style.borderRadius="30px";

        let row = document.getElementById("table1").insertRow();
            let cell4= row.insertCell();
            let text4 = document.createTextNode("Sr. No");
            cell4.appendChild(text4);
            let cell5= row.insertCell();
            let text5 = document.createTextNode("Eleminated");
            cell5.appendChild(text5);
        let head1=new Node()
        head1.data=1
        this.head=head1
        head1.next=this.head
        let tempNode=this.head
        for(var i=2;i<=n;i++){
            let newNode=new Node()
            newNode.data=i
            newNode.next=this.head
            tempNode.next=newNode
            tempNode=tempNode.next
        }
        
         let ptr1=this.head
         let ptr2=this.head
        let count2=1
         while(ptr1.next!=ptr1){
            var count=1
            while(count<=m){
                ptr2=ptr1
                ptr1=ptr1.next
                count++
            }
            let row = document.getElementById("table1").insertRow();
            let cell2= row.insertCell();
            let text2 = document.createTextNode(count2);
            cell2.appendChild(text2);
            let cell1= row.insertCell();
            let text1 = document.createTextNode(ptr1.data);
            cell1.appendChild(text1);
            //document.write(ptr1.data)
            ptr2.next=ptr1.next
            ptr1=ptr2.next
            count2++
         }
          document.getElementById("answer").innerHTML="Saved Number: "+ptr1.data+"";
    
         document.querySelector('#table1').scrollIntoView({ 
            behavior: 'smooth' 
        });
         //alert(4)
         //document.write(ptr1.data) 
    }
    append(data){
        let newNode=new Node(data)
        let tempNode=this.head
        if(this.head==null){
            newNode.next=newNode
            this.head=newNode
        }
        else{
            while(tempNode.next!=this.head){
                tempNode=tempNode.next
            }
            tempNode.next=newNode
            newNode.next=this.head
        }
    }

}

function calculate(){
    document.getElementById("table1").innerHTML=''
    let valueK=parseInt(document.getElementById("inputK").value)
    let valueN=parseInt(document.getElementById("inputN").value)
    let l= new LinkedList();

    l.Joseph(valueK,valueN)      
}