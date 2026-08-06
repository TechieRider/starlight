---
title: Pipelines
config:
    theme: base
    themeVariables:
        primaryColor: "#4f3535"
description: Description on pipelines and workflows within this project.
---

Pipelines are being triggered during 'git push' or deployment. These are being constructed to prevent issues to occur and to catch common mistakes.

```mermaid
flowchart TD
    A[Git Push] --> B[Github]

    subgraph GHA[Github Actions]
        C[Forbidden Words Checker]
        D[Merge Conflict Checker]
        E[Versioning]
    end

    B --> C
    B --> D
    B --> E

    C --> F[Deployment]
    D --> F
    E --> F
```


## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
