### Inicializar

```
docker-compose up -d
```

#### Inserir Pessoas
```
POST: http://localhost:3000/people

content-type: application/json

body:
{
    "name": "Carlos"
}

response: People save successfully
```

### Visualizar

```
GET: http://localhost:3000/
```