// Design database for Zen class programme


//Creating Users Collection
db.users.insert([
    {
      user_id: 1,
      name: "john",
      email: "john@gmail.com",
    },
    {
      user_id: 2,
      name: "jim",
      email: "jim@gmail.com",
    },
    {
      user_id: 3,
      name: "tom",
      email: "tom@gmail.com",
    },
    {
      user_id: 4,
      name: "ken",
      email: "ken@gmail.com",
    },
    {
      user_id: 5,
      name: "loki",
      email: "loki@gmail.com",
    },
    {
      user_id: 6,
      name: "ben",
      email: "ben@gmail.com",
    },
  ]);
  

  //Creating CodeKata collection
  db.codekata.insert([
    {
      problem_number: 1,
      problem_name: "problem-1",
      problem_category: "array",
      solved_users: [3, 2, 5],
    },
    {
      problem_number: 2,
      problem_name: "problem-2",
      solved_users: [2, 1, 5],
    },
    {
      problem_number: 3,
      problem_name: "problem-3",
      solved_users: [5, 6, 1],
    },
    {
      problem_number: 4,
      problem_name: "problem-4",
      solved_users: [6, 1, 5],
    },
    {
      problem_number: 5,
      problem_name: "problem-5",
      solved_users: [3, 6, 1],
    },
  ]);
  

  // Creating attendance, tasks and topics in a single collection

  db.attendance.insert([
    {
      class_date: new Date("2020-10-11"),
      topic: ["array", "string"],
      students_attended: [1, 2, 6],
      task_name: "aaa",
      task_submitted_student: [1, 2, 6],
    },
    {
      class_date: new Date("2020-10-12"),
      topic: ["array", "methods"],
      students_attended: [3, 4, 5],
      task_name: "bbb",
      task_submitted_student: [3, 4, 5],
    },
    {
      class_date: new Date("2020-10-15"),
      topic: ["map", "reduce"],
      students_attended: [3, 4, 2],
      task_name: "xxx",
      task_submitted_student: [3, 4, 2],
    },
    {
      class_date: new Date("2020-10-16"),
      topic: ["filter", "react"],
      students_attended: [3, 4, 2, 6],
      task_name: "yyy",
      task_submitted_student: [3, 4, 2, 6],
    },
    {
      class_date: new Date("2020-10-28"),
      topic: ["redux", "react"],
      students_attended: [3, 2, 6],
      task_name: "zzz",
      task_submitted_student: [3, 2, 6, 1],
    },
  ]);
  
  //Creating company_drives collection

  db.company_drives.insert([
    {
      drive_date: new Date("2020-09-11"),
      drive_attended_student: [1, 2, 6],
      company_name: "xxx",
    },
    {
      drive_date: new Date("2020-10-12"),
      drive_attended_student: [3, 4, 5],
      company_name: "xxx",
    },
    {
      drive_date: new Date("2020-10-15"),
      drive_attended_student: [3, 4, 2],
      company_name: "xxx",
    },
    {
      drive_date: new Date("2020-10-16"),
      drive_attended_student: [3, 4, 2, 6],
      company_name: "xxx",
    },
    {
      drive_date: new Date("2020-10-28"),
      drive_attended_student: [3, 2, 6],
      company_name: "xxx",
    },
  ]);
  
  //Creating mentor database
  
  db.mentors.insert([
    { mentor_name: "xxxx", mentees: [1, 2, 6] },
    { mentor_name: "xxxx", mentees: [3, 4, 5] },
    { mentor_name: "xxxx", mentees: [3, 4, 2] },
    {
      mentor_name: "xxxx",
      mentees: [3, 4, 2, 6, 8, 9, 5, 1, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    { mentor_name: "xxxx", mentees: [3, 2, 6] },
  ]);


  //Questions


  //1. Find all the topics and tasks which are thought in the month of October
  
  db.attendance.find(
    {
      $and: [
        { class_date: { $gte: ISODate("2020-10-01") } },
        { class_date: { $lte: ISODate("2020-10-31") } },
      ],
    },
    { topic: 1, task_name: 1 }
  );
  
  //2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
  
  db.company_drives.find({
    $and: [
      { drive_date: { $gte: ISODate("2020-10-15") } },
      { drive_date: { $lte: ISODate("2020-10-31") } },
    ],
  });
  
  //3. Find all the company drives and students who are appeared for the placement.
  
  db.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "drive_attended_student",
        foreignField: "user_id",
        as: "results",
      },
    },
  ]);
  
  //4. Find the number of problems solved by the user in codekata.

  db.users.aggregate([
    {
      $lookup: {
        from: "codekata",
        localField: "user_id",
        foreignField: "solved_users",
        as: "results",
      },
    },
    { $match: { user_id: 1 } },
    { $project: { results: 1, _id: 0 } },
    { $project: { countp: { $size: "$results" } } },
  ]);
  
  //5:  Find all the mentors with who has the mentee's count more than 15

  db.mentors.find({ $expr: { $gt: [{ $size: "$mentees" }, 15] } });
  
  //6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
  
  let result = db.attendance.aggregate([
    {
      $match: {
        $and: [
          { class_date: { $gte: ISODate("2020-10-15") } },
          { class_date: { $lte: ISODate("2020-10-31") } },
        ],
      },
    },
    {
      $project: {
        allvalues: { $setUnion: ["$students_attended", "$task_submitted_student"] },
      },
    },
    { $project: { allvalues: 1, _id: 0 } },
    { $unwind: "$allvalues" },
    { $group: { _id: 0, allvalues: { $addToSet: "$allvalues" } } },
    { $project: { allvalues: 1, _id: 0 } },
  ]);
  
  //Destructuring the output

  let { allvalues } = result;

  //finding the count

  db.users.find({ user_id: { $nin: allvalues } }).count();