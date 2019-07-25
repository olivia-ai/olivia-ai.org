# Write your own module

With olivia, you can easily add a module:

First of all make sure you are working inside `GOPATH/src/github.com/olivia-ai/olivia`

Just write in a new file inside the `modules` package

```go
package modules

func init() {
	RegisterModule(Module{
		Tag: "mymodule",
		Patterns: []string{
			"Here are the patterns of my module like",
			"Could you give me the latest post of r/memes"
		},
		Responses: []string{
			"And here are the responses, %s",
			"Yes, the post title is %s !",
		},
		Replacer: MyModuleReplacer,
	})
}

func MyModuleReplacer(entry, response string) string {
    // Here execute actions on the string!
    return response
}
```

If there's already a save (`res/training.json`) you must delete it and re-run the REST Api