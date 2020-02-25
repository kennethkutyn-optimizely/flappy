# Standalone Flappy Bird Demo

## Running Locally
- `yarn`
- `yarn start`

## Instructions for Demoing Live Rollout

1. Create an Optimizely Full Stack project
2. Create a feature called **pipes**
3. Add an integer variable called **gravity** (default value: 9.8)
4. Add an integer variable called **gap** (default value: 120)
5. Replace Your_SDK_Key below with the SDK Key of your project

```https://flappy-demo.onrender.com/?sdkKey=Your_SDK_Key```

The url should look something like the following:

```https://flappy-demo.onrender.com/?sdkKey=HBJkmbDHZavPwkth4aqeh6```

6. Copy the url with your sdk key and paste it into a [QR Code generator](https://www.the-qrcode-generator.com/).
7. Share the QRCode
8. Toggle the pipes feature and change the variables:
- gravity acceptable values between 5 and 20
- gap acceptable values between 80 and 300

Note: 0 is not a valid value, but you can use 1 instead to simulate no gap]

## Instructions for Targeted Demo
1. Add another query param for table as a number (ex: &table=5)
2. Generate QR codes for different tables
```
https://flappy-demo.onrender.com/?sdkKey=HBJkmb&table=1
https://flappy-demo.onrender.com/?sdkKey=HBJkmb&table=2
https://flappy-demo.onrender.com/?sdkKey=HBJkmb&table=3
```
3. Add audience attributes for **table**
4. Create an audience called Special Tables and target specific attributes where the table attribute is (say number 2)


Instructions were reproduced from the following document:
https://docs.google.com/document/d/1l0haG0FYiTeqTdPWqe-43raATQ3E7L1C7fZCMmNDUVU/edit
