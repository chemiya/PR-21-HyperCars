import { Router } from "express";
import Empleado from "../models/Empleado";
import CocheTaller from "../models/CocheTaller";
import CocheVenta from "../models/CocheVenta";

const router = Router();


router.post("/empleado", async (req, res) => {
  const { username,password, email,idEmpleado } = req.body;
  const newEmpleado= new Empleado({ username,password, email,idEmpleado});
  const savedEmpleado = await newEmpleado.save();
  res.json(savedEmpleado);
});

router.post("/cocheVenta", async (req, res) => {
  const {matricula,marca,modelo,caballos,agno,estadoVenta,fechaPublicacion ,precio} = req.body;
  var url="pendiente"
  const newCocheVenta= new CocheVenta({ matricula,marca,modelo,caballos,agno,estadoVenta,fechaPublicacion,precio,url});
  const savedCocheVenta = await newCocheVenta.save();
  res.json(savedCocheVenta);
});
router.put("/cocheVenta/:id", async (req, res) => {
  const updatedCocheVenta = await CocheVenta.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedCocheVenta);
});

router.put("/cocheTaller/:id", async (req, res) => {
  const updatedCocheTaller = await CocheTaller.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedCocheTaller);
});


router.post("/cocheTaller", async (req, res) => {
  const {matricula,marca,modelo,incidencia,comentarios,propietario,estadoTaller,fechaLlegada,precio } = req.body;
  var url="pendiente"
  const newCocheTaller= new CocheTaller({ matricula,marca,modelo,incidencia,comentarios,propietario,estadoTaller,fechaLlegada,precio,url});
  const savedCocheTaller = await newCocheTaller.save();
  res.json(savedCocheTaller);
});


router.get("/cocheVenta", async (req, res) => {
  const cocheVenta = await CocheVenta.find();
  res.json(cocheVenta);
});

router.get("/cocheTaller", async (req, res) => {
  const cocheTaller = await CocheTaller.find();
  res.json(cocheTaller);
});


router.post("/empleado/identificacion", async (req, res) => {
  const { username,password } = req.body;
  const empleado = await Empleado.find({username:username,password:password});
  res.json(empleado);
});


router.get("/cocheTaller/:id", async (req, res) => {
  const cocheTaller = await CocheTaller.findById(req.params.id);
  res.json(cocheTaller);
});

router.get("/cocheVenta/:id", async (req, res) => {
  const cocheVenta = await CocheVenta.findById(req.params.id);
  res.json(cocheVenta);
});

router.delete("/cocheVenta/:id", async (req, res) => {
  const cocheVenta = await CocheVenta.findByIdAndDelete(req.params.id);
  res.json(cocheVenta);
});

router.delete("/cocheTaller/:id", async (req, res) => {
  const cocheTaller = await CocheTaller.findByIdAndDelete(req.params.id);
  res.json(cocheTaller);
});


/*
router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  const savedTask = await newTask.save();
  res.json(savedTask);
});

router.get("/tasks/:id", async (req, res) => {
  const tasks = await Task.findById(req.params.id);
  res.json(tasks);
});

router.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
});

router.delete("/tasks/:id", async (req, res) => {
  const tasks = await Task.findByIdAndDelete(req.params.id);
  res.json(tasks);
});*/

export default router;
