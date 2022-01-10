const qSel = (selector) => document.querySelector(selector);
const getID = (id) => document.getElementById(id);
let user = {};
let arayUsers = [];

let fNameRegExp = /^[A-Za-z]{2,20}$/;
let SNameRegExp = /^[A-Za-z]{2,20}$/;
let emailRegExp = /^[^\s@]+@[^\s@]+\.([A-Za-z]{2,4})+$/;
let passRegExp = /^[A-Za-z0-9]{8,15}$/;
let emailRegExp2 = /^[^\s@]+@[^\s@]+\.([A-Za-z]{2,4})+$/;
let passRegExp2 = /^[A-Za-z0-9]{8,15}$/;

//event go to the login page
qSel(".sing-in").addEventListener("click", function () {
  qSel(".conteiner-2").style.display = "block";
  qSel(".conteiner").style.display = "none";
  getID("fName").value = "";
  getID("sName").value = "";
  getID("email").value = "";
  getID("pass").value = "";
  getID("fName").style.border = "1px solid grey";
  getID("sName").style.border = "1px solid grey";
  getID("email").style.border = "1px solid grey";
  getID("pass").style.border = "1px solid grey";
  qSel(".ai-1").style.display = "none";
  qSel(".ai-2").style.display = "none";
  qSel(".ai-3").style.display = "none";
  qSel(".ai-4").style.display = "none";
});

//event go back to the registration page
qSel(".sing-up").addEventListener("click", function () {
  qSel(".conteiner").style.display = "block";
  qSel(".conteiner-2").style.display = "none";
  qSel(".w-6").style.display = "none";
});

// event user registration
qSel(".button-1").addEventListener("click", function () {
  let testFName = fNameRegExp.test(getID("fName").value);
  let testSName = SNameRegExp.test(getID("sName").value);
  let testEmail = emailRegExp.test(getID("email").value);
  let testPass = passRegExp.test(getID("pass").value);
  if (testFName && testSName && testEmail && testPass == true) {
    if (localStorage.length > 0 && localStorage.getItem("arayUsers")) {
      let arayUsersLS = JSON.parse(localStorage.getItem("arayUsers"));

      if (
        !arayUsersLS.some(
          (arayUsersLS) =>
            arayUsersLS.mail.toLowerCase() ===
            getID("email").value.toLowerCase()
        )
      ) {
        user = {
          firstName: getID("fName").value,
          secondName: getID("sName").value,
          mail: getID("email").value,
          password: getID("pass").value,
        };
        arayUsersLS.push(user);
        localStorage.setItem("arayUsers", JSON.stringify(arayUsersLS));
        qSel(".email").style.border = "2px solid rgb(0 159 0)";
        qSel(".w-3").style.display = "none";
        qSel(".ai-3").style.display = "block";
        qSel(".ai-3").classList.remove("bg-img");
        getID("fName").value = "";
        getID("sName").value = "";
        getID("email").value = "";
        getID("pass").value = "";
        getID("fName").style.border = "1px solid grey";
        getID("sName").style.border = "1px solid grey";
        getID("email").style.border = "1px solid grey";
        getID("pass").style.border = "1px solid grey";
        qSel(".ai-1").style.display = "none";
        qSel(".ai-2").style.display = "none";
        qSel(".ai-3").style.display = "none";
        qSel(".ai-4").style.display = "none";

        return;
      } else {
        qSel(".email").style.border = "2px solid red";
        qSel(".w-3").style.display = "block";
        qSel(".ai-3").classList.add("bg-img");
        qSel(".ai-3").style.display = "block";
        qSel(".w-3").textContent = "This email already exist";
      }
    } else {
      user = {
        firstName: getID("fName").value,
        secondName: getID("sName").value,
        mail: getID("email").value,
        password: getID("pass").value,
      };
      arayUsers.push(user);
      localStorage.setItem("arayUsers", JSON.stringify(arayUsers));
      getID("fName").value = "";
      getID("sName").value = "";
      getID("email").value = "";
      getID("pass").value = "";
      getID("fName").style.border = "1px solid grey";
      getID("sName").style.border = "1px solid grey";
      getID("email").style.border = "1px solid grey";
      getID("pass").style.border = "1px solid grey";
      qSel(".ai-1").style.display = "none";
      qSel(".ai-2").style.display = "none";
      qSel(".ai-3").style.display = "none";
      qSel(".ai-4").style.display = "none";
      return;
    }
  }
});

//event log in to profile
qSel(".button-2").addEventListener("click", function () {
  let testEmail2 = emailRegExp2.test(getID("email2").value);
  let testPass2 = passRegExp2.test(getID("pass2").value);
  if (testEmail2 && testPass2 == true) {
    if (localStorage.length > 0) {
      let arayLocalStorage = JSON.parse(localStorage.getItem("arayUsers"));
      for (let i = 0; i < arayLocalStorage.length; i++) {
        if (
          arayLocalStorage[i].mail.toLowerCase() ===
            getID("email2").value.toLowerCase() &&
          arayLocalStorage[i].password === getID("pass2").value
        ) {
          qSel(".name").textContent = arayLocalStorage[i].firstName;
          qSel(".second-name").textContent = arayLocalStorage[i].secondName;
          qSel(".email-3").textContent = arayLocalStorage[i].mail;
          qSel(".conteiner-3").style.display = "block";
          qSel(".conteiner-2").style.display = "none";
          getID("email2").style.border = "1px solid grey";
          getID("pass2").style.border = "1px solid grey";
          return;
        } else {
          qSel(".conteiner-2").style.display = "block";
          qSel(".conteiner-3").style.display = "none";
          qSel(".w-6").style.display = "block";
          getID("email2").style.border = "2px solid red";
          getID("pass2").style.border = "2px solid red";
          qSel(".ai-6").classList.add("bg-img");
          qSel(".ai-5").classList.add("bg-img");
          qSel(".w-6").textContent = "Incorrect email or password";
        }
      }
    } else {
      qSel(".w-6").style.display = "block";
      qSel(".w-6").textContent = "Localstorage is ampty";
      getID("email2").value = "";
      getID("pass2").value = "";
      qSel(".ai-6").style.display = "none";
      qSel(".ai-5").style.display = "none";
      getID("email2").style.border = "1px solid grey";
      getID("pass2").style.border = "1px solid grey";
    }
  }
});

//event go back to the Login block
qSel(".button-3").addEventListener("click", function () {
  getID("email2").value = "";
  getID("pass2").value = "";
  getID("pass2").style.border = "1px solid grey";
  qSel(".ai-6").style.display = "none";
  qSel(".w-6").style.display = "none";
  getID("email2").style.border = "1px solid grey";
  qSel(".ai-5").style.display = "none";
  qSel(".conteiner-3").style.display = "none";
  qSel(".conteiner-2").style.display = "block";
});

// events for chege border red/green
getID("fName").addEventListener("change", function () {
  let testFName = fNameRegExp.test(this.value);
  if (testFName) {
    this.style.border = "2px solid rgb(0 159 0)";
  } else {
    this.style.border = "2px solid red";
  }
});

getID("sName").addEventListener("change", function () {
  let testSName = SNameRegExp.test(this.value);
  if (testSName) {
    this.style.border = "2px solid rgb(0 159 0)";
  } else {
    this.style.border = "2px solid red";
  }
});

getID("email").addEventListener("change", function () {
  let testEmail = emailRegExp.test(this.value);
  if (testEmail) {
    this.style.border = "2px solid rgb(0 159 0)";
  } else {
    this.style.border = "2px solid red";
  }
});
getID("pass").addEventListener("change", function () {
  let testPass = passRegExp.test(this.value);
  if (testPass) {
    this.style.border = "2px solid rgb(0 159 0)";
  } else {
    this.style.border = "2px solid red";
  }
});

getID("email2").addEventListener("change", function () {
  let testEmail2 = emailRegExp2.test(this.value);
  if (testEmail2) {
    this.style.border = "2px solid rgb(0 159 0)";
  } else {
    this.style.border = "2px solid red";
  }
});
getID("pass2").addEventListener("change", function () {
  let testPass2 = passRegExp2.test(this.value);
  if (testPass2) {
    this.style.border = "2px solid rgb(0 159 0)";
  } else {
    this.style.border = "2px solid red";
  }
});

//events for chenge check or dagger
getID("fName").addEventListener("input", function () {
  let testFName = fNameRegExp.test(this.value);
  if (testFName) {
    qSel(".w-1").style.display = "none";
    qSel(".ai-1").style.display = "block";
    qSel(".ai-1").classList.remove("bg-img");
  } else {
    qSel(".w-1").style.display = "block";
    qSel(".ai-1").classList.add("bg-img");
    qSel(".ai-1").style.display = "block";
  }
});

getID("sName").addEventListener("input", function () {
  let testSName = SNameRegExp.test(this.value);
  if (testSName) {
    qSel(".w-2").style.display = "none";
    qSel(".ai-2").style.display = "block";
    qSel(".ai-2").classList.remove("bg-img");
  } else {
    qSel(".w-2").style.display = "block";
    qSel(".ai-2").classList.add("bg-img");
    qSel(".ai-2").style.display = "block";
  }
});

getID("email").addEventListener("input", function () {
  let testEmail = emailRegExp.test(this.value);
  if (testEmail) {
    qSel(".w-3").style.display = "none";
    qSel(".ai-3").style.display = "block";
    qSel(".ai-3").classList.remove("bg-img");
  } else {
    qSel(".w-3").style.display = "block";
    qSel(".ai-3").classList.add("bg-img");
    qSel(".ai-3").style.display = "block";
  }
});
getID("pass").addEventListener("input", function () {
  let testPass = passRegExp.test(this.value);
  if (testPass) {
    qSel(".w-4").style.display = "none";
    qSel(".ai-4").style.display = "block";
    qSel(".ai-4").classList.remove("bg-img");
  } else {
    qSel(".w-4").style.display = "block";
    qSel(".ai-4").classList.add("bg-img");
    qSel(".ai-4").style.display = "block";
  }
});

getID("email2").addEventListener("input", function () {
  let testEmail2 = emailRegExp2.test(this.value);
  if (testEmail2) {
    qSel(".w-5").style.display = "none";
    qSel(".ai-5").style.display = "block";
    qSel(".ai-5").classList.add("aicon");
    qSel(".ai-5").classList.remove("bg-img");
  } else {
    qSel(".w-5").style.display = "block";
    qSel(".ai-5").classList.add("bg-img");
    qSel(".ai-5").style.display = "block";
  }
});
getID("pass2").addEventListener("input", function () {
  let testPass2 = passRegExp2.test(this.value);
  if (testPass2) {
    qSel(".w-6").style.display = "none";
    qSel(".ai-6").style.display = "block";
    qSel(".ai-6").classList.add("aicon");
    qSel(".ai-6").classList.remove("bg-img");
  } else {
    qSel(".w-6").style.display = "block";
    qSel(".ai-6").classList.add("bg-img");
    qSel(".ai-6").style.display = "block";
    qSel(".w-6").textContent = "Please provide a valid Password";
  }
});
