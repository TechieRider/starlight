---
title: API-Documentation
description: An example page for API documentation. This example describes TheSportsDB´s API.
---

# TheSportsDB API

**TheSportsDB** provides a simple yet powerful REST-API for developers seeking access to sports-related information. Include a valid API key with every request. The API key can be obtained by signing up for an account on TheSportsDB.

Base URL:

```
https://www.thesportsdb.com/api/v1/json/{API_KEY}/
```

**{API_KEY}:** Your unique API key, required for making requests.

###### Authentication

All API requests require a valid API key, which must be included as part of the URL in each request. The API returns an error if the key is missing or invalid. 
Example

https://www.thesportsdb.com/api/v1/json/123/searchplayers.php?t=Arsenal


## Available Endpoints

### Search Players

Search for players by team name.
Endpoint

```
/searchplayers.php
```

| Parameters | Type | t |
| -- | -- | --|
| Parameter | Description | String (Required) The name of the team |

* *t* stands for team

Example:

```
https://www.thesportsdb.com/api/v1/json/{API_KEY}/searchplayers.php?t=Arsenal
```

Example Response:

```json
{
  "player": [
    {
      "idPlayer": "34146370",
      "strPlayer": "Kai Havertz",
      "strTeam": "Arsenal",
      "strNationality": "Germany",
      ...
    }
  ]
}
```






