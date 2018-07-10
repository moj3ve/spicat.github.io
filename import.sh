#!/bin/bash

rm -f Packages*
./dpkg-scanpackages -m ./repo/debs /dev/null | gzip > Packages.gz;
./dpkg-scanpackages -m ./repo/debs /dev/null | bzip2 > Packages.bz2;
./dpkg-scanpackages -m ./repo/debs /dev/null > Packages;
