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
});



var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var line4 = document.querySelector(".line4");
window.onscroll = () => {
    var position1 = window.scrollY - 200;
    var position2 = window.scrollY - 2000;
    line1.style.right = `${position1}px`;
    line2.style.right = `${position1}px`;
    line3.style.right = `${position2}px`;
    line4.style.right = `${position2}px`;
}



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
    var left = mergeSort(arrayList.slice(0, half_arr));
    var right = mergeSort(arrayList.slice(half_arr));
    return helperMerge(left, right);
};

var username = document.getElementById("user_name");
var palindrome_string = document.getElementById("palindrome-result");
document.getElementById("check_palindrome").onclick = function(){
    var name = username.value;
    palindrome_string.innerHTML = checkPalindrome(name);
}

function checkPalindrome(string){
    if(string.length === 1){
        return "Your name is palindrome!";
    }
    if(string[0] === string.slice(-1)){
        return checkPalindrome(string.slice(1,-1))
    }
    return "Your name is not a palindrome!";
}
var users_age = document.getElementById("prime_input");
var age_result = document.getElementById("prime_result");
document.getElementById("check_prime").onclick = function(){
    age_result.innerHTML = checkPrime(users_age.value);
}
function checkPrime(prime){
    if(prime <= 1){
        return "What? You are a newborn?";
    }
    for(var i = 2; i < prime; i++){
        if(prime % 2 == 0){
            return "Your age is not a prime number!"
        }
    }
    return "Your age is a prime number!";
}
var ip_sum = document.getElementById("ip-result");
var display_ip = document.getElementById("display-id");
var hostname = window.location.hostname;
var ipParts = hostname.split(".");
display_ip.innerHTML = hostname;
var evenSum = 0;
var digit;
while (ipParts) {
    digit = ipParts % 10; 
    if (digit % 2 === 0) evenSum += digit;
    ipParts = Math.floor(ipParts / 10);
}
ip_sum.innerHTML = "Result of sum of even numbers in IP address: " + evenSum;

function reverseNumbers(str) {
    if (!/\d/.test(str)) {
        return "This string does not have numbers";
      }
      return str.replace(/\d+/g, (match) => match.split("").reverse().join(""));
}

var string_reverse = document.getElementById("reverse_string");
var input_string = document.getElementById("reverse-input");
document.getElementById("reverse-btn").onclick = function(){
    var reversed = reverseNumbers(input_string.value);
    string_reverse.innerHTML = reversed;

}

document.getElementById("go-up").addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
});

var course_id = document.getElementById("course_id");
var course_name = document.getElementById("course_name");
var instructor_name = document.getElementById("instructor_name");
var number_std = document.getElementById("number_std");
class Course {
    constructor(courseId, courseName, instructor, numStudents) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.instructor = instructor;
        this.numStudents = numStudents;
    }
    getCourseId() {
    return this.courseId;
    }
    getCourseName() {
    return this.courseName;
    }
    getInstructor() {
    return this.instructor;
    }
    getNumStudents() {
    return this.numStudents;
    }
    setCourseId(courseId) {
    this.courseId = courseId;
    }
    setCourseName(courseName) {
    this.courseName = courseName;
    }
    setInstructor(instructor) {
    this.instructor = instructor;
    }
    setNumStudents(numStudents) {
    this.numStudents = numStudents;
    }
}
document.getElementById("course_btn").onclick = function(){
    var myCourse = new Course();
    myCourse.setCourseId = course_id.value;
    myCourse.setCourseName = course_name.value;
    myCourse.setInstructor = instructor_name.value;
    myCourse.setNumStudents = number_std.value;
}

  
