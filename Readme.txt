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
        (ii) After hashing the user password