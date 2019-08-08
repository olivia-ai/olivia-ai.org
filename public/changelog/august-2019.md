# Releasing Olivia 2.0
## ⚡ Global features
### 🛠 User cache
I've released a system of cache located in the client of the user, there is no database so Olivia does not keep any data on the user.

## ⚡ New features [*olivia-ai/olivia*](https://github.com/olivia-ai/olivia)

### 💬 The *math* module
You can compute simples math operations or complicates, Olivia can too use the number of decimals you asked

> Calculate 4 x 3
> That makes 12

> Calculate cos(0.7) * 3.5 with 5 decimals
> That makes 2.67695

### 💬 The *movies* module
Your personal assistant can suggest you movies in different genres, here is the list of available genres: 
`Action, Adventure, Animation, Children, Comedy, Crime, Documentary, Drama, Fantasy, Film-Noir, Horror, Musical, Mystery, Romance, Sci-Fi, Thriller, War and Western`
She choose the best-rated movie in this genre if it is not in the list of movies Olivia already suggested to you (stored in the user cache).
Olivia can too suggest you when you don't ask like when you say:

> I'm bored
> I propose you a movie of Adventure, Animation “Akira (1988)” which is rated 4.07/5

However, you must have told Olivia about your movies preferences:

> I like movies of Adventure
> Understood, I send this information to your client.

But you can of course simply ask for a movie:

> Can you find a movie of Fantasy for me please?
> Sure, I found this movie “Luna Papa (1999)” rated 4.25/5

### 💬 The *name* module
Olivia can remember your name by simply telling her:

> My name is Hugo
> Great! Hi Hugo

see **#User cache** for more information about where your name is stored.

## ⚡ New features [*olivia-ai/olivia-ai.org*](https://github.com/olivia-ai/olivia-ai.org)
### 🖥 Chat page
The chat page has been re-built entirely, it now feels more like a personal assistant.
There is a big animated-button in the center, when you click on it you can speak to Olivia and it moves more quickly

![](https://i.imgur.com/krD50iK.png)

### 🖥 Home page
There is now information about the Progressive Web Application and the Open Source project

![](https://i.imgur.com/1TavDGn.png)

### 🖥 The changelog
The page where you are is the new changelog

![](https://i.imgur.com/Hez4tNP.png)
