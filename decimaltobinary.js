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
    decimalToBinary(number){
        
        document.getElementById("table1").style.visibility="visible"
        document.getElementById("table1").style.border="20px ridge rgb(156, 80, 17)";
        document.getElementById("table1").style.borderRadius="30px";
        
        var remainder
        var count=1
        var number2=number
        let array=[]
        
        let row = document.getElementById("table1").insertRow();
            
            let cell7= row.insertCell();
            let text7 = document.createTextNode("Divisor");
            cell7.appendChild(text7);

            let cell8= row.insertCell();
            let text8 = document.createTextNode("Dividend");
            cell8.appendChild(text8);
                    
            let cell9= row.insertCell();
            let text9 = document.createTextNode("Remainder");
            cell9.appendChild(text9);
        
        while(parseInt(number)!=0){
            let row = document.getElementById("table1").insertRow();     
            if(number==number2){
                    let cell1= row.insertCell();
                    let text1 = document.createTextNode("2");
                    cell1.appendChild(text1);

                    let cell2= row.insertCell();
                    let text2 = document.createTextNode(number);
                    cell2.appendChild(text2);
                    
                    let cell3= row.insertCell();
                    let text3 = document.createTextNode("");
                    cell3.appendChild(text3);
            }
            else{
                let cell4= row.insertCell();
                let text4 = document.createTextNode("2");
                cell4.appendChild(text4);
                let cell5= row.insertCell();
                let text5 = document.createTextNode(number);
                cell5.appendChild(text5);
                let cell6= row.insertCell();
                let text6 = document.createTextNode(remainder);
                cell6.appendChild(text6);
            }
            

            remainder=parseInt(number%2)
            this.push(remainder)
            number=parseInt(number/2)
        }
        
        while(!this.isEmpty()){
            //alert()
            array.push(this.peek())
            this.pop()
        }
        document.getElementById("answer").innerHTML="Answer: "+array.join(" ")+"";
        document.querySelector('#table1').scrollIntoView({ 
                       behavior: 'smooth' 
                   });
        // alert(1)
    } 
}
    

function calculate(){
    document.getElementById("table1").innerHTML=' '
    let s=new Stack()
    let num=document.getElementById("input").value
    s.decimalToBinary(num)
    
    
           
}
   