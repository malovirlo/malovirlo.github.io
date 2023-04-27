# Routing

The routing component in our framework is responsible for handling incoming requests and directing them to the appropriate controller action. Our routing system is designed to be flexible and easy to use, with minimal configuration required to get started.

## Routing Convention

Our framework's routing system uses a clear and intuitive convention for mapping URLs to controller actions, as follows:

`/controller-name/action-name[/id]`

-   The initial part of the URL denotes the controller class that will handle the request.
-   The second segment specifies the name of the action method within the controller that will be executed.
-   If needed, a third segment can be appended to the URL to pass dynamic parameters to the action method. You are free to choose any name for this segment, and it will be passed to the action method as a parameter.

## Index

The AppController and the indexAction method are the default mapping for the homepage of your application. As a result, if the URL does not specify a controller or action, the routing system will automatically direct the request to the AppController and the indexAction method.

### I show you example

Here's an example of how our routing system maps a URL to a controller action:

`URL: /video/post/345`

```php
Controller Class: BlogController
Action Method: postAction($id)
```

-   It's worth noting that in this example, the $id parameter in the postAction method is assigned the value of '345'.

By following this convention, our routing system can seamlessly manage incoming requests and direct them to the correct controller and action, with minimal need for further configuration.
