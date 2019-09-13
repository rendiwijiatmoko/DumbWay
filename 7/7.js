const http = require('http');
const mysql = require('mysql');
const fs = require('fs')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mapple',
  database: 'crud_db',
  charset: 'utf8'
});

// tampilan html
var reo ='<html><head><title>Soal nomor 7</title> <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> </head><body><h1>Soal No 7</h1>{${table}}</body></html>';

// setingan akses sql
function setResHtml(sql, dumbways){
  pool.getConnection((err, con)=>{
    if(err) throw err;

    con.query(sql, (err, res, cols)=>{
      if(err) throw err;

      var table ='';

      // membuat html dengan akses db
      for(var i=0; i<res.length; i++){
        table +='<tr><td>'+ (i+1) +'</td><td>'+ res[i].category_name +'</td><td>'+ res[i].pro +'</td></tr>';
      }
      table ='<table class="table table-striped"><tr><th>No</th><th>category_name</th><th>products</th></tr>'+ table +'</table>';

      con.release(); //Done with mysql connection

      return dumbways(table);
    });
  });
}

let sql ='SELECT categories.id, categories.name AS category_name, products.name AS pro FROM products INNER JOIN categories ON categories.id=products.category_id;';

//create the server for browser access
const server = http.createServer((req, res)=>{
  setResHtml(sql, resql=>{
    reo = reo.replace('{${table}}', resql);
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write(reo, 'utf-8');
    res.end();
  });
});

server.listen(8080, ()=>{
  console.log('Server running at //localhost:8080/');
});
