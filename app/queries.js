const e = require("express");
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "scott",
  database: "e_commerce",
  host: "localhost",
  port: 5432,
});

const listUsers = (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  let { firstname, lastname, email } = request.body;
  pool.query(
    "INSERT INTO users(firstname, lastname, email) VALUES($1, $2, $3)",
    [firstname, lastname, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send("User Added");
    }
  );
};

const infoUser = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
    response.status(200).json(results.rows);
  });
};

let userUpdate = (data, requestBody, response) => {
  let { firstname, lastname, email } = requestBody;
  for (let field in data) {
    if (requestBody[field]) {
      data[field] = requestBody[field];
    }
  }
  pool.query(
    "UPDATE users SET firstname=$2, lastname=$3, email=$4 WHERE id = $1",
    [data.id, data["firstname"], data["lastname"], data["email"]],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send("User Updated");
    }
  );
};

const updateUser = (request, response) => {
  let requestBody = request.body;
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    userUpdate(results.rows[0], requestBody, response);
  });
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("User Deleted");
  });
};

const listItems = (request, response) => {
  pool.query("SELECT * FROM items", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getItem = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM items WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
    response.status(200).json(results.rows);
  });
};

let purchaseItem = (requestBody, response) => {
  let {
    user_id,
    manufacturer,
    item,
    qty_ordered,
    date_ordered,
    date_recieved,
  } = requestBody;
  pool.query(
    "INSERT INTO purchase_order(user_id,  manufacturer, item, qty_ordered, date_ordered, date_recieved) VALUES($1, $2, $3, $4, $5, $6)",
    [user_id, manufacturer, item, qty_ordered, date_ordered, date_recieved],
    (error, results) => {
      if (error) {
        // throw error;
        response.status(400).send("Item not found!");
      } else {
        response.status(200).send("Purchased!");
      }
    }
  );
};

const buyItem = (request, response) => {
  let requestBody = request.body;
  let item = request.body.item;
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM items WHERE name = $1",
    [item],
    (error, results) => {
      if (error) {
        throw error;
      }
      purchaseItem(requestBody, response);
    }
  );
};


let itemUpdate = (data, requestBody, response) => {
  let { name, description } = requestBody;
  for (let field in data) {
    if (requestBody[field]) {
      data[field] = requestBody[field];
    }
  }
  pool.query(
    "UPDATE items SET name=$2, description=$3 WHERE id = $1",
    [data.id, data["name"], data["description"]],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Item Updated");
    }
  );
};

const updateItem = (request, response) => {
  let requestBody = request.body;
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM items WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    itemUpdate(results.rows[0], requestBody, response);
  });
};

const deleteItem = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM items WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send("Item Deleted");
  });
};

const listManufacturers = (request, response) => {
  pool.query("SELECT * FROM manufacturers", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getManufacturer = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM manufacturers WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
    response.status(200).json(results.rows);
  });
};



module.exports = {
  listUsers,
  createUser,
  infoUser,
  updateUser,
  deleteUser,
  listItems,
  getItem,
  buyItem,
  updateItem,
  deleteItem,
  listManufacturers,
  getManufacturer
};
