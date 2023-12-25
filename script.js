const form1=document.querySelector("form");
            const tbody1=document.querySelector("tbody");
            function addData(e){ 
                    e.preventDefault();
                    var fname=document.getElementById("first-name").value; 
                    var lname=document.getElementById("last-name").value; 
                    var address=document.getElementById("address").value; 
                    var pin=document.getElementById("pincode").value; 
                    var gender = document.querySelector('input[name = gender]:checked').value;
                    var state=document.getElementById("state").value; 
                    var country=document.getElementById("country").value; 
                    var food=[];
                    var markedCheckbox = document.getElementsByName('food');  
                    for (var checkbox of markedCheckbox) {  
                        if (checkbox.checked)  
                        food.push((checkbox.value + ' '));  
                        console.log(food);
                    }  

                    tbody1.innerHTML+=`
                        <tr>
                            <td>${fname}</td>
                            <td>${lname}</td>
                            <td>${address}</td>
                            <td>${pin}</td>
                            <td>${gender}</td>
                            <td>${food[0]},
                                ${food[1]}
                            </td>
                            <td>${state}</td>
                            <td>${country}</td>
                        </tr>
                    `;
            }
            form1.addEventListener("submit",addData);
