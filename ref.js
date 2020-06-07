// 1. Create an array of all obj classified on country, language, privacy label, privacy link, tnc label, tnc link

// 2. search on the basis of country and language

// 3. get privacy links and tnc links from webiste.




Data:
Chennai	Tamil Nadu	9884455884	4/8, Turnbulls Rd, Nandanam, Chennai, Tamil Nadu - 35
Pune	Maharashtra	0	8/4, Banali Apartment, Karve Rd, Nal Stop, Kothrud, Pune, Maharashtra 411004
Pune	Maharashtra	9960907374	Shop No. 4, Waghere Empire, opposite Finolex Chowk, Morewadi, Pimpri Colony, Pune, Maharashtra 411018
Chennai	Tamil Nadu	9282111809	198A, St Marryes Road, R A Puram, Chennai, Tamil Nadu - 28






1. First delete the no. and replace new line with **** using find and replace in vscode 
    Chennai	Tamil Nadu	4/8, Turnbulls Rd, Nandanam, Chennai, Tamil Nadu - 35*****Pune	Maharashtra	8/4, Banali Apartment, Karve Rd, Nal Stop, Kothrud, Pune, Maharashtra 411004*****Pune	Maharashtra	Shop No. 4, Waghere Empire, opposite Finolex Chowk, Morewadi, Pimpri Colony, Pune, Maharashtra 411018*****Chennai	Tamil Nadu	198A, St Marryes Road, R A Puram, Chennai, Tamil Nadu - 28



    Store all the date in a variable "string" converting it into string.
    var newText = "Chennai	Tamil Nadu	4/8, Turnbulls Rd, Nandanam, Chennai, Tamil Nadu - 35*****Pune	Maharashtra	8/4, Banali Apartment, Karve Rd, Nal Stop, Kothrud, Pune, Maharashtra 411004*****Pune	Maharashtra	Shop No. 4, Waghere Empire, opposite Finolex Chowk, Morewadi, Pimpri Colony, Pune, Maharashtra 411018*****Chennai	Tamil Nadu	198A, St Marryes Road, R A Puram, Chennai, Tamil Nadu - 28"

2. Split by star and save in a variable (split stores data in array)
    var arr = newText.split("*****")

3. Use for each and create object of arrays by splitting it with tab
    var newArr = [];
    arr.forEach(el => {
    var tempObj = {};
    var a = el.split("\t");
    tempObj.city = a[0];
    tempObj.state = a[1];
    tempObj.add = a[2];
    newArr.push(tempObj)
    })


    var newArr = [];
    myarr.forEach(el => {
    var tempObj = {};
    var a = el.split("\t");
    tempObj.country = a[0];
    tempObj.language = a[1];
    tempObj.privacyLabel = a[2];
    tempObj.privacyLink = a[3];
    tempObj.tnc = a[4];
    tempObj.tncLink = a[5];
    newArr.push(tempObj);
    })

4. Just for calculations/ observation

i). Address without city 
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){console.log("No city")}
})
ii). Address without state
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.state.toLocaleLowerCase()) === -1){console.log("No state")}
})
iii). Address without city & state
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.state.toLocaleLowerCase()) === -1 && el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){console.log("No city ans state")}
})

5. Adding state to address 

newArr.forEach((el, i) => {
    if(el.add.toLocaleLowerCase().indexOf(el.state.toLocaleLowerCase()) === -1){
        let oldAdd = el.add;
        oldAdd = oldAdd + ", " + el.state;
        newArr[i].add = oldAdd;
    }
})

6. Just for backup trails
a). JSON.stringify(newArr)
b). $0.innerHTML = JSON.stringify(newArr)
c). $0.value = JSON.stringify(newArr)
d). document.getElementById("azhar")
e). document.getElementById("azhar").innerHTML = JSON.stringify(newArr);

7. Random trials.
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        var tempAddArr = el.add.split(" ");
        console.log(tempAddArr.indexOf(el.state) === -1)
        
    }
})

newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        var tempAddArr = el.add.split("");
        var indexNumber = tempAddArr.indexOf(el.state);
        console.log(indexNumber)
    }
})

newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        var tempAddArr = el.add.split(" ");
        var indexNumber = tempAddArr.indexOf(el.state);
        console.log(indexNumber)
    }
})

To check state without space in address
var count = 0
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        var tempAddArr = el.add.split(" ");
        
        var indexNumber = tempAddArr.indexOf(el.state);
        if(indexNumber == -1){count++}
    }
})
console.log(count)

var count = 0
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        var tempAddArr = el.add.split(el.state);
        
        var indexNumber = tempAddArr.indexOf(el.state);
        if(indexNumber == -1){count++}
    }
})
console.log(count)
var count = 0
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        
        
        var indexNumber = tempAddArr.indexOf(el.state);
        if(indexNumber == -1){count++}
    }
})
console.log(count)

var count = 0
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        
        
        var indexNumber = el.add.indexOf(el.state);
        if(indexNumber == -1){count++}
    }
})
console.log(count)

8. Final solution spliting the address with state and then joining it with city and state.

var count = 0
newArr.forEach(el => {
    if(el.add.toLocaleLowerCase().indexOf(el.city.toLocaleLowerCase()) === -1){
        var indexNumber = el.add.split(el.state).join(el.city + ", " + el.state);
        console.log(indexNumber)   }
})
