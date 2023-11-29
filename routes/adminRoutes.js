const express= require('express');
const Controller = require('../controller/adminPageController');
 
const router = express.Router();
 
router.get('/tasks', Controller.getAllTasks);
router.get('/tasks/:id', Controller.getAllTasksUpdate);
router.post('/tasks', Controller.createTask);
router.put('/tasks/:id', Controller.updateTask);
router.delete('/tasks/:id', Controller.deleteTask);
router.get('/task/:id', Controller.getTasksByUsername);
router.put('/tasks/update-message/:taskId', Controller.updateTaskMessage);
router.get('/completed-tasks', Controller.getCompletedTasks);
router.get('/current-tasks', Controller.getCurrentTasks);
router.get('/search',Controller.searchTasks);
router.put('/tasks/update/:taskId',Controller.updateTaskNotification);
module.exports = router;