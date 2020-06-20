## Jekyll

Jekyll is a static website generator - you write your site in a markup language (we're using markdown) and it converts it into HTML. It also provides the ability to use templates to avoid repitition.

GitHub Pages uses Jekyll to build websites. That is, it's possible to make changes and push to the GitHub repository to update the website without directly interacting with Jekyll at all. However, you won't generally want to make a change live without checking it looks ok first, in which case you will need to use Jekyll on your personal computer.

See https://jekyllrb.com/ for more info.


### Using Jekyll

Installation instructions are at https://jekyllrb.com/docs/installation/.

When Jekyll is installed you should be able to run `jekyll serve` from the project directory on the command line (e.g. in MacOS 'Terminal' or Windows 'Command Prompt'), which should then tell give you some output that looks something like:
```
Configuration file: <path>/sophiegreenfield.github.io/_config.yaml
            Source: <path>/sophiegreenfield.github.io
       Destination: _site/
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.09 seconds.
 Auto-regeneration: enabled for '<path>/sophiegreenfield.github.io'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

If you then go to http://127.0.0.1:4000/ (or equivalently http://localhost:4000) in your web browser you should see a preview of your website! If you make any changes you should be able to simply refresh the page to see them. *Note that these changes will not be visible to anyone else until you push them to GitHub!* 
