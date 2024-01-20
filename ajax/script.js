function getdata(){
    console.log("Button clicked")
    // step1: create an xhr object
    var xhr=new XMLHttpRequest();
    console.log("unsent",xhr.readyState);

    // step2: request specification
    // xhr.open("get","input.txt",true);part1
    // xhr.open("get","data.json",true);part2
    xhr.open("get","https://jsonplaceholder.typicode.com/users",true)
    console.log("open",xhr.readyState);

    // step3: sending the request
    xhr.send();

    // step4: create an event listener
    xhr.onreadystatechange=function(){
        console.log("done",xhr.readyState);
        if(xhr.readyState==4 && xhr.status==200){
            // var data=this.responseText;part1
            var data=JSON.parse(this.responseText);
            console.log(data);
            var output=`<tr>
            <th>Name</th><th>Email</th>
            </tr>`
            for(let i=0;i<data.length;i++){
                // output +=`<ul><li>${data[i].name}</li></ul>` 
                output +=`
                
                <tr>
                <td>${data[i].name}</td><td>${data[i].email}</td>
                </tr>`
            }
            // document.getElementById("s").innerHTML=output;
            document.getElementById("tb").innerHTML=output;
        }
    }
}