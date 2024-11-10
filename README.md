

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
* curl@latest
* powershell@latest
* nginx@latest
* git@latest
* dotnet-sdk_8@latest
* redis@latest
* nodejs@18
* nodePackages.pm2@latest
* vscode@latest
* azure-cli@latest
* azure-functions-core-tools@latest


# start Nix devbox
 - devbox shell

# list all devbox scripts
 - devbox run 

# Run any script 
 - devbox run test   

```


## Dependencies for running Azure Function with Powershell in this devbox environment 

```sh
# devbox.yaml
 "packages": [
    "powershell@7.2.0",
    "azure-cli@latest",
    "dotnet-sdk_6@latest",
    "azure-functions-core-tools@latest",
    "vscode@latest"
  ]

# devbox list
- powershell@7.2.0
- azure-cli@latest - 2.65.0
- dotnet-sdk_6@latest - 6.0.405
- azure-functions-core-tools@latest - 4.0.5455
- vscode@latest - 1.95.1
```
