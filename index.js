const express = require('express');
const cors = require('cors');
const Producto = require('./Modelos/Producto');
const sequelize = require('./Conexion/db');

const app = express();
app.use(express.json());
app.use(cors());
// Contar Por tipo de Moneda
app.get('/conteo-tipo-moneda', async(req,res)=> {
try {
    const resultado= await Producto.findAll({
        attributes:[
            'valueCurrency',
            [sequelize.fn('COUNT',sequelize.col('*')), 'TipoMoneda']

        ],
        group:['valueCurrency']
    });

    if (resultado.length>0) {
        res.status(200).json({'Mensaje':'Datos Encontrados', data:resultado})
    } else {
        res.status(400).json({'Mensaje':'Datos Encontrados', data:[]})
    }

} catch (error) {
    res.status(500).json({mesagge:'Ocurrio un error', data:error})
}

});



// Suma de total de Productos por tipo de producto
app.get('/suma-tipo-producto', async(req,res)=> {
try {
    const resultado= await Producto.findAll({
        attributes:[
            'productType',
            [sequelize.fn('SUM',sequelize.col('value')), 'SumaProductType']

        ],
        group:['productType']
    });

    if (resultado.length>0) {
        res.status(200).json({'Mensaje':'Datos Encontrados', data:resultado})
    } else {
        res.status(400).json({'Mensaje':'Datos Encontrados', data:[]})
    }

} catch (error) {
    res.status(500).json({mesagge:'Ocurrio un error', data:error})
}

});

// Conteo de productos disponibles(ACTIVE)
app.get('/conteo-producto-disponible/:idActive', async(req,res) =>{

    try {
   
    const {idActive}= req.params;
    const resultado= await Producto.findAll({

        attributes:[
            'status',
            [sequelize.fn('COUNT', sequelize.col('*')), 'ConteoProductoDisponible']
        ],
        where:{status: idActive},
        group: ['status']
    });
    if (resultado.length>0) {
        res.status(200).json({'Mensaje':'Datos Encontrados', data:resultado})
    } else {
        res.status(400).json({'Mensaje':'Datos Encontrados', data:[]})
    }

} catch (error) {
    res.status(500).json({mesagge:'Ocurrio un error', data:error})
}

})

app.listen(5000, () =>{
    console.log('Aplicacion Iniciada en el puerto 5000')
});

