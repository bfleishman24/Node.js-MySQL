var inquirer = require("inquirer");
var mysql = require("mysql");
var chalk = require('chalk');




var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });


 

  function queryAllProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        console.log("-----------------------------------");
      for (var i = 0; i < res.length; i++) {
  
        console.log("id:"+res[i].id + " | Product Name: " + res[i].product_name + " | Department Name: " + res[i].department_name + " | Price: $" + res[i].price + " | " + res[i].stock_quantity);  
     }
      console.log("-----------------------------------");
    });
    start();
  }


function start() {
    inquirer.prompt([
        {
            name: "userChoice",
            message: "Welcome to Bamazon, the best place to buy things and stuff! Please input the product ID youd like to purchase!",
            type: 'input'
            
        },
        {
            name: 'quantity',
            message: 'How many do you want?',
            type: 'input'
        },
    ]).then(function (answer) {
        // console.log(answers.userChoice + answers.quantity)
        var itemId = answer.userChoice;
        var itemNeeded = answer.quantity;
            quantity(itemId,itemNeeded);
          
    });
    

}
queryAllProducts();

function quantity(itemId,itemNeeded) {
    connection.query(
        'SELECT * FROM products WHERE id = ' + itemId,
        function (error, res) {
            if (error) {
                console.log(error);
            }
            if (itemNeeded <= res[0].stock_quantity) {
                var newStock = parseInt(res[0].stock_quantity) - parseInt(itemNeeded);
                var totalPrice = (parseInt(itemNeeded) * parseInt(res[0].price));
                console.log(chalk.bold.green('Placing Your Order!' + '\nTotal Cost for You: $' + totalPrice + '\n*************************'));
                connection.query(
                    'UPDATE products SET stock_quantity = ' + newStock + ' WHERE id = ' + itemId,
                    function (error, res) {
                        if (error) {
                            console.log(error);
                        }
                    });
                start();
            } else {
                console.log(chalk.bold.red('Insufficient Quantity!\n*************************'));
                start();
            }
        });
}