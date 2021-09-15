import Router from 'express';
import NotesController from "../controllers/NotesController.js";

const router = new Router();

router.post('/notes', NotesController.create);
router.get('/notes', NotesController.getAll);
router.get('/notes/:id', NotesController.getOne);
router.put('/notes/:id', NotesController.update);
router.delete('/notes/:id', NotesController.delete);

export default router;