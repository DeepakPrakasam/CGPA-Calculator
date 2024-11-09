var row; var col; var col1; var col2; var tb; var cn="";
var gpapoint=[]; var cgpapoint=[]; var gpacredit=[]; var cgpacredit=[]; var sum=[];

function addsem()
{
    var semnum=document.getElementById("semnumid1");
    
    if(semnum.value<1||semnum.value>10)
    {
        window.alert("Semester number should be between 1-10");
    }
    else
    {
        tb = document.getElementById("tb1");
        row=tb.insertRow();
        col1=row.insertCell(0);
        col1.innerHTML="Semester : "+semnum.value;
        col=row.insertCell(1);
        col.innerHTML="";
        col2=row.insertCell(2);
        
    }
}

function addcourse()
{
    var cname = document.getElementById("cnid").value;
    var gd = parseInt(document.getElementById("gid").value);
    var crp = parseInt(document.getElementById("crid").value);
    
    if(cn.includes(cname))
    {
        window.alert("Enter correct course name as this name already exist");
    }

    else if (!/^[0-9]{2}[a-zA-Z]{3}[0-9]{2}$/.test(cname)) 
    {
        window.alert("Invalid course-name format, the correct format is 22CST33");
    }
    else
    {
        cn+=cname;
        gpapoint.push(gd); cgpapoint.push(gd);
        gpacredit.push(crp); cgpacredit.push(crp);
        switch(gd)
        {
            case 10:col.innerHTML+="<div>"+cname+" - "+" O "+"</div>";
            break;

            case 9:col.innerHTML+="<div>"+cname+" - "+" A+ "+"</div>";
            break;

            case 8:col.innerHTML+="<div>"+cname+" - "+" A "+"</div>";
            break;

            case 7:col.innerHTML+="<div>"+cname+" - "+" B+ "+"</div>";
            break;

            case 6:col.innerHTML+="<div>"+cname+" - "+" B "+"</div>";
            break;

            case 5:col.innerHTML+="<div>"+cname+" - "+" C "+"</div>";
            break;

            case 0:col.innerHTML+="<div>"+cname+" - "+" SC "+"</div>";
            break;

            case -1:col.innerHTML+="<div>"+cname+" - "+" U "+"</div>";
            break;

            case -2:col.innerHTML+="<div>"+cname+" - "+" AB "+"</div>";
            break;
        }
        
    }
}

function gpa()
{

    let sumpoint=0; sum=0;
    
    for(i=0;i<gpacredit.length;i++)
    {
        sumpoint+=gpacredit[i]*gpapoint[i];
        sum+=gpacredit[i];
    }

    col2.innerHTML=(sumpoint/sum).toFixed(2);
    gpacredit=[]; gpapoint=[];
}

function cgpa()
{
    let sumpoint=0; sum=0;

    let cgpa=document.getElementById("h1id");

    for(i=0;i<cgpacredit.length;i++)
    {
        sumpoint+=cgpacredit[i]*cgpapoint[i];
        sum+=cgpacredit[i];
    }

    cgpa.innerHTML="Your Cgpa is "+(sumpoint/sum).toFixed(2)+" Thank  You  Visit  Again.";
}
