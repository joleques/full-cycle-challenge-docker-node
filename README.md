### Inicializar

```
docker-compose up -d
```

#### Inserir Pessoas
```
POST: http://localhost:8080/people

content-type: application/json

body:
{
    "name": "Carlos"
}

response: People save successfully
```

### Visualizar

```
GET: http://localhost:8080/
```