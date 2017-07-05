#!/bin/bash
exec testrpc &
exec truffle test
exec kill $!
