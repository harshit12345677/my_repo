var help3 = /** @class */ (function () {
    function help3(id) {
        this.idx = id;
    }
    help3.prototype.MyEdit2 = function () {
        var val = document.getElementById(this.idx + "T").value;
        document.getElementById(this.idx + "X").innerText = val;
        document.getElementById(this.idx + "X").style.display = 'block';
        document.getElementById(this.idx + "T").style.display = 'none';
        document.getElementById(this.idx + "B").style.display = 'none';
    };
    return help3;
}());
var help2 = /** @class */ (function () {
    function help2(id) {
        this.idx = id;
    }
    help2.prototype.MyDelete = function () {
        var str1 = this.idx[0];
        document.getElementById("First" + str1 + "X").innerHTML = "";
        document.getElementById("Middle" + str1 + "X").innerHTML = "";
        document.getElementById("Last" + str1 + "X").innerHTML = "";
        document.getElementById("Email" + str1 + "X").innerHTML = "";
        document.getElementById("PhoneNo" + str1 + "X").innerHTML = "";
        document.getElementById("Role" + str1 + "X").innerHTML = "";
        document.getElementById("Address" + str1 + "X").innerHTML = "";
    };
    return help2;
}());
var help = /** @class */ (function () {
    function help(id) {
        this.idx = id;
    }
    help.prototype.MyEdit = function () {
        var str1 = this.idx.concat("B");
        var str2 = this.idx.concat("BB");
        var str3 = this.idx.concat("BBB");
        document.getElementById(str2).style.display = 'block';
        document.getElementById(str3).style.display = 'block';
        document.getElementById(this.idx).style.display = 'none';
        document.getElementById(str1).style.display = 'none';
        //document.getElementById("First1B").style.display ='block';
        //document.getElementById(str2).style.display='block';
        var str4 = this.idx[0];
        //document.write("First" + str4 + "B");
        document.getElementById("First" + str4 + "T").style.display = 'block';
        document.getElementById("First" + str4 + "B").style.display = 'block';
        document.getElementById("First" + str4 + "X").style.display = 'none';
        document.getElementById("Middle" + str4 + "T").style.display = 'block';
        document.getElementById("Middle" + str4 + "B").style.display = 'block';
        document.getElementById("Middle" + str4 + "X").style.display = 'none';
        document.getElementById("Last" + str4 + "T").style.display = 'block';
        document.getElementById("Last" + str4 + "B").style.display = 'block';
        document.getElementById("Last" + str4 + "X").style.display = 'none';
        document.getElementById("Email" + str4 + "T").style.display = 'block';
        document.getElementById("Email" + str4 + "B").style.display = 'block';
        document.getElementById("Email" + str4 + "X").style.display = 'none';
        document.getElementById("PhoneNo" + str4 + "T").style.display = 'block';
        document.getElementById("PhoneNo" + str4 + "B").style.display = 'block';
        document.getElementById("PhoneNo" + str4 + "X").style.display = 'none';
        document.getElementById("Role" + str4 + "T").style.display = 'block';
        document.getElementById("Role" + str4 + "B").style.display = 'block';
        document.getElementById("Role" + str4 + "X").style.display = 'none';
        document.getElementById("Address" + str4 + "T").style.display = 'block';
        document.getElementById("Address" + str4 + "B").style.display = 'block';
        document.getElementById("Address" + str4 + "X").style.display = 'none';
    };
    return help;
}());
/*
myFunc : void;
    myFunc2 : void;
    Edit : void;
    cancel: void;
    save : void;
    Edit2 : void;
    Delete : void
*/
var Role;
(function (Role) {
    Role[Role["Harshit"] = 0] = "Harshit";
    Role[Role["Smaksh"] = 1] = "Smaksh";
    Role[Role["Vansh"] = 2] = "Vansh";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(F, M, L, E, P, R, A) {
        this.FirstName = F;
        this.MiddleName = M;
        this.LastName = L;
        this.Email = E;
        this.PhoneNo = P;
        this.Role = R;
        this.Address = A;
    }
    return User;
}());
var var1 = new User("Harshit", "xyz", "Mittal", "pqr", 1234567890, "pqr", "shd");
var var2 = new User("Smaksh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var var3 = new User("Vansh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var myvar1 = new User("Harshit", "xyz", "Mittal", "pqr", 1234567890, "pqr", "shd");
var myvar2 = new User("Smaksh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var myvar3 = new User("Vansh", "xyz", "Goyal", "pqr", 1234567890, "pqr", "shd");
var p = new Array();
p.push(var1);
p.push(var2);
p.push(var3);
console.log(p[0]);
var x = new Array();
x.push(myvar1);
x.push(myvar2);
x.push(myvar3);
var cnt = 0;
function myFunc() {
    if (cnt === 0) {
        document.getElementById("First0").innerHTML = "First Name";
        document.getElementById("Middle0").innerHTML = "Middle Name";
        document.getElementById("Last0").innerHTML = "Last Name";
        document.getElementById("Email0").innerHTML = "Email";
        document.getElementById("PhoneNo0").innerHTML = "PhoneNo";
        document.getElementById("Role0").innerHTML = "Role";
        document.getElementById("Address0").innerHTML = "Address";
        document.getElementById("0").innerHTML = "Modification";
        document.getElementById("First1X").innerText = p[0].FirstName;
        document.getElementById("Middle1X").innerText = p[0].MiddleName;
        document.getElementById("Last1X").innerHTML = p[0].LastName;
        document.getElementById("Email1X").innerHTML = p[0].Email;
        document.getElementById("PhoneNo1X").innerText = p[0].PhoneNo.toString();
        document.getElementById("Role1X").innerText = p[0].Role;
        document.getElementById("Address1X").innerHTML = p[0].Address;
        document.getElementById("1B").style.display = 'block';
        document.getElementById("1BB").style.display = 'block';
        //document.getElementById("1BBB").style.display='block';
        document.getElementById("1B").innerHTML = "Edit";
        document.getElementById("1BB").innerHTML = "Delete";
        document.getElementById("1BBB").innerHTML = "Save";
        document.getElementById("1BBBB").innerHTML = "Cancel";
        //document.getElementById("First1B").innerHTML = "pqr";
        document.getElementById("First2X").innerHTML = p[1].FirstName;
        document.getElementById("Middle2X").innerHTML = p[1].MiddleName;
        document.getElementById("Last2X").innerHTML = p[1].LastName;
        document.getElementById("Email2X").innerHTML = p[1].Email;
        document.getElementById("PhoneNo2X").innerText = p[1].PhoneNo.toString();
        document.getElementById("Role2X").innerText = p[1].Role;
        document.getElementById("Address2X").innerHTML = p[1].Address;
        document.getElementById("2B").style.display = 'block';
        document.getElementById("2BB").style.display = 'block';
        //document.getElementById("2BBB").style.display='block';
        document.getElementById("2B").innerHTML = "Edit";
        document.getElementById("2BB").innerHTML = "Delete";
        document.getElementById("2BBB").innerHTML = "Save";
        document.getElementById("2BBBB").innerHTML = "Cancel";
        document.getElementById("First3X").innerHTML = p[2].FirstName;
        document.getElementById("Middle3X").innerHTML = p[2].MiddleName;
        document.getElementById("Last3X").innerHTML = p[2].LastName;
        document.getElementById("Email3X").innerHTML = p[2].Email;
        document.getElementById("PhoneNo3X").innerText = p[2].PhoneNo.toString();
        document.getElementById("Role3X").innerText = p[2].Role;
        document.getElementById("Address3X").innerHTML = p[2].Address;
        document.getElementById("3B").style.display = 'block';
        document.getElementById("3BB").style.display = 'block';
        //document.getElementById("3BBB").style.display='block';
        document.getElementById("3B").innerHTML = "Edit";
        document.getElementById("3BB").innerHTML = "Delete";
        document.getElementById("3BBB").innerHTML = "Save";
        document.getElementById("3BBBB").innerHTML = "Cancel";
    }
    else {
        document.getElementById("First1X").innerText = x[0].FirstName;
        document.getElementById("Middle1X").innerText = x[0].MiddleName;
        document.getElementById("Last1X").innerHTML = x[0].LastName;
        document.getElementById("Email1X").innerHTML = x[0].Email;
        document.getElementById("PhoneNo1X").innerText = x[0].PhoneNo.toString();
        document.getElementById("Role1X").innerText = x[0].Role;
        document.getElementById("Address1X").innerHTML = x[0].Address;
        //document.getElementById("First1B").innerHTML = "pqr";
        document.getElementById("First2X").innerHTML = x[1].FirstName;
        document.getElementById("Middle2X").innerHTML = x[1].MiddleName;
        document.getElementById("Last2X").innerHTML = x[1].LastName;
        document.getElementById("Email2X").innerHTML = x[1].Email;
        document.getElementById("PhoneNo2X").innerText = x[1].PhoneNo.toString();
        document.getElementById("Role2X").innerText = x[1].Role;
        document.getElementById("Address2X").innerHTML = x[1].Address;
        document.getElementById("First3X").innerHTML = x[2].FirstName;
        document.getElementById("Middle3X").innerHTML = x[2].MiddleName;
        document.getElementById("Last3X").innerHTML = x[2].LastName;
        document.getElementById("Email3X").innerHTML = x[2].Email;
        document.getElementById("PhoneNo3X").innerText = x[2].PhoneNo.toString();
        document.getElementById("Role3X").innerText = x[2].Role;
        document.getElementById("Address3X").innerHTML = x[2].Address;
        document.getElementById("First1T").style.display = 'none';
        document.getElementById("First1B").style.display = 'none';
        document.getElementById("First2T").style.display = 'none';
        document.getElementById("First2B").style.display = 'none';
        document.getElementById("First3T").style.display = 'none';
        document.getElementById("First3B").style.display = 'none';
        document.getElementById("Middle1T").style.display = 'none';
        document.getElementById("Middle1B").style.display = 'none';
        document.getElementById("Middle2T").style.display = 'none';
        document.getElementById("Middle2B").style.display = 'none';
        document.getElementById("Middle3T").style.display = 'none';
        document.getElementById("Middle3B").style.display = 'none';
        document.getElementById("Last1T").style.display = 'none';
        document.getElementById("Last1B").style.display = 'none';
        document.getElementById("Last2T").style.display = 'none';
        document.getElementById("Last2B").style.display = 'none';
        document.getElementById("Last3T").style.display = 'none';
        document.getElementById("Last3B").style.display = 'none';
        document.getElementById("Email1T").style.display = 'none';
        document.getElementById("Email1B").style.display = 'none';
        document.getElementById("Email2T").style.display = 'none';
        document.getElementById("Email2B").style.display = 'none';
        document.getElementById("Email3T").style.display = 'none';
        document.getElementById("Email3B").style.display = 'none';
        document.getElementById("PhoneNo1T").style.display = 'none';
        document.getElementById("PhoneNo1B").style.display = 'none';
        document.getElementById("PhoneNo2T").style.display = 'none';
        document.getElementById("PhoneNo2B").style.display = 'none';
        document.getElementById("PhoneNo3T").style.display = 'none';
        document.getElementById("PhoneNo3B").style.display = 'none';
        document.getElementById("Role1T").style.display = 'none';
        document.getElementById("Role1B").style.display = 'none';
        document.getElementById("Role2T").style.display = 'none';
        document.getElementById("Role2B").style.display = 'none';
        document.getElementById("Role3T").style.display = 'none';
        document.getElementById("Role3B").style.display = 'none';
        document.getElementById("Address1T").style.display = 'none';
        document.getElementById("Address1B").style.display = 'none';
        document.getElementById("Address2T").style.display = 'none';
        document.getElementById("Address2B").style.display = 'none';
        document.getElementById("Address3T").style.display = 'none';
        document.getElementById("Address3B").style.display = 'none';
    }
    cnt++;
}
document.getElementById("1B").style.display = 'none';
document.getElementById("1BB").style.display = 'none';
document.getElementById("2B").style.display = 'none';
document.getElementById("2BB").style.display = 'none';
document.getElementById("3B").style.display = 'none';
document.getElementById("3BB").style.display = 'none';
document.getElementById("1BBB").style.display = 'none';
document.getElementById("2BBB").style.display = 'none';
document.getElementById("3BBB").style.display = 'none';
document.getElementById("1BBBB").style.display = 'none';
document.getElementById("2BBBB").style.display = 'none';
document.getElementById("3BBBB").style.display = 'none';
//document.write(document.getElementById("First1T"));
document.getElementById("First1T").style.display = 'none';
document.getElementById("First1B").style.display = 'none';
document.getElementById("Middle1T").style.display = 'none';
document.getElementById("Middle1B").style.display = 'none';
document.getElementById("Last1T").style.display = 'none';
document.getElementById("Last1B").style.display = 'none';
document.getElementById("Email1T").style.display = 'none';
document.getElementById("Email1B").style.display = 'none';
document.getElementById("PhoneNo1T").style.display = 'none';
document.getElementById("PhoneNo1B").style.display = 'none';
document.getElementById("Role1T").style.display = 'none';
document.getElementById("Role1B").style.display = 'none';
document.getElementById("Address1T").style.display = 'none';
document.getElementById("Address1B").style.display = 'none';
document.getElementById("First2T").style.display = 'none';
document.getElementById("First2B").style.display = 'none';
document.getElementById("Middle2T").style.display = 'none';
document.getElementById("Middle2B").style.display = 'none';
document.getElementById("Last2T").style.display = 'none';
document.getElementById("Last2B").style.display = 'none';
document.getElementById("Email2T").style.display = 'none';
document.getElementById("Email2B").style.display = 'none';
document.getElementById("PhoneNo2T").style.display = 'none';
document.getElementById("PhoneNo2B").style.display = 'none';
document.getElementById("Role2T").style.display = 'none';
document.getElementById("Role2B").style.display = 'none';
document.getElementById("Address2T").style.display = 'none';
document.getElementById("Address2B").style.display = 'none';
document.getElementById("First3T").style.display = 'none';
document.getElementById("First3B").style.display = 'none';
document.getElementById("Middle3T").style.display = 'none';
document.getElementById("Middle3B").style.display = 'none';
document.getElementById("Last3T").style.display = 'none';
document.getElementById("Last3B").style.display = 'none';
document.getElementById("Email3T").style.display = 'none';
document.getElementById("Email3B").style.display = 'none';
document.getElementById("PhoneNo3T").style.display = 'none';
document.getElementById("PhoneNo3B").style.display = 'none';
document.getElementById("Role3T").style.display = 'none';
document.getElementById("Role3B").style.display = 'none';
document.getElementById("Address3T").style.display = 'none';
document.getElementById("Address3B").style.display = 'none';
function myFunc2() {
    document.getElementById("btn").innerHTML = "Refresh Data";
}
function Edit(idx) {
    //document.write(id);
    /*let str1 = idx.concat("B");
    let str2 = idx.concat("BB");
    let str3 = idx.concat("BBB");
    
    document.getElementById(str2)!.style.display='block';
    document.getElementById(str3)!.style.display='block';
    document.getElementById(idx)!.style.display='none';
    document.getElementById(str1)!.style.display='none';
    //document.getElementById("First1B").style.display ='block';
    //document.getElementById(str2).style.display='block';
    var str4:string  = idx[0];
    
    //document.write("First" + str4 + "B");
    
    document.getElementById("First" + str4 + "T")!.style.display = 'block';
    document.getElementById("First" + str4 + "B")!.style.display = 'block';
    document.getElementById("First" + str4 + "X")!.style.display = 'none';
    
    document.getElementById("Middle" + str4 + "T")!.style.display = 'block';
    document.getElementById("Middle" + str4 + "B")!.style.display = 'block';
    document.getElementById("Middle" + str4 + "X")!.style.display = 'none';
    
    document.getElementById("Last" + str4 + "T")!.style.display = 'block';
    document.getElementById("Last" + str4 + "B")!.style.display = 'block';
    document.getElementById("Last" + str4 + "X")!.style.display = 'none';
    
    document.getElementById("Email" + str4 + "T")!.style.display = 'block';
    document.getElementById("Email" + str4 + "B")!.style.display = 'block';
    document.getElementById("Email" + str4 + "X")!.style.display = 'none';
    
    document.getElementById("PhoneNo" + str4 + "T")!.style.display = 'block';
    document.getElementById("PhoneNo" + str4 + "B")!.style.display = 'block';
    document.getElementById("PhoneNo" + str4 + "X")!.style.display = 'none';
    
    document.getElementById("Role" + str4 + "T")!.style.display = 'block';
    document.getElementById("Role" + str4 + "B")!.style.display = 'block';
    document.getElementById("Role" + str4 + "X")!.style.display = 'none';
    
    document.getElementById("Address" + str4 + "T")!.style.display = 'block';
    document.getElementById("Address" + str4 + "B")!.style.display = 'block';
    document.getElementById("Address" + str4 + "X")!.style.display = 'none';
    //document.getElementById("First1T").innerHTML = "xyz";
    // document.getElementById("First1T").style.display ='none';
    // document.write(document.getElementById("First1T"));
    
    
    */
    var myhelp = new help(idx);
    myhelp.MyEdit();
}
//document.write(document.getElementById("First" + str1));
function Delete(idx) {
    //document.write(document.getElementById("First" + str1));
    var myhelp = new help2(idx);
    myhelp.MyDelete();
}
function Edit2(idx) {
    var myhelp = new help3(idx);
    myhelp.MyEdit2();
}
function save(idx) {
    var ch = +idx.slice(-1);
    p[ch - 1].FirstName = document.getElementById("First" + ch + "X").innerText;
    p[ch - 1].MiddleName = document.getElementById("Middle" + ch + "X").innerText;
    p[ch - 1].LastName = document.getElementById("Last" + ch + "X").innerText;
    p[ch - 1].Email = document.getElementById("Email" + ch + "X").innerText;
    p[ch - 1].PhoneNo = +document.getElementById("PhoneNo" + ch + "X").innerText;
    p[ch - 1].Role = document.getElementById("Role" + ch + "X").innerText;
    p[ch - 1].Address = document.getElementById("Address" + ch + "X").innerText;
    document.getElementById("First" + idx + "X").style.display = 'block';
    document.getElementById("First" + idx + "T").style.display = 'none';
    document.getElementById("First" + idx + "B").style.display = 'none';
    document.getElementById("Middle" + idx + "X").style.display = 'block';
    document.getElementById("Middle" + idx + "T").style.display = 'none';
    document.getElementById("Middle" + idx + "B").style.display = 'none';
    document.getElementById("Last" + idx + "X").style.display = 'block';
    document.getElementById("Last" + idx + "T").style.display = 'none';
    document.getElementById("Last" + idx + "B").style.display = 'none';
    document.getElementById("Email" + idx + "X").style.display = 'block';
    document.getElementById("Email" + idx + "T").style.display = 'none';
    document.getElementById("Email" + idx + "B").style.display = 'none';
    document.getElementById("PhoneNo" + idx + "X").style.display = 'block';
    document.getElementById("PhoneNo" + idx + "T").style.display = 'none';
    document.getElementById("PhoneNo" + idx + "B").style.display = 'none';
    document.getElementById("Role" + idx + "X").style.display = 'block';
    document.getElementById("Role" + idx + "T").style.display = 'none';
    document.getElementById("Role" + idx + "B").style.display = 'none';
    document.getElementById("Address" + idx + "X").style.display = 'block';
    document.getElementById("Address" + idx + "T").style.display = 'none';
    document.getElementById("Address" + idx + "B").style.display = 'none';
    document.getElementById(ch + "B").style.display = 'block';
    document.getElementById(ch + "BB").style.display = 'block';
    document.getElementById(ch + "BBB").style.display = 'none';
    document.getElementById(ch + "BBBB").style.display = 'none';
    //document.write()
}
function cancel(idx) {
    var ch = +idx.slice(-1);
    document.getElementById("First" + ch + "X").innerText = p[ch - 1].FirstName;
    document.getElementById("Middle" + ch + "X").innerText = p[ch - 1].MiddleName;
    document.getElementById("Last" + ch + "X").innerText = p[ch - 1].LastName;
    document.getElementById("Email" + ch + "X").innerText = p[ch - 1].Email;
    document.getElementById("PhoneNo" + ch + "X").innerText = p[ch - 1].PhoneNo.toString();
    document.getElementById("Role" + ch + "X").innerText = p[ch - 1].Role;
    document.getElementById("Address" + ch + "X").innerText = p[ch - 1].Address;
    document.getElementById("First" + idx + "X").style.display = 'block';
    document.getElementById("First" + idx + "T").style.display = 'none';
    document.getElementById("First" + idx + "B").style.display = 'none';
    document.getElementById("Middle" + idx + "X").style.display = 'block';
    document.getElementById("Middle" + idx + "T").style.display = 'none';
    document.getElementById("Middle" + idx + "B").style.display = 'none';
    document.getElementById("Last" + idx + "X").style.display = 'block';
    document.getElementById("Last" + idx + "T").style.display = 'none';
    document.getElementById("Last" + idx + "B").style.display = 'none';
    document.getElementById("Email" + idx + "X").style.display = 'block';
    document.getElementById("Email" + idx + "T").style.display = 'none';
    document.getElementById("Email" + idx + "B").style.display = 'none';
    document.getElementById("PhoneNo" + idx + "X").style.display = 'block';
    document.getElementById("PhoneNo" + idx + "T").style.display = 'none';
    document.getElementById("PhoneNo" + idx + "B").style.display = 'none';
    document.getElementById("Role" + idx + "X").style.display = 'block';
    document.getElementById("Role" + idx + "T").style.display = 'none';
    document.getElementById("Role" + idx + "B").style.display = 'none';
    document.getElementById("Address" + idx + "X").style.display = 'block';
    document.getElementById("Address" + idx + "T").style.display = 'none';
    document.getElementById("Address" + idx + "B").style.display = 'none';
    document.getElementById(ch + "B").style.display = 'block';
    document.getElementById(ch + "BB").style.display = 'block';
    document.getElementById(ch + "BBB").style.display = 'none';
    document.getElementById(ch + "BBBB").style.display = 'none';
}
document.getElementById("btn").addEventListener("click", myFunc2);
//document.getElementById("1B").addEventListener("click", Edit2);
//document.getElementById("1B").addEventListener("click", Edit("1B"));
//document.getElementById("1BB").addEventListener("click", Delete("1BB"));*/
