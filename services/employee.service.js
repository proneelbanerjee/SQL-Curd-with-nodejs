const db = require("../db");

module.exports.getAllEmployees = async () => {
  const [records] = await db.query("SELECT * FROM employees");
  return records;
};

module.exports.getEmployeeById = async (id) => {
  const [[record]] = await db.query("SELECT * FROM employees WHERE id = ?", [
    id,
  ]);
  return record;
};

module.exports.deleteEmployee = async (id) => {
  const [{ affectedRows }] = await db.query(
    "DELETE FROM employees WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.postEmployee = async (id, name, emp_code, salary) => {
    const [{ affectedRows }] = await db.query(
      "INSERT INTO employees (id, name,employee_code,salary) VALUES (?, ?,?,?)",
      [id, name, emp_code, salary]
    );
    return affectedRows;
  };

module.exports.EditEmployee = async (obj, id) => {
  const [[[{ affectedRows }]]] = await db.query(
    "CALL usp_employee_add_or_edit(?,?,?,?)",
    [id, obj.name, obj.employee_code, obj.salary]
  );
  return affectedRows;
};



