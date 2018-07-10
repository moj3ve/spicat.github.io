#!/bin/bash

rm -f Packages*
./dpkg-scanpackages -m ./debs /dev/null | gzip > Packages.gz;
./dpkg-scanpackages -m ./debs /dev/null | bzip2 > Packages.bz2;
./dpkg-scanpackages -m ./debs /dev/null > Packages;
