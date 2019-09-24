#!/bin/bash

result=$(curl -X GET --header "Accept: */*" "http://localhost:8080/notify")
echo $result
