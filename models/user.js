const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      min: 6
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      min: 3,
      max: 20,
      is: /^[a-zA-Z1-9._]+$/i //numbers, letters, . , and _ allowed
    },
    profileUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addressLineOne: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addressLineTwo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false
    },

    zip: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  User.associate = function(models) {
    User.hasMany(models.Campaign, {
      onDelete:"cascade"
    });
    
  };
  return User;
};