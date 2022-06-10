function validation(){
    const pat = {
        company: RegExp(""),
        fName: /^[A-Z][a-z]{2,32}$/gm,
        lName: /^[A-Z][a-z]{2,32}$/gm,
        mailRegex: /[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
    };
    function fNameValid(){
        var fNameValue = document.getElementById("fName").value;
        var fNameB = document.getElementById("fNameBorder");
        var invalid = document.getElementById("fNameInvalid");

        var case1 = /^[^A-Z\s][A-z]+/gm; var case1Error = document.getElementById("fNameCase1");
        var case2 = /[^A-z\s]+/gm; var case2Error = document.getElementById("fNameCase2");
        if (pat.fName.test(fNameValue)) {
            fNameB.setAttribute("class", "m-2 p-2 w-fit bg-indigo-500 rounded-xl");
            case1Error.setAttribute("class", "hidden");
            case2Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return true;
        }        
        else if(case1.test(fNameValue)){
            fNameB.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            case1Error.setAttribute("class", "inline text-red-400 mx-3");
            case2Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return false;
        }
        else if(case2.test(fNameValue)){
            fNameB.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            case2Error.setAttribute("class", "inline text-red-400 mx-3");
            case1Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return false;
        }
        else{
            fNameB.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            invalid.setAttribute("class", "inline text-red-400 mx-3");
            case1Error.setAttribute("class", "hidden");
            case2Error.setAttribute("class", "hidden");
        }
    }

    function lNameValid(){
        var lNameValue = document.getElementById("lName").value;
        var lNameB = document.getElementById("lNameBorder");
        var invalid = document.getElementById("lNameInvalid");

        var case1 = /^[^A-Z\s][A-z]+/gm; var case1Error = document.getElementById("lNameCase1");
        var case2 = /[^A-z\s]+/gm; var case2Error = document.getElementById("lNameCase2");
        if (pat.lName.test(lNameValue)) {
            lNameB.setAttribute("class", "m-2 p-2 w-fit bg-indigo-500 rounded-xl");
            case1Error.setAttribute("class", "hidden");
            case2Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return true;
        }        
        else if(case1.test(lNameValue)){
            lNameB.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            case1Error.setAttribute("class", "inline text-red-400 mx-3");
            case2Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return false;
        }
        else if(case2.test(lNameValue)){
            lNameB.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            case2Error.setAttribute("class", "inline text-red-400 mx-3");
            case1Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return false;
        }
        else{
            lNameB.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            invalid.setAttribute("class", "inline text-red-400 mx-3");
            case1Error.setAttribute("class", "hidden");
            case2Error.setAttribute("class", "hidden");
        }
    }
    function mailValid(){
        var mailValue = document.getElementById("mail").value;
        var mail = document.getElementById("MailBorder");
        var invalid = document.getElementById("mailInvalid");

        var Mailcase1 = /([A-Za-z0-9!$%^&*_+-={}~'?/.W¬`])([A-Za-z0-9])+\.\w{2,4}\b/; var case1Error = document.getElementById("mailCase1");
        var Mailcase2 = /([A-Za-z0-9!$%^&*_+-={}~'?/.W¬`])+@([A-Za-z0-9])+/; var case2Error = document.getElementById("mailCase2");

        if (pat.mailRegex.test(mailValue)) {
            mail.setAttribute("class", "m-2 p-2 w-fit bg-indigo-500 rounded-xl");
            invalid.setAttribute("class", "hidden");
            case1Error.setAttribute("class", "hidden");
            case2Error.setAttribute("class", "hidden");
            return true;
        }        
        else if(Mailcase1.test(mailValue)){
            mail.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            case1Error.setAttribute("class", "inline text-red-400 mx-3");
            case2Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return false;
        }
        else if(Mailcase2.test(mailValue)){
            mail.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            case2Error.setAttribute("class", "inline text-red-400 mx-3");
            case1Error.setAttribute("class", "hidden");
            invalid.setAttribute("class", "hidden");
            return false;
        }
        else {
            mail.setAttribute("class", "m-2 p-2 w-fit bg-rose-500 rounded-xl");
            invalid.setAttribute("class", "inline text-red-400 mx-3");
            case1Error.setAttribute("class", "hidden");
            case2Error.setAttribute("class", "hidden");
            return false;
        }
    }
fNameValid();
lNameValid();
mailValid();
}
