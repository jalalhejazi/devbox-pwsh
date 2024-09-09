## Nix devbox | Development Environment 

Nix devbox is a development environment that is based on Nix package manager. It is a containerized environment without using docker that is designed to be used with the Devbox CLI. It is a lightweight and easy-to-use development environment that can be used to develop, build, and test software applications. It is designed to be used with the Devbox CLI, which is a command-line interface that allows you to manage your development environment.

[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)


## Installation

- https://www.jetify.com/devbox/docs/installing_devbox/


## devbox shell 
```bash
# list all available packages 
devbox list 
* nginx@latest
* git@latest
* dotnet-sdk_8@latest
* redis@latest
* nodejs@18
* nodePackages.pm2@latest
* vscode@latest


devbox update

# start Nix devbox
devbox shell

## start vscode inside the devbox 
code . 

# git latest version
git 

```


## devbox services | nginx 

- devbox services ls
- devbox services up
- starting service nginx | http://localhost:8081/

