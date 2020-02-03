const express = require('express');
const router = express.Router();
const teacherCtrl = require('../controllers/teachers.controllers');
const md_auth = require('../middleware/authenticated');
//Define API
router.get('/',md_auth.ensureAuth, teacherCtrl.getTeachers);
router.post('/',md_auth.ensureAuth, teacherCtrl.createTeacher);
router.get('/:id',md_auth.ensureAuth, teacherCtrl.getTeacher);
router.put('/:id',md_auth.ensureAuth, teacherCtrl.editTeacher);
router.delete('/:id',md_auth.ensureAuth, teacherCtrl.deleteTeacher);


module.exports = router;
