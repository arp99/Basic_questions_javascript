const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

const sum = (...marks) =>{
    return marks.reduce((a , b)=> a + b , 0);
}

const printNameAndMarks = students =>{
    students.forEach(({name , maths, science , english , computer})=>{
        console.log(`Name: ${name} Total Marks: ${sum(maths , science , english , computer)}`)
    })
}

const getHighestAndLowestScorer = students =>{
    let maxMarks = -1,highestScorer = '' , minMarks = 400,lowestScorer = '';
    
    students.forEach(({name , maths,science , english , computer})=>{
        
        let total = sum(maths , science, english, computer);
        
        if(total > maxMarks){
            maxMarks = total;
            highestScorer = name;
        }
        if(total < minMarks){
            minMarks = total;
            lowestScorer = name;
        }
    })
    return [highestScorer , lowestScorer];
}

const getAverageComputerMark = studentDetails =>{
    let total  = 0;
    
    studentDetails.forEach(({computer})=>{
        total = sum(computer , total);
    })
    return (total / studentDetails.length).toFixed(2)
}

const printGrades = studentDetails =>{
    let total = 0 , percentage = 0 , grade = '';
    studentDetails.forEach(({name , maths, science , english , computer})=>{
        total = sum(maths , science , english , computer);
        percentage = (total/4).toFixed(2);
        if(percentage >= 75){
            grade = 'A';
        }
        else if(percentage >= 60){
            grade = 'B';
        }
        else if(percentage >= 35){
            grade = 'C';
        }
        else if(percentage <35){
            grade = 'D';
        }
        console.log(`Name: ${name} Percentage: ${percentage} % Grade: ${grade}`);
    })
}

const getPassedStudents = studentDetails =>{
    const passedStudents = []
    let total = 0,percentage = 0;
    studentDetails.forEach(({name , maths, science , english , computer})=>{
        total = sum(maths , science , english , computer);
        percentage = (total / 4).toFixed(2);

        if(percentage > 35){
            passedStudents.push(name);
        }
    })
    return passedStudents;
}

printNameAndMarks(studentDetails)
const [highestScorer , lowestScorer] = getHighestAndLowestScorer(studentDetails);
console.log(`\nHighest Scorer: ${highestScorer}\nLowest Scorer: ${lowestScorer}`)
console.log(`\nAverage Computer science marks: ${getAverageComputerMark(studentDetails)}\n`)
printGrades(studentDetails)
const passedSudents = getPassedStudents(studentDetails);
console.log(`\nTotal students passed: ${passedSudents.length}\nThey are: ${passedSudents.join(',')}`)