import inquirer from "inquirer";

let answer = await inquirer.prompt([{
    message:"Enter your marks: ",
    type: "number",
    name: "marks"
}])

console.log("your percentage is :" + (answer.marks/700*100))