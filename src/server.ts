
/** Megha Gupta megha.gupta01@nagarro.com **/

import express from 'express'
import path from 'path'
import studentRoute from './routes/students'
import courseRoute from './routes/courses'
import subjectRoute from './routes/subjects'
import teacherRoute from './routes/teachers'
import batchRoute from './routes/batches'

var cors = require('cors') 

const app=express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const routes = {
    student: studentRoute,
    course:courseRoute,
    subject:subjectRoute,
    teacher:teacherRoute,
    batch:batchRoute
}

app.use('/courses',routes.course);
app.use('/subjects',routes.subject);
app.use('/teachers',routes.teacher);
app.use('/students',routes.student);
app.use('/batches',routes.batch);

app.listen(1234, function () {
    console.log("Server started on http://localhost:1234");
})
