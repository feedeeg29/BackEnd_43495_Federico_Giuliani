<h1>App built on Node.JS</h1>
<h2>Library used:</h2>
        <p>Express.js</p><a>Documentation</a>
        <p>Handlebars</p><a>Documentation</a>
        <p>Pug.js</p><a>Documentation</a>
        <p>EJS</p><a>Documentation</a>

<h1>Methods</h1>
<h2>- GET '/api/productos/all' -> returns an array with all the products.</h1>
<h2> GET '/api/productos/:id' -> returns a product according to its id. If there is no product with the id provided, it returns "{ error : 'producto no encontrado' }"</h2>
<h2>- POST '/api/productos' -> receives and adds a product, and returns it with its assigned id.</h2>
<h2>- PUT '/api/productos/:id' -> receives and updates a product according to its id. If there is no product with the id provided, it returns "{ error : 'producto no encontrado' }"</h2>
<h2>- DELETE '/api/productos/:id' -> delete a product based on its id. If there is no product with the id provided, it returns "{ error : 'producto no encontrado' }"</h2>

