## Nix devbox | Development Environment 

Nix devbox is a development environment that is based on Nix package manager. It is a containerized environment without using docker that is designed to be used with the Devbox CLI. It is a lightweight and easy-to-use development environment that can be used to develop, build, and test software applications. It is designed to be used with the Devbox CLI, which is a command-line interface that allows you to manage your development environment.

[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)


## Installation
- https://www.jetify.com/devbox/docs/installing_devbox/



## devbox shell 
```bash
# list all available packages 
devbox list 
* gettext@latest
* gawk@latest
* nginx@latest
* git@latest
* dotnet-sdk_8@latest
* redis@latest
* nodejs@18
* nodePackages.pm2@latest
* vscode@latest
* azure-cli@latest


devbox update

# start Nix devbox
devbox shell

## start vscode inside the devbox 
code . 

# list all devbox scripts
devbox run 

```


## devbox services | nginx 
- devbox services ls
- devbox services up
- starting service nginx | http://localhost:8081/



## azd | Azure Developer CLI 
- https://devblogs.microsoft.com/azure-sdk/azure-developer-cli-azd-september-2024/


## Awesome-nix
- https://github.com/nix-community/awesome-nix


## Nix and Github Actions

origin:
- https://determinate.systems/posts/nix-github-actions/

I’ve focused on GitHub Actions in this post because it’s very widely used and because I don’t always love its dependency system, but you can employ a similar Nix-based approach in just about any CI system. I strongly encourage you to at least explore the Nix approach for all of your CI use cases. After all, continuous integration is meant to automate your worries and troubles away. Every moment you spend fighting with CI is a moment that goes against the core purpose of the paradigm. With Nix you can reap all the benefits of CI while being unburdened of many common drawbacks.



