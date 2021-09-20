# mern-apigraphql

Es una aplicacion sencilla para administrar asignaciones de tareas a usuarios, el proposito es con fines educativos
ya que pretende ser parte de un video tutorial en el que voy a explicar como desarrollar una App utilizando una API
de Graphql. Para la parte del Servidor he elegido NodeJS como entorno de ejecucion, utilizando Express para la 
declaracion del servidor, Sequelize para establecer la conexion a la BD (MySQL) donde se van a resgistrar todas las asignaciones
y Graphql para crear los esquemas que tendra la API que sera expuesta por medio de apollo-server y apollo-server-express.
De esta forma podremos disponer en el backend de un REST/API clasico y una API de Graphql al mismo tiempo.
Para la parte del frontend aun no se definen algunos paquetes auxiliares a la libreria de React la cual sera la base 
de la aplicacion cliente, se utilizara CSS puro sin frameworks para los estilos de los componentes, los componentes
seran escritos en javascript ya que esta app no necesita de mas complejidad.

## Installation

descargar el repositorio desde el link de [github](https://github.com/devNica/mern-apigraphql)
abrir la carpeta que contiene el proyecto con [vscode] y correr el siguiente comando, tanto en la raiz 
de la aplicacion servidor, como en la aplicacion cliente:

```bash
/*install application dependencies*/
npm install 

/*run server application*/
npm run dev

/*run client application*/
npm start
```

## npm package versions
```bash
/*server app*/

apollo-server@2.25.2
apollo-server-express@2.25.2
express-graphql@0.12.0
graphql@15.5.3
graphql-iso-date@3.6.1
graphql-resolvers@0.4.2
```

## Usage

```javascript
# graphql query implementation example 

# returns 'todas las asignaciones de un usuario por el id del usuario'
url('/lxd/gql/v1/graphql')

`query {
  user(id: 1) {
    firstname
    lastname
    email
    assigned {
      id_assignment
      to {
        email
      }
      by {
        firstname
        lastname
        email
      }
      task {
        description
        category {
          category
        }
        complexity {
          level
          value
        }
      }
      status {
        status
      }
      priority {
        level
        value
      }
    }
  }
}`

# graphql mutation implementation example

`mutation{
  signin(email: "anyperson@anyemial.com", password: "anyword"){
    token
  }
}`

```

## License
[MIT](https://choosealicense.com/licenses/mit/)