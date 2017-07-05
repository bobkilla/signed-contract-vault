FROM node:6.11

RUN npm install -g ethereumjs-testrpc@3.0.4
RUN npm install -g truffle@3.2.2

COPY 	    start.sh /start.sh
COPY 	    contracts/ /contracts/
COPY 	    migrations/ /migrations/
COPY 	    test/ /test/
COPY 	    truffle.js /truffle.js

RUN chmod +x /start.sh

ENTRYPOINT ["/start.sh"]
