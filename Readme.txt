This is an application built for solving todo apps problems

    -- It is a an api based application that captures :
        (a) User Registration
        (b) Automatic User Token Generation (for authorization and authentication purpose)
        (c) Creation of ToDo List
        (d) Getting list of todos
        (e) Getting/Fetching a single based on its reference.

Endpoint involved include:
    (a) User registration endpoint: This endpoint uses a jwt token for security purpose
        (i) When a user registeres, we always hash the password using the bcrypt package
        (ii) After hashing the user password, we automatically generate or issue a token for the user
    (b) There is also a getToken endpoint for getting a specific user token after registration /me endpoint 
    (c) An endpoint for creating a todolist.. the default status is always "pending"
    (d) An endpoint for getting all existing todo list.
    (e) A login (/login) end point for users supplying the email and password
        (i) we always send a token back as a response when a user details/credentials is found or valid
        (ii) case if user not found we send back null token and auth key value as false.
    (f) Added logOut endpoint 
    (g) our authentication is now done