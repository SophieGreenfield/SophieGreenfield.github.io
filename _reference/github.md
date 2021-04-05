## GitHub

GitHub provides hosting for version control of software using Git, i.e. it stores all the history of the changes you make to the website to allow you to roll back to older versions (among other things).

See https://guides.github.com/introduction/git-handbook/ for an introduction to Git and GitHub.


### GitHub Pages

GitHub pages provides deployment of your website in response to pushing changes to a repository on GitHub (provided the GitHub Pages environment is enabled).

See https://pages.github.com/.


### Git

Git is the underlying software used by GitHub for tracking changes in software projects, known as a 'version control system' (VCS). Git is what you use on your personal computer for interacting with GitHub (which exists at https://github.com).

There are many resources online, try Googling 'git introduction' or 'git tutorial'. Also see [here](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/) for a cheat sheet of common Git commands.


### Making changes

It is possible to make changes directly in GitHub, e.g. at [this link](https://github.com/SophieGreenfield/SophieGreenfield.github.io/edit/master/_pages/index.md) (you would need to click 'Commit changes'). However, it's generally best to check things look right before committing changes directly in GitHub (which would make the changes live).

The recommended approach is to get a copy of the files on your personal computer, run `jekyll serve` to check it looks right, and then push the changes to GitHub to make them live.

You can validate YAML file content using <https://yaml-online-parser.appspot.com/>.


### Getting the files

First you will need Git installed, see [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Then, on the command line, run `git clone https://github.com/SophieGreenfield/SophieGreenfield.github.io` to get a copy of the repository in a new directory `SophieGreenfield.github.io/`. You can then open the files in an editor.

You will only need to do this once. To pick up changes made by someone else you should run `git pull` before making any changes of your own to avoid making conflicting changes.


### Pushing changes

If you're happy with the changes you'll want to push them to GitHub to make them live. There are a few steps to follow to do this from the command line:
- Navigate to the project directory `.../SophieGreenfield.github.io/`
- Add changes you wish to push - assuming you're happy to add all changes you've made under the project directory you can just run `git add .` to add everything.
- Commit the added changes with `git commit -m "<Enter a useful message about what you've changed here"`
- Push the changes to GitHub with `git push`
