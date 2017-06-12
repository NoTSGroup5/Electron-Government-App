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

7. Add the following 

8. Update your bash profile with the following information (replace the ID and SECRET with your facebook info)
```
export COMPOSER_PROVIDERS='{
"facebook": {
    "provider": "facebook",
    "module": "passport-facebook",
    "clientID": "ID",
    "clientSecret": "SECRET",
    "authPath": "/auth/facebook",
    "callbackURL": "/auth/facebook/callback",
    "successRedirect": "http://localhost:9080?done=true"
    }
}'
```

9. Start the authorization rest API
```
npm run restAuthentication
```

10. Start the application
```
npm run dev
```

11. Provide your BSN and secret key

12. You should now be able to performs operations like adding patients to the network.

Note: Remember that you have to issue an identity whenever a patient or health care professionals wants to login.
