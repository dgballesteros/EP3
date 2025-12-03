var express = require('express');
var router = express.Router();

const dataService = require('../data/dataService');

router.get('/', function(req, res, next) {
  let pokemons = dataService.findAllPokemons();
  let tipos = dataService.findAllPokemonTypes();
  res.render('index', { pokemons, tipos });
});

router.get("/pokemon/:pid",function(req,res,next){
  let pokemon = dataService.findPokemonById(req.params.pid);
  let tipos = dataService.findAllPokemonTypes();
  res.render('pokemon', { pokemon, tipos })
});

router.get('/tipos/:tipo', (req, res, next) => {
  const tipo = req.params.tipo;
  const pokemons = dataService.findAllPokemonsByType(tipo);
  const tipos = dataService.findAllPokemonTypes();
  res.render('index', { pokemons, tipos });
});

module.exports = router;
