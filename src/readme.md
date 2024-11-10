

## origin 

- https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-azure-developer-cli?pivots=programming-language-powershell&tabs=linux%2Cget%2Cbash%2Cpowershell#initialize-the-project


```sh
## this src is created by this Accelerator azd (functions-quickstart-powershell-azd)
azd init --template functions-quickstart-powershell-azd -e flexquickstart-ps

```


- cat local.settings.json 
```
{
    "IsEncrypted": false,
    "Values": {
        "AzureWebJobsStorage": "UseDevelopmentStorage=true",
        "FUNCTIONS_WORKER_RUNTIME": "powershell",
        "FUNCTIONS_WORKER_RUNTIME_VERSION": "7.2"
    }
}
```


## how to run 

```sh
func start

```

















