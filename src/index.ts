import express from 'express';
import mongoose from 'mongoose'


const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/', require('./router/LinkRouter'))