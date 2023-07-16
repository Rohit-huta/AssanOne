import { Router } from "express";

const router = Router();

// POST METHODS
router.route('/register').post((req, res) => {
    res.json('register router')
})

// GET METHODS


// PUT METHODS



export default router