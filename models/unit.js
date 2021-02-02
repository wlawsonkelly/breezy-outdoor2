module.exports = function(sequelize, DataTypes) {
    const Unit = sequelize.define("Unit", {
  
      client: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      campaignTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dmas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endDate: {
          type: DataTypes.DATE,
          allowNull: false
      },
      agency: {
          type: DataTypes.STRING,
          allowNull: false
      },
      agencyContact: {
          type: DataTypes.STRING,
          allowNull: false
      },
      revenue: {
          type: DataTypes.FLOAT,
          allowNull: false
      },
  
      numberPosted: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
  
      numberBooked: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    });

    return Unit;
  }; 