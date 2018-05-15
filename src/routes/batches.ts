import express, {Router,Request,Response} from 'express';

import {Course as Course} from '../db';
import {Subject as Subject} from '../db';
import {Lecture as Lecture} from '../db';
import {Batch as Batch} from '../db';
import {Student as Student} from '../db';
import {Teacher as Teacher} from '../db';
import {StudentBatchMapper as StudentBatchMapper} from '../db';

const route: Router = Router()

route.get('/', (req:Request, res:Response) => {
    Batch.findAll()
    .then((batches:any) => {
    res.json(batches)
    })
    .catch((err:Error) => {
    console.log("Error in getting batches")
    res.send({success: false})
    })
}) 

export default route