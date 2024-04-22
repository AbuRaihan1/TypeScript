"use strict";
{
    // object destructuring
    const person = {
        name: {
            firstName: "Abu",
            middleName: "Raihan",
            lastName: "Morol",
        },
        age: 20,
        contactNo: 1916891765,
        address: "Hazibag, Gazipiur Sadar, Gazipur",
    };
    const { contactNo, name: { middleName }, } = person;
}
