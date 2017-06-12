# Electron Government Application

> Hyperledger Fabric Composer

## Setup
This project assumes you have started the Hyperledger Fabric network.

1. Start the admin API
```
npm run rest
```

2. Navigate to the explorer
```
http:/localhost:3000/explorer
```

3. Add a government employee through the explorer

4. Invoke the following command in the terminal (replace the 'JOUWBSNHIER' with the BSN you provided for the employee)
```
composer identity issue -n 'epd' -i admin -s adminpw -u JOUWBSNHIER -a "nl.epd.blockchain.GovernmentEmployee#JOUWBSNHIER"
```

5. Save the secret key somewhere on your harddrive

6. Terminate the npm rest command

7. Start the authorization rest API
```
npm run restAuthentication
```

8. Start the application
```
npm run dev
```

9. Provide your BSN and secret key

10. You should now be able to performs operations like adding patients to the network.

Note: Remember that you have to issue an identity whenever a patient or health care professionals wants to login.
