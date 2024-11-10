
# This is a test script to test the PowerShell script execution
# pwsh.exe -File <FileName> -ExecutionPolicy Bypass

Write-Host -Object "Testing PowerShell script with version: $($host.Version)"  

## get public IP address of the machine 

$PublicIP = Invoke-RestMethod -Uri "http://ipinfo.io/json" | Select -ExpandProperty ip
Write-Host -Object "Public IP Address: $PublicIP"


## expect the .env is in memory 
echo $test