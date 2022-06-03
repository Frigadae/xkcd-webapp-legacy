# About this Project

## Info

This is holds the legacy code of the XKCD Webapp I built. Included in this project includes a backend script and code for class-based components.
The deployed version has the component rewritten into functional components as it is easier to set up and maintain. 


**For the deployed version, [refer to this repo](https://github.com/wang-yi-yao/xkcdWebapp).**


## How to start this web app
This React app requires a backend server to access the API. Without it the CORS policy in the browser blocks the fetch requests.

1. Before starting, run ``npm install`` in the root folder and in ``backend`` folder to install dependencies.
2. In the ``backend`` folder run command ``node server.js`` using a powershell or terminal window. It should run on ``http://localhost:5000/``.
3. Open a new powershell or terminal window in the root folder and run ``npm start`` to start the webapp.
4. The React app should now be able to make fetch requests. You can now search XKCD comics by number.

## Project demo
You can find a demonstration of the webapp in action [here](https://www.youtube.com/watch?v=v_YiEfR_okA)

## Acknowledgements
I would like to thank William Samaya from dev.to for showing how to overcome the CORS policy problem.
Without his guide I would not be able to utilise the XKCD API for this project.\
See: https://dev.to/will_yama/how-to-overcome-cors-errors-2nh9 


XKCD is by Randall Munroe.\
Please visit [xkcd.com](https://xkcd.com) to directly access the source materials.\
The XKCD api can be found [here](https://xkcd.com/json.html)
