import Task from '../models/Task.js';

export const getAllTasks = async (req, res) => {
  try {
    const filter = req.query.filter || 'all';
    let dateFilter = {};
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);

    if (filter === 'today') {
      dateFilter = { createdAt: { $gte: startOfToday } };
    } else if (filter === 'week') {
      dateFilter = { createdAt: { $gte: startOfWeek } };
    } else if (filter === 'month') {
      dateFilter = { createdAt: { $gte: startOfMonth } };
    }

    const tasks = await Task.find(dateFilter).sort({ createdAt: -1 });
    const activeCount = tasks.filter(t => t.status === 'active').length;
    const completedCount = tasks.filter(t => t.status === 'completed').length;

    res.status(200).json({
      tasks,
      activeCount,
      completeCount: completedCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(400).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params; 
    const { title, status, completedAt } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, status, completedAt },
      { returnDocument: 'after' }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Xóa task thành công' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(400).json({ message: error.message });
  }
};