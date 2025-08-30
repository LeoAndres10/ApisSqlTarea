const { DataTypes } = require('sequelize');
const sequelize = require('../Conexion/db');

const Producto = sequelize.define('producto', {
    partNumber: {
        type: DataTypes.STRING
    },
    productType: {
        type: DataTypes.STRING
    },

    brand_code: {
        type: DataTypes.STRING
    },
    family_code: {
        type: DataTypes.STRING
    },
    line_code: {
        type: DataTypes.STRING
    },
    productSegment_code: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.DOUBLE
    },
    valueCurrency: {
        type: DataTypes.STRING
    },
    defaultQuantityUnits: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    plannerCode:{
    type:DataTypes.STRING
    },
    sourceLink:{
        type: DataTypes.STRING
    }
},
    {
        tableName: 'producto',
        timestamps: false
    }
)

module.exports=Producto;