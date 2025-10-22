---
layout: default
title: "pokeapi"
data_page: tools
---

<div class="terminal-header">
  <span class="prompt">$</span> <span class="cmd">cat pokeapi.md</span>
</div>
# <span style="font-family: 'Fira Mono', monospace;">PokéAPI</span>

<p>PokéAPI is a RESTful API that provides comprehensive Pokémon-related data. It's a free-to-use database containing information about Pokémon, their moves, abilities, types, and more.</p>

## Key Features
- **Comprehensive Data**: Access information about Pokémon, moves, abilities, and items
- **RESTful Architecture**: Clean and intuitive API endpoints
- **JSON Responses**: All data is returned in JSON format
- **No Authentication**: Free to use without API keys
- **Rate Limiting**: Fair use limits of 100 requests per IP per minute
- **Caching Support**: Responses can be cached to optimize performance

## Common Endpoints
- `/pokemon/{id or name}` - Get basic Pokémon information
- `/type/{id or name}` - Get Pokémon type data
- `/ability/{id or name}` - Get ability information
- `/generation/{id}` - Get data for specific game generations
- `/berry/{id or name}` - Get berry information


<div class="resource-card">
  <h2>Web tool</h2>
  <ul>
    <li><strong>Official Site:</strong> <a href="https://pokeapi.co/" target="_blank">PokéAPI</a></li>
    <li><strong>Documentation:</strong> <a href="https://pokeapi.co/docs/v2" target="_blank">API Documentation</a></li>
    <li><strong>Source Code:</strong> <a href="https://github.com/PokeAPI/pokeapi" target="_blank">GitHub Repository</a></li>
  </ul>
</div>

<a href="/resources" class="back-link">&#8592; Back to Resources</a>