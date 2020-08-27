const express = require("express")
    const app = express()
    const bodyParser = require("body-parser");
    const mysql = require("mysql")
    app.use(bodyParser.urlencoded({ extended: true }));


    const connection = mysql.createConnection({
      host: 'takeshidb.ccfbxvipibkl.ap-northeast-1.rds.amazonaws.com',
      user: 'yaginuma325',
      password: 'mememe325',
      database: 'university'
    })

    connection.connect();

    const port = process.removeListener.PORT || 3000;

    app.get('/api/class', (req, res) => {
      connection.query('select * from class', (error, results, fields) => {
        if (error) { console.log(error) }
        res.send(results)
      })
    })

    app.get('/api/class/:id', (req, res) => {
      connection.query("select * from class where id = ?", req.params.id, (error, result, fields) => {
        if (error) { console.log(error) }
        res.send(result)
      })
    })

  app.post('/api/class', (req, res) => {
  let cl = {
    classname: req.body.classname,
    dow : req.body.dow,
    nth : req.body.nth,
    absence : req.body.absence
  }

  connection.query("insert into class(classname, dow, nth, absence) values(?, ?)", [cl.classname, cl.dow, cl.nth, cl.absence], (error, results, fields) => {
    if (error) { console.log(error) }
    res.send(cl)
  })
})

app.put('/api/class/:id', (req, res) => {
  connection.query(`select * from class`, (error, results, fields) => {
    connection.query("update class set classname = ?, dow = ?, nth = ?, absence = ? where id = ?",
      [req.body.classname, req.body.dow, req.body.nth, req.body.absence, req.params.id], (error, result, fields) => {
        if (error) { console.log(error) }
        res.send(result)
      })
  })
})

app.delete('/api/class/:id', (req, res) => {
  connection.query(`select * from class`, (error, results, fields) => {
    connection.query("delete from class where id = ?", req.params.id, (error, result, fields) => {
      if (error) { console.log(error) }
      res.send(result)
    })
  })
})
    
    app.listen(port)
