# Releasing the Dashboard
## ⚡ New features
The dashboard has been released with a chart of the error loss, the number of intents tags, hidden layers, the learning rate and time.

![](https://i.imgur.com/hxGxV3O.png)

# Releasing a new neural network and new CIs
## ⚡ New features [*olivia-ai/olivia*](https://github.com/olivia-ai/olivia)
### 🛠 The new neural network
The neural network has been completely re-developed from scratch to make something quicker and more powerful.
It has been built using [this document](https://github.com/hugolgst/the-math-behind-an-artificial-neural-network)

### 🛠 Changing continuous integrations
Since GitHub released Actions, I decided to move from Travis-CI and Circle-CI to GitHub Actions
There are two tasks, the format checker and the Docker CI which builds and publish the Docker image.
See [here](https://github.com/olivia-ai/olivia/actions)
