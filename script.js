var parallax = document.querySelector(".text-div");
var back = document.querySelector(".img-layers");
var imgBack = 400;
parallax.addEventListener("mousemove", e => {
    var x = e.clientX;
    var y = e.clientY;

    back.style.transform = `translate(${x /imgBack}%, ${y/imgBack}%)`
});

var card = document.querySelector(".profile-img");
card.addEventListener("click", function(e){
    card.classList.toggle("is-flipped");
})

var fName = document.getElementById("first_name");
var sName = document.getElementById("second_name");
var email_user = document.getElementById("email_user");
var password_user = document.getElementById("password_user");
var password_checked = document.getElementById("password_check");
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
document.getElementById("submit_btn").onclick = function(){
    if(fName.value == "" && sName.value == "" && email_user.value == "" && password_user.value == ""){
        alert("Please provide information into the required fields");
    }
    if(!email_user.value.match(mailformat)){
        alert("Please provide another email");
    }
    validatePassword(password_user.value);
    if(password_user.value !== password_checked.value){
        alert("Passwords do not match");
    }
    var data = {
        first_name: fName.value,
        last_name: sName.value,
        email: email_user.value,
        password: password_user.value
    };
    var json = JSON.stringify(data);
    localStorage.setItem('data', json);
    console.log(JSON.parse(json));
}
function validatePassword(checking_password){
    var password = checking_password.trim();
    var hasUpper = /[A-Z]/.test(password);
    if(password.length < 8){
        alert("Minimum charachters should be 8");
    }
    if(!password.match(/[0-9]/i)){
        alert("Password should contain numerical characters");
    }
    if(!password.match(/[^A-Za-z0-9-'']/i)){
        alert("Password sould contain special characters");
    }
    if (!hasUpper) {
        alert("Your password needs an uppser case letter");
      }
}

var merge_result = document.getElementById("merge-result");
var number = document.getElementById("merge-input");
var array = [];
document.getElementById("merge-action").onclick = function(){
    var value = parseInt(number.value);
  
    if (!isNaN(value)) {
        array.push(value);
        if (array.length === 10) {
            merge_result.innerHTML = mergeSort(array);
        }
        number.value = '';
    }
};
function helperMerge(left, right){
    var sortedArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
};
function mergeSort(arrayList){
    var half_arr = arrayList.length / 2;
    if(arrayList.length <= 1){
        return arrayList;
    }
    let left = mergeSort(arrayList.slice(0, half_arr));
    let right = mergeSort(arrayList.slice(half_arr));
    return helperMerge(left, right);
};


