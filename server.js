const express = require('express');
const fileHandler = require('./modules/fileHandler');
const path = require('path');

const app = express();
const PORT = 3000;

/* ========================
   MIDDLEWARE
======================== */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ========================
   DASHBOARD
======================== */
app.get('/', async (req, res) => {
    const employees = await fileHandler.read();
    res.render('index', { employees });
});

/* ========================
   ADD FORM
======================== */
app.get('/add', (req, res) => {
    res.render('add');
});

/* ========================
   CREATE EMPLOYEE
======================== */
app.post('/add', async (req, res) => {
    const { name, department, basicSalary } = req.body;

    if (!name.trim() || Number(basicSalary) < 0) {
        return res.send("Invalid data!");
    }

    const employees = await fileHandler.read();

    const newEmployee = {
        id: Date.now(),
        name: name.trim(),
        department: department.trim(),
        basicSalary: Number(basicSalary)
    };

    employees.push(newEmployee);
    await fileHandler.write(employees);

    res.redirect('/');
});

/* ========================
   DELETE
======================== */
app.get('/delete/:id', async (req, res) => {
    const employees = await fileHandler.read();

    const updated = employees.filter(emp => emp.id != req.params.id);

    await fileHandler.write(updated);

    res.redirect('/');
});

/* ========================
   EDIT FORM
======================== */
app.get('/edit/:id', async (req, res) => {
    const employees = await fileHandler.read();

    const employee = employees.find(emp => emp.id == req.params.id);

    if (!employee) {
        return res.send("Employee not found");
    }

    res.render('edit', { employee });
});

/* ========================
   UPDATE
======================== */
app.post('/edit/:id', async (req, res) => {
    const { name, department, basicSalary } = req.body;

    if (!name.trim() || Number(basicSalary) < 0) {
        return res.send("Invalid data!");
    }

    const employees = await fileHandler.read();

    const updated = employees.map(emp => {
        if (emp.id == req.params.id) {
            return {
                ...emp,
                name: name.trim(),
                department: department.trim(),
                basicSalary: Number(basicSalary)
            };
        }
        return emp;
    });

    await fileHandler.write(updated);

    res.redirect('/');
});

/* ========================
   SERVER START
======================== */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
