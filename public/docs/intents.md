# Add your own intents

The intents are patterns of messages grouped with a tag like for example

```json
{
    "tag": "hello",
    "patterns": ["Hey", "Hello", "Hi", "Good morning"],
    "responses": ["Hey!", "Hello", "Hi!", "Good morning!"],
    "context": ""
}
```

When the REST Api starts (if there isn't a save in `res/training.json`) all the intents are extracted from `res/intents.json` and trained in the model.

So you can add yours by simply write inside `res/intents.json`