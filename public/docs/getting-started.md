# Getting started
## Installation
Clone Olivia from the master branch of Github repository

```bash
git clone https://github.com/olivia-ai/olivia.git
```

Then go inside the project and install the dependencies

```bash
cd olivia

# Install the dependencies with dep (https://github.com/golang/dep)
dep ensure
```

And run the application

```bash
go run main.go
```

The Websocket is now listening on the port `8080`, to change it just set it inside the environment variable `PORT`

The app will automatically check for `res/training.json` file which contains the save of the neural network.
By default when you clone the repository from Github you have a stable save.
If you want to train a new model just delete this file and rerun the app.

## How to use
Connect to `wss://olivia-api.herokuapp.com/` and send a JSON message like this

```json
{
  "content": "Hello!",
  "authorid": "129390230"
}
```

and the websocket will respond you with 
```json
{
  "content": "Good morning!",
  "tag": "hello"
}
```