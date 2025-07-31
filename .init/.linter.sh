#!/bin/bash
cd /home/kavia/workspace/code-generation/stationery-storefront-111214-111223/shopping_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

