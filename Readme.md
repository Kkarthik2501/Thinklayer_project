User Details Form 

•	The required technologies to run this project are node.js,mysql.
•	The following are the steps you need to follow to run this project.
1.	Install Node.js, MySQL
2.	Run the command ‘node ./server.js’ from command prompt. This starts the backend server, which creates the database table (if it doesn’t exist) and listens to client requests
3.	Open the client from localhost (http://127.0.0.1:5500/index.html) and input details which gets stored in database.
Description:
•	I have created a form using the form tag where the input fields are name, email and phone number and after filling these details, upon clicking on submit, the control shifts to the function where all these details are stored in an object and sent to the server code using ajax post method.
•	In the server code the connection to mysql-server is created and other required dependencies are installed. Using post method the data sent as the request to the server is stored in the database.



