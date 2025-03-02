

[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)



# Nix devbox environment 

Nix devbox is a development environment that is based on Nix package manager. It is a containerized environment without using docker that is designed to be used with the Devbox CLI. It is a lightweight and easy-to-use development environment that can be used to develop, build, and test software applications. It is designed to be used with the Devbox CLI, which is a command-line interface that allows you to manage your development environment.



## Installation
- https://www.jetify.com/devbox/docs/installing_devbox/


## Examples 
- https://github.com/jetify-com/devbox/tree/main/examples


## scripts guide 
- https://www.jetify.com/docs/devbox/guides/scripts/



## devbox add "package" from https://www.nixhub.io/

- `https://www.nixhub.io/search?q=azure`


```bash
"powershell@7.2.0",
"azure-cli@latest",
"dotnet-sdk_8@latest",
"azure-functions-core-tools@latest",
"vscode@latest",
"pulumi@latest",
"pulumictl@latest",
"go@1.21.",
"nodejs@20.",
"nodePackages.npm@latest",
"yarn@latest",
"python3@3.11.8",
"rPackages.Anaconda@latest", 
"gradle_7@7.6",
"curl@8"


# start Nix devbox
 - devbox shell

# list all devbox scripts
 - devbox run 

# Run any script 
 - devbox run test   

```
