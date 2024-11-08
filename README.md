

[![Built with Devbox](https://www.jetify.com/img/devbox/shield_galaxy.svg)](https://www.jetify.com/devbox/docs/contributor-quickstart/)



## Nix devbox | Development Environment 

Nix devbox is a development environment that is based on Nix package manager. It is a containerized environment without using docker that is designed to be used with the Devbox CLI. It is a lightweight and easy-to-use development environment that can be used to develop, build, and test software applications. It is designed to be used with the Devbox CLI, which is a command-line interface that allows you to manage your development environment.



## Installation
- https://www.jetify.com/devbox/docs/installing_devbox/


## Examples 
- https://github.com/jetify-com/devbox/tree/main/examples


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
devbox shell


# list all devbox scripts
devbox run 

```





## GitHub Actions Workflow

[The job](.github/workflows/devbox-test.yml) in the workflow is performing the following tasks:

1. Checking for a cache of the `devbox` CLI tool version 0.13.6 and the Nix store.
2. The cache is not found for the input keys specified.
3. Setting environment variables, including the latest version of the `devbox` CLI and enabling deterministic Nix builds.
4. Installing the `devbox` CLI and setting up the Nix store.
5. Running the `devbox` CLI to install the specified packages.


The job involves managing caching for specific paths and keys related to the `devbox` CLI and Nix store to optimize workflow performance.