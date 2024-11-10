

[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)



# Nix devbox environment 

Nix devbox is a development environment that is based on Nix package manager. It is a containerized environment without using docker that is designed to be used with the Devbox CLI. It is a lightweight and easy-to-use development environment that can be used to develop, build, and test software applications. It is designed to be used with the Devbox CLI, which is a command-line interface that allows you to manage your development environment.



## Installation
- https://www.jetify.com/devbox/docs/installing_devbox/


## Examples 
- https://github.com/jetify-com/devbox/tree/main/examples


## scripts guide 
- https://www.jetify.com/docs/devbox/guides/scripts/


## devbox add "package" 
```bash
* powershell@latest
* nginx@latest
* git@latest
* dotnet-sdk_8@latest
* redis@latest
* nodejs@18
* nodePackages.pm2@latest
* vscode@latest
* azure-cli@latest


# start Nix devbox
 - devbox shell
 - expecting .env is in memory and ready to be used 
 - echo $test 


# list all devbox scripts
 - devbox run 

# Run any script 
 - devbox run test   

```





## GitHub Actions Workflow integration 

- ´.github/workflows/devbox-test.yml´





