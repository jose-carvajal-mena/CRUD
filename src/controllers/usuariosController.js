const controller = {};

//Lista la informacion de la base de datos.
controller.list = (req, res) => {
   req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM usuarios', (err, usuarios) =>{
            if(err){
                res.json(err);
            }
            res.render('usuarios', {
                data: usuarios
            })
        })
   });
};

//Guarda en la base de datos.
controller.save = (req, res) => {
   const datos = req.body;
   req.getConnection((err, conn) => {
       conn.query('INSERT INTO usuarios set ?', [datos], (err, usuarios) => {
           console.log(usuarios);
           res.redirect('/');
       })
   })
};

//Elimina una fila de la base de datos.
controller.delete = (req, res) => {
    const { id }= req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM usuarios WHERE id = ?',[id], (err, rows) =>{
            res.redirect('/');
        });
    })
 };

//Carga los datos de una fila de la base de datos.
controller.edit = (req, res) => {
    const { id }= req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM usuarios WHERE id = ?',[id], (err, usuarios) =>{
            res.render('usuarios_editar', {
                data:usuarios[0]
            })
        });
    })
 };

//Edita una fila de la base de datos.
controller.update = (req, res) => {
    const { id }= req.params;
    const nuevoUsuario = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE usuarios set ? WHERE id = ?',[nuevoUsuario,id], (err, usuarios) =>{
          res.redirect('/');
        });
    })
 };

module.exports = controller;