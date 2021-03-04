const {Pool} = require("pg");
async function criarConexao() {
  const pool = new Pool({
     connectionString: '',  
     ssl: {
        rejectUnauthorized: false
     }
  });

 //let conexoes = await pool.connect();
  //let res = await conexoes.query(`create table pizza(id serial primary key, sabor varchar, pequena varchar, familia varchar,valor integer)`);

//await conexoes.query("insert into pizza (sabor, pequena, familia, valor) values ($1, $2, $3, $4)", ["Frango", "4 fatias: 20.00", "10 fatias: 40.00", 40.00]);
//await conexoes.query("insert into pizza (sabor, pequena, familia, valor) values ($1, $2, $3, $4)", ["Frampiry", "4 fatias: 25.00", "10 fatias: 43.00", 25.00]);
//await conexoes.query("insert into pizza (sabor, pequena, familia, valor) values ($1, $2, $3, $4)", ["Tropicana", "4 fatias: 25.00", "10 fatias: 43.00", 40.00]);
//await conexoes.query("insert into pizza (sabor, pequena, familia, valor) values ($1, $2, $3, $4)", ["Chocolate", "4 fatias: 23.00", "10 fatias: 42.00", 23.00]);
//await conexoes.query("insert into pizza (sabor, pequena, familia, valor) values ($1, $2, $3, $4)", ["Marguerita", "4 fatias: 22.00", "10 fatias: 38.00", 38.00]);
//await conexoes.query("update pizza set sabor = $1 where id = $2", ["Calabresa", 8]);
//await conexoes.query("delete from pizza where sabor like 'Calab%'");

let res = await conexoes.query("select * from pizza");
let tuplas = res.rows;
for(let tupla of tuplas) {
  console.log(tupla);
}
    conexoes.release();
}

criarConexao();
