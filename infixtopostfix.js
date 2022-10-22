function Prefix(){
    document.getElementById("postfix").textContent='Prefix'

}
function Postfix(){
// let radioPre=document.getElementById("radPost")
// if(radioPre.checked==true){
    document.getElementById("postfix").textContent='Postfix'
// }
}


class Stack{
stackArray=[]
constructor(){
    this.top=-1
}
push(x){
        this.top=this.top+1
        this.stackArray[this.top]=x
}
pop(){
    
    this.top=this.top-1
}
isEmpty(){
    return this.top==-1
}
peek(){
    return this.stackArray[this.top]
}
Display(){
    
    for(var i=0;i<=this.top;i++){
        if(i==this.top){
            document.write(this.stackArray[i],"---->NULL")
        }
        else
        document.write(this.stackArray[i],"---->")
    }
}
Operataor(op){
if(op=='+' || op=='-' || op=='*' || op=='/' || op=='^' || op=='('){
        return true;
    }
}
Priority(op){
    if(op=='+' || op=='-'){
        return 1;
    }
    if(op=='*' || op=='/'){
        return 2;
    }
    if(op=='^'){
        return 3;
    }
    else
        return 0;
}
IsOperand(op){
    if(op>='A' && op<='Z'){
        return true
    }
    else if(op>='a' && op<='z'){
        return true
    }
    else if(op>='0' && op<='9'){
        return true
    }
    else
        return false
}

infixToPostfix(infix){
            document.getElementById("table1").style.visibility="visible";
            document.getElementById("table1").style.border="20px ridge rgb(156, 80, 17)";
            document.getElementById("table1").style.borderRadius="30px";
            // document.getElementById("table1").style.visibility="visible"
            let row = document.getElementById("table1").insertRow();
            let cell4= row.insertCell();
            let text4 = document.createTextNode("Sr. No");
            cell4.appendChild(text4);
            let cell5= row.insertCell();
            let text5 = document.createTextNode("Expression");
            cell5.appendChild(text5);
            let cell6= row.insertCell();
            let text6 = document.createTextNode("Postfix");
            cell6.appendChild(text6);
            let cell7= row.insertCell();
            let text7 = document.createTextNode("Stack");
            cell7.appendChild(text7);
            let postfix=[]
            let result=[]
            var j=0,x,k=0;
            for(var i=0;i<infix.length;i++){
                if(this.IsOperand(infix[i])){
                    postfix[j++]=infix[i]
                }
                else if(!this.isEmpty() && infix[i]=='('){
                    this.push(infix[i])
                }
                else if(infix[i]==')'){
                    while(this.stackArray[this.top]!='('){
                        postfix[j++]=this.stackArray[this.top]
                        this.pop()
                        delete this.stackArray[this.top+1]
                    }
                    if(this.stackArray[this.top]=='('){
                        this.pop()
                        delete this.stackArray[this.top+1]
                    }
                }
                else{
                    while(!this.isEmpty() && (this.Priority(infix[i])<=this.Priority(this.stackArray[this.top]))){
                        postfix[j++]=this.stackArray[this.top]
                        this.pop()
                        delete this.stackArray[this.top+1]
                    }
                    this.push(infix[i])
                }
                let output=postfix.map(function (el){
                    return el;
                });
                let output2=this.stackArray.map(function (el){
                    return el;
                });
                    let row = document.getElementById("table1").insertRow();
                    let cell3= row.insertCell();
                    let text3 = document.createTextNode(k);
                    cell3.appendChild(text3);
                    let cell0= row.insertCell();
                    let text0 = document.createTextNode(infix[i]);
                    cell0.appendChild(text0);
                    let cell1= row.insertCell();
                    let text1 = document.createTextNode(output.join(''));
                    cell1.appendChild(text1);
                    let cell4= row.insertCell();
                    let text4 = document.createTextNode(output2.join(''));
                    cell4.appendChild(text4);
                    output.length=0
                    output2.length=0
                    k=k+1
            }                
            while(!this.isEmpty()){
                postfix[j++]=this.stackArray[this.top]
                this.pop()
                delete this.stackArray[this.top+1]
                let output=postfix.map(function (el){
                    return el;
                });
                let output2=this.stackArray.map(function (el){
                    return el;
                });
                    let row = document.getElementById("table1").insertRow();
                    let cell3= row.insertCell();
                    let text3 = document.createTextNode(k);
                    cell3.appendChild(text3);
                    let cell0= row.insertCell();
                    let text0 = document.createTextNode("");
                    cell0.appendChild(text0);
                    let cell1= row.insertCell();
                    let text1 = document.createTextNode(output.join(''));
                    cell1.appendChild(text1);
                    let cell4= row.insertCell();
                    let text4 = document.createTextNode(output2.join(''));
                    cell4.appendChild(text4);
                    output.length=0
                    output2.length=0
                    k=k+1
                }
                document.getElementById("answer").innerHTML="Answer: "+postfix.join("")+"";
                document.querySelector('#table1').scrollIntoView({ 
                    behavior: 'smooth' 
                });
                console.log(output)
 }

 infixToPrefix(infix1){
           
           //document.write(infix1.reverse())
           document.getElementById("table1").style.visibility="visible";
           document.getElementById("table1").style.border="30px ridge rgb(156, 80, 17)";
           document.getElementById("table1").style.borderRadius="30px";
           // document.getElementById("table1").style.visibility="visible"
           let row = document.getElementById("table1").insertRow();
           let cell4= row.insertCell();
           let text4 = document.createTextNode("Sr. No");
           cell4.appendChild(text4);
           let cell5= row.insertCell();
           let text5 = document.createTextNode("Expression");
           cell5.appendChild(text5);
           let cell6= row.insertCell();
           let text6 = document.createTextNode("Prefix");
           cell6.appendChild(text6);
           let cell7= row.insertCell();
           let text7 = document.createTextNode("Stack");
           cell7.appendChild(text7);

           let infix=infix1.reverse()
           let postfix=[]
           let result=[]
           var j=0,x,k=0;
           for(var i=0;i<infix.length;i++){
               if(this.IsOperand(infix[i])){
                   postfix[j++]=infix[i]
               }
               else if(!this.isEmpty() && infix[i]==')'){
                   this.push(infix[i])
               }
               else if(infix[i]=='('){
                   while(this.stackArray[this.top]!=')'){
                       postfix[j++]=this.stackArray[this.top]
                       this.pop()
                       delete this.stackArray[this.top+1]
                   }
                   if(this.stackArray[this.top]==')'){
                       this.pop()
                       delete this.stackArray[this.top+1]
                   }
               }
               else{
                   while(!this.isEmpty() && (this.Priority(infix[i])<=this.Priority(this.stackArray[this.top]))){
                       postfix[j++]=this.stackArray[this.top]
                       this.pop()
                       delete this.stackArray[this.top+1]
                   }
                   this.push(infix[i])
               }
               let output=postfix.map(function (el){
                   return el;
               });
               let output2=this.stackArray.map(function (el){
                   return el;
               });
               let row = document.getElementById("table1").insertRow();
                   let cell3= row.insertCell();
                   let text3 = document.createTextNode(k);
                   cell3.appendChild(text3);
                   let cell0= row.insertCell();
                   let text0 = document.createTextNode(infix[i]);
                   cell0.appendChild(text0);
                   let cell1= row.insertCell();
                   let text1 = document.createTextNode(output.join(''));
                   cell1.appendChild(text1);
                   let cell4= row.insertCell();
                   let text4 = document.createTextNode(output2.join(''));
                   cell4.appendChild(text4);
                   output.length=0
                   output2.length=0
                   k=k+1   
           }                
           while(!this.isEmpty()){
               postfix[j++]=this.stackArray[this.top]
               this.pop()
               delete this.stackArray[this.top+1]
               let output=postfix.map(function (el){
                   return el;
               });
               let output2=this.stackArray.map(function (el){
                   return el;
               });
               let row = document.getElementById("table1").insertRow();
                   let cell3= row.insertCell();
                   let text3 = document.createTextNode(k);
                   cell3.appendChild(text3);
                   let cell0= row.insertCell();
                   let text0 = document.createTextNode("");
                   cell0.appendChild(text0);
                   let cell1= row.insertCell();
                   let text1 = document.createTextNode(output.join(''));
                   cell1.appendChild(text1);
                   let cell4= row.insertCell();
                   let text4 = document.createTextNode(output2.join(''));
                   cell4.appendChild(text4);
                   
                   
                   output.length=0
                   output2.length=0
                   k=k+1
               }
               document.getElementById("answer").innerHTML="Answer: "+postfix.reverse().join("")+"";
               document.querySelector('#table1').scrollIntoView({ 
                   behavior: 'smooth' 
               });
           
}
}


function calculate(){

let radioPost=document.getElementById("radPost")
let radioPre=document.getElementById("radPre")
if(radioPost.checked==true){
    document.getElementById("table1").innerHTML=''
    let s=new Stack()
    let value=document.getElementById("form1").children[2].value
    infix=Array.from(value)
    if(infix[0]==null){
        alert("Input an expression!!")
    }
    else{
        s.infixToPostfix(infix) 
    }
}
else{
     document.getElementById("table1").innerHTML=''
    let s=new Stack()
    let value=document.getElementById("form1").children[2].value
    infix=Array.from(value)
    if(infix[0]==null){
        alert("Input an expression!!")
    }
    else{
        s.infixToPrefix(infix) 
    }
}

       
}
