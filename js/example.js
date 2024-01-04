// let's create each staff's object data

var StaffNumber1 = {
     Name: "Daniel",
     Address: "Imo State Nigeria",
     Age: 45,
     Experience: "Highly Skilled"
}
// second staff data

var StaffNumber2 = {
  Name: "James",
  Address: "Lagos Sate Nigeria",
  Age: 45,
  Experience: "UnSkilled",
};

// third staff data

var StaffNumber3 = {
  Name: "Michael",
  Address: "Arizona USA",
  Age: 45,
  Experience: "Skilled",
};

// Defining our constructor function

function StaffDetails (Name, Address, Age, Experience){
    this.Name = Name;
    this.Address = Address;
    this.Age = Age;
    this.Experience = Experience;
}

// Creating a container(varible) to hold the data each staff

var StaffNumber1   =  new StaffDetails ("Agnes", "Imo State Nigeria", 25, "Highly Skilled")

// Staff 2
var StaffNumber2 = new StaffDetails  ("Daniel", "Lagos State Nigeria", 35, "Skilled");

// Note that (new) method here just creates a new staff with the specified params or inputs or details
// from the StaffDetails constructor 