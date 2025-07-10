---
title: "Import users from AD"
---

# Create GoPhish user template from AD
When our "target" company uses AD we can simply do an export using powershell into a csv template that suits gophish.
The CSV format gophish expects has the following header values:  
- First Name
- Last Name
- Email
- Position

An example ps1 script would be:
```powershell
Get-ADUser -Filter "Mail -like '*@domain.com' -and Enabled -eq 'True' -and Surname -like '*' -and GivenName -like '*'" -Properties * |
    Select-Object @{Name='First Name'; Expression={$_.GivenName}},
                  @{Name='Last Name'; Expression={$_.Surname}},
                  @{Name='Position'; Expression={$_.Department}},
                  @{Name='Email'; Expression={$_.Mail}} |
    Sort-Object -Property "First Name" |
    Export-Csv -Path "C:\Users\username\Desktop\users.csv" -NoTypeInformation -Encoding UTF8
```

If get-aduser is not recognised:  
- Check if RSAT for AD is installed:
    -  ```Get-WindowsCapability -Name RSAT* -Online | Select-Object -Property DisplayName, Name, State ```
- Install if needed:
    - ``` Add-WindowsCapability -Online -Name "Rsat.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0" ```